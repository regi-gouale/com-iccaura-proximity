export class EventModel {
    constructor(
        public id: string,
        public description: string,
        public location: string,
        public theme: string,
        public image: string,
        public startTime: Date,
        public endTime: Date,
        public category: string,
        public created: Date,
        public updated: Date
    ){}
}

export class EventsModel{
    constructor(
        public page: number,
        public perPage: number,
        public totalItems: number,
        public totalPages: number,
        public items: EventModel[]
    ){}
}