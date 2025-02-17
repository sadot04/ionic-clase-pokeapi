export interface Root {
    type: string
    title: string
    status: number
    errors: Errors
  }
  
  export interface Errors {
    file: string[]
  }
  