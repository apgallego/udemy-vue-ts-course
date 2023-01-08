import { DateTime } from "luxon";

export interface Post {
    id: string;
    title: string;
    created: string;
};

export interface TimelinePost extends Omit<Post, "created"> {
//the Omit sentence didn't seem compulsory, but he uses it in the tutorial
    created: DateTime
};

export const today: Post = {
    id: "1",
    title: "Today",
    created: DateTime.now().toISO()
};

export const thisWeek: Post = {
    id: "2",
    title: "This Week",
    created: DateTime.now().minus({days: 5}).toISO()
};

export const thisMonth: Post = {
    id: "3",
    title: "This Month",
    created: DateTime.now().minus({weeks: 3}).toISO()
};