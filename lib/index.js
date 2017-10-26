"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styleApi) {
    const { name, moduleName, isAbsoluteModule, isRelativeModule, hasNoMember, naturally, } = styleApi;
    return [
        // import 'foo';
        // import './foo';
        { match: hasNoMember, sort: moduleName(naturally) },
        { separator: true },
        // import ... from 'fs';
        // import ... from 'foo';
        { match: isAbsoluteModule, sort: moduleName(naturally), sortNamedMembers: name(naturally) },
        // import ... from '../foo';
        // import ... from './foo';
        { match: isRelativeModule, sort: moduleName(naturally), sortNamedMembers: name(naturally) },
    ];
}
exports.default = default_1;
