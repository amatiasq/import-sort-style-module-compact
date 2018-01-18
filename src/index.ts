import { IMatcherFunction, INamedMemberSorterFunction, ISorterFunction, IStyleAPI, IStyleItem } from 'import-sort-style';

import { IImport } from 'import-sort-parser';

function isScopedModule(imported: IImport) {
    return imported.moduleName[0] === '@';
}

export {
    IMatcherFunction,
    INamedMemberSorterFunction,
    ISorterFunction,
};

export default function(styleApi: IStyleAPI) {
    const {
        and,
        not,
        alias,
        dotSegmentCount,
        unicode,
        moduleName,
        isNodeModule,
        isAbsoluteModule,
        isRelativeModule,
        hasNoMember,
    } = styleApi;

    return [
        // import 'foo';
        // import './foo';
        {match: hasNoMember},

        {separator: true},

        // import ... from 'fs';
        {
            match: isNodeModule,
            sort: moduleName(unicode),
            sortNamedMembers: alias(unicode),
        },

        // import ... from 'foo';
        {
            match: and(isAbsoluteModule, not(isScopedModule)),
            sort: moduleName(unicode),
            sortNamedMembers: alias(unicode),
        },

        // import ... from "@scope/foo";
        {
            match: isScopedModule,
            sort: moduleName(unicode),
            sortNamedMembers: alias(unicode),
        },

        // import ... from '../foo';
        // import ... from './foo';
        {
            match: isRelativeModule,
            sort: [dotSegmentCount, moduleName(unicode)],
            sortNamedMembers: alias(unicode),
        },
    ];
}
