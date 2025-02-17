export interface Root {
    created: Created
    subjects: string[]
    latest_revision: number
    description: Description
    key: string
    title: string
    authors: Author[]
    type: Type2
    last_modified: LastModified
    revision: number
  }
  
  export interface Created {
    type: string
    value: string
  }
  
  export interface Description {
    type: string
    value: string
  }
  
  export interface Author {
    type: Type
    author: Author2
  }
  
  export interface Type {
    key: string
  }
  
  export interface Author2 {
    key: string
  }
  
  export interface Type2 {
    key: string
  }
  
  export interface LastModified {
    type: string
    value: string
  }
  