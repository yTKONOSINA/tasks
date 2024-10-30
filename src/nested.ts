import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(qs: Question[]): Question[] {
    let pubs: Question[] = qs.filter((p) => p.published);
    return pubs;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(qs: Question[]): Question[] {
    return qs.filter(
        (q) => q.body !== "" || q.expected !== "" || q.options.length > 0,
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(qs: Question[], id: number): Question | null {
    let found: Question[] = qs.filter((m) => m.id == id);
    if (found.length == 0) {
        return null;
    } else {
        return found[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(qs: Question[], id: number): Question[] {
    let removed: Question[] = qs.filter((m) => m.id != id);
    return removed;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(qs: Question[]): string[] {
    let names: string[] = qs.map((q: Question): string => q.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(qs: Question[]): number {
    let pts: number[] = qs.map((q: Question): number => q.points);
    let total: number = pts.reduce((t: number, c: number) => t + c, 0);
    return total;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(qs: Question[]): number {
    let pubs: Question[] = getPublishedQuestions(qs);
    let sum = sumPoints(pubs);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(qs: Question[]): string {
    const hdr = "id,name,options,points,published";

    const rows = qs.map(
        (q: Question) =>
            `${q.id},${q.name},${q.options.length},${q.points},${q.published}`,
    );
    return [hdr, ...rows].join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(qs: Question[]): Answer[] {
    let answers: Answer[] = qs.map((q) => ({
        questionId: q.id,
        text: "",
        submitted: false,
        correct: false,
    }));
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(qs: Question[]): Question[] {
    let allPub: Question[] = qs.map((q) => ({
        id: q.id,
        name: q.name,
        type: q.type,
        body: q.body,
        expected: q.expected,
        options: q.options,
        points: q.points,
        published: true,
    }));
    return allPub;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(qs: Question[]): boolean {
    if (qs.length == 0) {
        return true;
    } else {
        let firstType: string = qs[0].type;
        return qs.every((q) => q.type == firstType);
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    qs: Question[],
    id: number,
    name: string,
    type: QuestionType,
    type: QuestionType,
): Question[] {
    const blank: Question = makeBlankQuestion(id, name, type);
    return [...qs, blank];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    qs: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return qs.map((q) => (q.id === targetId ? { ...q, name: newName } : q));
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    qs: Question[],
    targetId: number,
    newType: QuestionType,
): Question[] {
    return qs.map((q) =>
        q.id === targetId ?
            {
                ...q,
                type: newType,
                options:
                    newType === "multiple_choice_question" ? q.options : [],
            }
        :   q,
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its option array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    qs: Question[],
    targetId: number,
    targetIndex: number,
    newOpt: string,
): Question[] {
    function updateOptions(opts: string[], idx: number, opt: string): string[] {
        const newOpts = [...opts];
        if (idx === -1) {
            newOpts.push(opt);
        } else {
            newOpts[idx] = opt;
        }
        return newOpts;
    }

    return qs.map((q) =>
        q.id === targetId ?
            {
                ...q,
                options: updateOptions(q.options, targetIndex, newOpt),
            }
        :   q,
    );
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    qs: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const newList: Question[] = [];
    qs.forEach((q) => {
        newList.push(q);
        if (q.id === targetId) {
            newList.push(duplicateQuestion(newId, q));
        }
    });
    return newList;
}
