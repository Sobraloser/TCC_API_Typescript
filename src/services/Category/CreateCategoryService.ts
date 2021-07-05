import { getCustomRepository } from "typeorm"
import { CategoryRepository } from "../../repositories/CategoryRepository"

interface CreateCategoruService {
  name: string;
}

class CreateCategoryService{
  async execute({ name }: CreateCategoruService){
    const repository = getCustomRepository(CategoryRepository)
    const categoryAlreadyExists = await repository.findOne({ name })
    console.log("banana")

    if(categoryAlreadyExists){
      throw new Error("Category already exists status:400")
    }
    const category = repository.create({ name })
    await repository.save(category)
    console.log(category)

    return category
  }
}
export default new CreateCategoryService()