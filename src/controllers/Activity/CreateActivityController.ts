import { Request, Response } from "express";
import CreateActivityService from "../../services/Activity/CreateActivityService";

class CreateActivityController {
  async handle(request: Request, response: Response){
    const { title, description, category } = request.body

    const activity = await CreateActivityService.execute({ title, description, category })

    return response.json(activity)
  }
}
export default new CreateActivityController()