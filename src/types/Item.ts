import { Timestamp } from "firebase/firestore";

export type Item = {
    id: string;
    taskName: string;
    isDone: boolean;
    createdAt: Timestamp;
}