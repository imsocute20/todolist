import Category from './CateEnum'
import { format } from 'date-fns';

class ItemData {
  id!: number;
  categoryId!: Category;
  title!: string;
  content!: string;
  createTime!: string;
  constructor(id: number = 0, categoryId: Category = -1, title: string = '', content: string = '', categoryTime: number = -1) {
    this.id = id
    this.categoryId = categoryId
    this.title = title
    this.content = content
    this.createTime = this.dateFormat(categoryTime)
  }
  dateFormat(timeNumber: number): string {
    let date = new Date()
    let str = format(date, 'yyyy-MM-dd HH:mm:ss')
    return str
  }
}

export default ItemData