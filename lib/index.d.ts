import { IMatcherFunction, INamedMemberSorterFunction, ISorterFunction, IStyleAPI } from 'import-sort-style';
export { IMatcherFunction, INamedMemberSorterFunction, ISorterFunction };
export default function (styleApi: IStyleAPI): ({
    match: IMatcherFunction;
} | {
    separator: boolean;
} | {
    match: IMatcherFunction;
    sort: ISorterFunction;
    sortNamedMembers: INamedMemberSorterFunction;
} | {
    match: IMatcherFunction;
    sort: ISorterFunction[];
    sortNamedMembers: INamedMemberSorterFunction;
})[];
