"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialDoc = void 0;
const static_1 = require("../static");
function getInitialDoc(req, res) {
    res.send({
        initialDoc: static_1.initialData
    });
}
exports.getInitialDoc = getInitialDoc;
//# sourceMappingURL=initial-doc.js.map