import { Injectable } from "@angular/core";
import PocketBase from "pocketbase";
import { CategoryModel } from "../shared/models/category.model";
import { environment } from "src/assets/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor() {}

  async getCategories(): Promise<CategoryModel[]> {
    const pb = new PocketBase(environment.apiBaseUrl);
    return (await pb
      .collection("categories")
      .getFullList({ sort: "-created" })) as CategoryModel[];
  }

  async getCategory(id: string): Promise<CategoryModel> {
    const pb = new PocketBase(environment.apiBaseUrl);
    return (await pb
      .collection("categories")
      .getFirstListItem(`id="${id}"`)) as CategoryModel;
  }

  async createCategory(data: CategoryModel): Promise<CategoryModel> {
    const pb = new PocketBase(environment.apiBaseUrl);
    return (await pb.collection("categories").create(data)) as CategoryModel;
  }

  async updateCategory(
    id: string,
    data: CategoryModel
  ): Promise<CategoryModel> {
    const pb = new PocketBase(environment.apiBaseUrl);
    return (await pb
      .collection("categories")
      .update(id, data)) as CategoryModel;
  }
}
