export interface UserModel {
    Authorization: string,
    User: {
        birthdate: string,
        email: string,
        gender: string,
        id: string,
        name: string
    }
}

export interface LoginModel {
    email: string,
    password: string,
}

export interface ModelBooks {
    books: [
		{
			authors?: [],
			category?: string,
			description?: string,
			id?: string,
			imageUrl?: string,
			isbn10?: string,
			isbn13?: string,
			language?: string,
			pageCount?: number,
			published?:number,
			publisher?: string,
			title?: string
		}
    ]
} 

export interface Container_Book {
    authors?: [],
    category?: string,
    description?: string,
    id?: string,
    imageUrl?: string,
    isbn10?: string,
    isbn13?: string,
    language?: string,
    pageCount?: number,
    published?:number,
    publisher?: string,
    title?: string
}

export interface ModelCategory {
    biographies: boolean,
    manuscripts: boolean,
    poetry: boolean,
    humor: boolean,
    games: boolean,
    scienceFiction: boolean,
}

export interface ModelYear {
    y2015: boolean,
    y2016: boolean,
    y2017: boolean,
    y2018: boolean,
    y2019: boolean,
    y2020: boolean,
    y2021: boolean
}

export interface ModelBookId {
    book:  {
        authors?: [],
        title?: string,
        description?: string,
        pageCount?: number,
        category?: string,
        imageUrl?: string,
        language?: string,
        isbn10?: string,
        isbn13?: string,
        publisher?: string,
        published?: number,
        id?: string
    }
}

export interface DetailBook {
    id?: string;
    isbn10?: string;
    isbn13?: string;
    imageUrl: string;
    authors?: [];
    title?: string
    category?: string;
    description?: string;
    language?: string;
    pageCount?: string;
    published?: string;
    publisher?: string;
}