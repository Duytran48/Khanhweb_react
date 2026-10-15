module.exports = [
(()=>{"use strict";return[
"[project]/src/app/(student)/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/Student.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seedData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$student$2f$StudentHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/student/StudentHero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$student$2f$StudentProgressOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/student/StudentProgressOverview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$student$2f$ExamCardItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/student/ExamCardItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$student$2f$VocabCardItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/student/VocabCardItem.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const EXAM_CATEGORIES = [
    {
        id: "all",
        label: "Tất cả bộ đề"
    },
    {
        id: "ETS",
        label: "ETS"
    },
    {
        id: "HACKER",
        label: "HACKER"
    },
    {
        id: "BIG STEP",
        label: "BIG STEP"
    },
    {
        id: "ECONOMY",
        label: "ECONOMY"
    }
];
function StudentDashboardPage() {
    const [selectedExamCategory, setSelectedExamCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [examStatusFilter, setExamStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [vocabStatusFilter, setVocabStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const examCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let completed = 0;
        let inProgress = 0;
        for (const exam of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedExamList"]){
            if (exam.status === "completed") completed++;
            else if (exam.status === "in_progress") inProgress++;
        }
        return {
            all: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedExamList"].length,
            completed,
            inProgress
        };
    }, []);
    const vocabCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let completed = 0;
        let inProgress = 0;
        for (const v of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedVocabList"]){
            if (v.status === "completed") completed++;
            else if (v.status === "in_progress") inProgress++;
        }
        return {
            all: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedVocabList"].length,
            completed,
            inProgress
        };
    }, []);
    const filteredExams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedExamList"].filter((exam)=>{
            const matchCategory = selectedExamCategory === "all" || exam.category === selectedExamCategory;
            const matchStatus = examStatusFilter === "all" || exam.status === examStatusFilter;
            return matchCategory && matchStatus;
        });
    }, [
        selectedExamCategory,
        examStatusFilter
    ]);
    const filteredVocab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedVocabList"].filter((v)=>{
            if (vocabStatusFilter === "all") return true;
            return v.status === vocabStatusFilter;
        });
    }, [
        vocabStatusFilter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$student$2f$StudentHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedUserData"]
            }, void 0, false, {
                fileName: "[project]/src/app/(student)/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$student$2f$StudentProgressOverview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                progress: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedProgress"]
            }, void 0, false, {
                fileName: "[project]/src/app/(student)/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "de-thi",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionBlock,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerWithFilters,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeading,
                                style: {
                                    marginBottom: 0
                                },
                                children: "Thư Viện Đề Thi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusFilterGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExamStatusFilter("all"),
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPill} ${examStatusFilter === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillInactive}`,
                                        children: [
                                            "Tất cả (",
                                            examCounts.all,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExamStatusFilter("completed"),
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPill} ${examStatusFilter === "completed" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillInactive}`,
                                        children: [
                                            "Đã hoàn thành (",
                                            examCounts.completed,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExamStatusFilter("in_progress"),
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPill} ${examStatusFilter === "in_progress" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillInactive}`,
                                        children: [
                                            "Đang làm dở (",
                                            examCounts.inProgress,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryLabel,
                                children: "Bộ đề:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            EXAM_CATEGORIES.map(({ id, label })=>{
                                const isSelected = selectedExamCategory === id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedExamCategory(id),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryBtn} ${isSelected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryBtnActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryBtnInactive}`,
                                    children: label
                                }, id, false, {
                                    fileName: "[project]/src/app/(student)/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsGrid,
                        children: filteredExams.map((exam)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$student$2f$ExamCardItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                exam: exam
                            }, exam.id, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "tu-vung",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionBlock,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerWithFilters,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeading,
                                style: {
                                    marginBottom: 0
                                },
                                children: "Chủ Đề Từ Vựng Đã Học"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusFilterGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setVocabStatusFilter("all"),
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPill} ${vocabStatusFilter === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillInactive}`,
                                        children: [
                                            "Tất cả (",
                                            vocabCounts.all,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setVocabStatusFilter("completed"),
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPill} ${vocabStatusFilter === "completed" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillInactive}`,
                                        children: [
                                            "Đã thuộc hết (",
                                            vocabCounts.completed,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setVocabStatusFilter("in_progress"),
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPill} ${vocabStatusFilter === "in_progress" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterPillInactive}`,
                                        children: [
                                            "Đang học dở (",
                                            vocabCounts.inProgress,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsGrid,
                        children: filteredVocab.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$student$2f$VocabCardItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                topic: topic
                            }, topic.id, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(student)/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/student/ExamCardItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExamCardItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/Student.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
function ExamCardItem({ exam }) {
    const isCompleted = exam.status === "completed";
    const isInProgress = exam.status === "in_progress";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].examCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgesRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeGreenSoft,
                                        children: exam.badgeType
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeMutedSoft,
                                        children: exam.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            exam.scoreBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: isCompleted ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scoreStatusBadgeGreen : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scoreStatusBadgeAmber,
                                children: exam.scoreBadge
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemHeading,
                        children: exam.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemDesc,
                        children: exam.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "0.78rem",
                                    color: "#64748b",
                                    marginBottom: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isCompleted ? "Kết quả:" : "Tiến độ làm bài:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 600,
                                            color: isCompleted ? "#059669" : "#0f172a"
                                        },
                                        children: isCompleted ? "Đã hoàn thành 100%" : `${exam.progressPercent}%`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBarThin,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: `${exam.progressPercent}%`,
                                        height: "100%",
                                        backgroundColor: isCompleted ? "#059669" : "#f59e0b"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "5px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    exam.durationMinutes,
                                    " phút"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "5px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HelpCircleIcon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    exam.totalQuestions,
                                    " câu"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "5px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UsersIcon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    exam.attemptCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardActionRow,
                children: [
                    isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSecondaryOutline,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotateCcwIcon"], {
                                        size: 15,
                                        style: {
                                            display: "inline",
                                            verticalAlign: "-2px",
                                            marginRight: "6px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    "Làm lại"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSquareIconGreen,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileTextIcon"], {
                                    size: 16,
                                    color: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    isInProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnPrimaryAmber,
                                children: [
                                    "Làm tiếp (",
                                    exam.currentQuestion,
                                    "/200)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSquareIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HelpCircleIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    exam.status === "not_started" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnPrimaryGreen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditIcon"], {
                                        size: 15,
                                        style: {
                                            display: "inline",
                                            verticalAlign: "-2px",
                                            marginRight: "6px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    "Làm bài"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSquareIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HelpCircleIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/ExamCardItem.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/student/ExamCardItem.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/student/ExamCardItem.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/student/StudentHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/Student.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
function StudentHero({ user }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroGrid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroLeftContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dateBadge,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/student/StudentHero.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Hôm nay, ",
                                                user.greetingDate,
                                                " – Chúc bạn ngày mới vui vẻ!"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/student/StudentHero.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroHeading,
                                    children: [
                                        "Xin chào,",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroHeadingAccent,
                                            children: [
                                                user.name,
                                                " (",
                                                user.role,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/student/StudentHero.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        "!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroDescription,
                                    children: [
                                        "Hãy duy trì chuỗi học tập hôm nay để sớm đạt mục tiêu",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroHeadingAccent,
                                            children: "800+ TOEIC"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/student/StudentHero.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        ". Bạn có thể xem tổng quan tiến độ hoặc bắt đầu luyện đề bên dưới."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/student/StudentHero.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statIconFlame,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlameIcon"], {
                                                size: 18,
                                                color: "#d97706"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/student/StudentHero.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/student/StudentHero.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                    children: "Chuỗi học tập"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                    children: [
                                                        user.streakDays,
                                                        " Ngày liên tiếp"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/student/StudentHero.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statIconTarget,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TargetIcon"], {
                                                size: 18,
                                                color: "#059669"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/student/StudentHero.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/student/StudentHero.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                                    children: "Mục tiêu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                                    children: user.targetScore
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/student/StudentHero.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/student/StudentHero.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/student/StudentHero.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].todayGoalCard,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalTrophyIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrophyIcon"], {
                                size: 30,
                                color: "#059669"
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/StudentHero.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/student/StudentHero.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalTitle,
                            children: "Mục tiêu hôm nay"
                        }, void 0, false, {
                            fileName: "[project]/src/components/student/StudentHero.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goalText,
                            children: user.todayGoalText
                        }, void 0, false, {
                            fileName: "[project]/src/components/student/StudentHero.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "#de-thi",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnGoalAction,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Đến danh sách đề"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/StudentHero.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/student/StudentHero.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/student/StudentHero.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/student/StudentHero.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/student/StudentHero.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/student/StudentProgressOverview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentProgressOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/Student.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
function StudentProgressOverview({ progress }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionBlock,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeading,
                children: "Tổng Quan Tiến Độ"
            }, void 0, false, {
                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overviewGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overviewCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTopRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeBlue,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExamIcon"], {
                                                        size: 14,
                                                        style: {
                                                            display: "inline",
                                                            verticalAlign: "-2px",
                                                            marginRight: "6px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Đề thi vừa hoàn thành"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 29,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeMuted,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                                        size: 13,
                                                        style: {
                                                            display: "inline",
                                                            verticalAlign: "-1px",
                                                            marginRight: "4px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 17
                                                    }, this),
                                                    progress.lastExam.completedAt
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 36,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                        children: progress.lastExam.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scoreDonutRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].donutCircle,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].donutScore,
                                                        children: progress.lastExam.score
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].donutMax,
                                                        children: [
                                                            "/",
                                                            progress.lastExam.maxScore,
                                                            " điểm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scoreDetails,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scoreRowTarget,
                                                        children: [
                                                            "Mục tiêu:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: "#0f172a"
                                                                },
                                                                children: [
                                                                    progress.lastExam.targetScore,
                                                                    " đ"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                                lineNumber: 56,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Khoảng cách:",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: "#2563eb"
                                                                },
                                                                children: [
                                                                    "+",
                                                                    progress.lastExam.pointsNeeded,
                                                                    " đ cần đạt"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnCardBlue,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChartIcon"], {
                                        size: 16,
                                        style: {
                                            display: "inline",
                                            verticalAlign: "-2px",
                                            marginRight: "6px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    "Xem lại đáp án và lời giải"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overviewCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTopRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeGreen,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookIcon"], {
                                                        size: 14,
                                                        style: {
                                                            display: "inline",
                                                            verticalAlign: "-2px",
                                                            marginRight: "6px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Từ vựng vừa xong"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeMuted,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                                        size: 13,
                                                        style: {
                                                            display: "inline",
                                                            verticalAlign: "-1px",
                                                            marginRight: "4px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this),
                                                    progress.lastVocab.completedAt
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vocabRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBoxGreen,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UsersIcon"], {
                                                    size: 22,
                                                    color: "#059669"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: "1.15rem",
                                                            fontWeight: 700,
                                                            color: "#0f172a",
                                                            marginBottom: "4px"
                                                        },
                                                        children: progress.lastVocab.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vocabSubTitle,
                                                        children: progress.lastVocab.subTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressLabelRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#475569"
                                                        },
                                                        children: "Đã ghi nhớ:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        style: {
                                                            color: "#059669"
                                                        },
                                                        children: [
                                                            progress.lastVocab.memorizedCount,
                                                            " / ",
                                                            progress.lastVocab.totalCount,
                                                            " từ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBarTrack,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBarFillGreen,
                                                    style: {
                                                        width: `${progress.lastVocab.memorizedCount / progress.lastVocab.totalCount * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/vocabulary",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnCardGreenOutline,
                                style: {
                                    textDecoration: "none",
                                    textAlign: "center"
                                },
                                children: "+ Học chủ đề mới"
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overviewCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTopRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeAmber,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrammarIcon"], {
                                                        size: 14,
                                                        style: {
                                                            display: "inline",
                                                            verticalAlign: "-2px",
                                                            marginRight: "6px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Ngữ pháp vừa học"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeMuted,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                                        size: 13,
                                                        style: {
                                                            display: "inline",
                                                            verticalAlign: "-1px",
                                                            marginRight: "4px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 17
                                                    }, this),
                                                    progress.lastGrammar.studiedAt
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grammarCenter,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grammarIconCircle,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrammarIcon"], {
                                                    size: 26,
                                                    color: "#d97706"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grammarTitle,
                                                children: progress.lastGrammar.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnCardAmberOutline,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditIcon"], {
                                        size: 16,
                                        style: {
                                            display: "inline",
                                            verticalAlign: "-2px",
                                            marginRight: "6px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    "Làm bài tập củng cố"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/student/StudentProgressOverview.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/student/VocabCardItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VocabCardItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/Student.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
const renderVocabIcon = (type)=>{
    switch(type){
        case "contract":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileTextIcon"], {
                size: 22,
                color: "#059669"
            }, void 0, false, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 19,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "finance":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DollarIcon"], {
                size: 22,
                color: "#d97706"
            }, void 0, false, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 21,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "business":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BriefcaseIcon"], {
                size: 22,
                color: "#d97706"
            }, void 0, false, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 23,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "personnel":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UsersIcon"], {
                size: 22,
                color: "#059669"
            }, void 0, false, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 25,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "travel":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneIcon"], {
                size: 22,
                color: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 27,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "shopping":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PackageIcon"], {
                size: 22,
                color: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 29,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookIcon"], {
                size: 22,
                color: "#059669"
            }, void 0, false, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 31,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
    }
};
function VocabCardItem({ topic }) {
    const isCompleted = topic.status === "completed";
    const isInProgress = topic.status === "in_progress";
    const progressPercent = topic.totalCount > 0 ? Math.round(topic.memorizedCount / topic.totalCount * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vocabCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vocabTopRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vocabIconBox,
                                style: {
                                    backgroundColor: isCompleted ? "#ecfdf5" : isInProgress ? "#fffbeb" : "#f8fafc"
                                },
                                children: renderVocabIcon(topic.iconType)
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isCompleted ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scoreStatusBadgeGreen : isInProgress ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scoreStatusBadgeAmber : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeMutedSoft,
                                        style: {
                                            display: "inline-block",
                                            marginBottom: "4px"
                                        },
                                        children: isCompleted ? "Đã học xong" : isInProgress ? "Đang học" : "Chưa học"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].targetLevelLabel,
                                        children: topic.targetLevel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/VocabCardItem.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemHeading,
                        children: topic.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/student/VocabCardItem.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemDesc,
                        children: topic.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/student/VocabCardItem.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "0.78rem",
                                    color: "#64748b",
                                    marginBottom: "6px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Tiến độ từ vựng:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#0f172a"
                                        },
                                        children: [
                                            topic.memorizedCount,
                                            "/",
                                            topic.totalCount,
                                            " từ (",
                                            progressPercent,
                                            "%)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBarThin,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: `${progressPercent}%`,
                                        height: "100%",
                                        backgroundColor: isCompleted ? "#059669" : "#f59e0b"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/student/VocabCardItem.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/vocabulary",
                    className: `${isCompleted ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSecondaryOutline : isInProgress ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnPrimaryAmber : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnPrimaryGreen} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Student$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnFullWidth}`,
                    style: {
                        textDecoration: "none",
                        textAlign: "center"
                    },
                    children: [
                        isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotateCcwIcon"], {
                                    size: 15,
                                    style: {
                                        display: "inline",
                                        verticalAlign: "-2px",
                                        marginRight: "6px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                "Ôn tập lại (",
                                topic.totalCount,
                                " từ)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/student/VocabCardItem.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        isInProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Học tiếp (",
                                topic.memorizedCount,
                                "/",
                                topic.totalCount,
                                " từ)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/student/VocabCardItem.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        topic.status === "not_started" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookIcon"], {
                                    size: 15,
                                    style: {
                                        display: "inline",
                                        verticalAlign: "-2px",
                                        marginRight: "6px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/student/VocabCardItem.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                "Bắt đầu học"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/student/VocabCardItem.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/student/VocabCardItem.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/student/VocabCardItem.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/student/VocabCardItem.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/seedData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedExamList",
    ()=>seedExamList,
    "seedExamSeriesList",
    ()=>seedExamSeriesList,
    "seedProgress",
    ()=>seedProgress,
    "seedUserData",
    ()=>seedUserData,
    "seedVocabList",
    ()=>seedVocabList
]);
const seedUserData = {
    name: 'Khánh',
    role: 'Học viên',
    greetingDate: '13-10-2026',
    streakDays: 7,
    targetScore: 'Target 800+',
    todayGoalText: 'Hoàn thành bài luyện tập để tích lũy thêm điểm chuẩn bị cho kỳ thi.'
};
const seedProgress = {
    lastExam: {
        title: 'ETS TOEIC 2024 – Test 01',
        completedAt: 'Hôm qua, 20:15',
        score: 825,
        maxScore: 990,
        targetScore: 850,
        pointsNeeded: 25
    },
    lastVocab: {
        title: 'Tuyển Dụng & Nhân Sự (Personnel)',
        subTitle: 'Chủ đề 600 từ TOEIC',
        completedAt: 'Hôm nay, 14:30',
        memorizedCount: 10,
        totalCount: 10
    },
    lastGrammar: {
        title: 'Mệnh Đề Quan Hệ & Rút Gọn',
        studiedAt: 'Hôm nay, 09:10'
    }
};
const seedExamList = [
    {
        id: 'ets-2024-01',
        title: 'ETS TOEIC 2024 – Test 01 (Full Format)',
        description: 'Bộ đề sát đề thi thật nhất năm 2024 từ Viện Khảo thí Giáo dục Hoa Kỳ (ETS).',
        category: 'ETS',
        badgeType: 'Full Test',
        status: 'completed',
        scoreBadge: 'Đã xong (825đ)',
        progressPercent: 100,
        durationMinutes: 120,
        totalQuestions: 200,
        attemptCount: '3,840 lượt'
    },
    {
        id: 'ets-2024-02',
        title: 'ETS TOEIC 2024 – Test 02 (Listening & Reading)',
        description: 'Đầy đủ 7 Part với giọng đọc chuẩn Bắc Mỹ, Anh, Úc và lời giải chi tiết.',
        category: 'ETS',
        badgeType: 'Full Test',
        status: 'in_progress',
        scoreBadge: 'Đang làm (115/200 câu)',
        progressPercent: 57,
        durationMinutes: 120,
        totalQuestions: 200,
        attemptCount: '2,950 lượt',
        currentQuestion: 115
    },
    {
        id: 'hacker-05',
        title: 'Hacker TOEIC 3 – Actual Practice Test 05',
        description: 'Độ khó cao hơn đề thi thật 10-15%, phù hợp cho các bạn muốn bứt phá band 850+.',
        category: 'HACKER',
        badgeType: 'Nâng cao',
        status: 'not_started',
        progressPercent: 0,
        durationMinutes: 120,
        totalQuestions: 200,
        attemptCount: '1,890 lượt'
    },
    {
        id: 'bigstep-01',
        title: 'Big Step TOEIC 3 – Test 01 (Chinh phục 750+)',
        description: 'Tổng hợp đề luyện bám sát đề cương kiến thức chuyên sâu.',
        category: 'BIG STEP',
        badgeType: 'Full Test',
        status: 'completed',
        scoreBadge: 'Đã xong (780đ)',
        progressPercent: 100,
        durationMinutes: 120,
        totalQuestions: 200,
        attemptCount: '2,150 lượt'
    },
    {
        id: 'economy-03',
        title: 'New Economy TOEIC Test 03',
        description: 'Tổng hợp đề luyện phản xạ nghe và đọc hiểu văn bản thường gặp.',
        category: 'ECONOMY',
        badgeType: 'Full Test',
        status: 'in_progress',
        scoreBadge: 'Đang làm (65/200 câu)',
        progressPercent: 32,
        durationMinutes: 120,
        totalQuestions: 200,
        attemptCount: '1,420 lượt',
        currentQuestion: 65
    },
    {
        id: 'hacker-01',
        title: 'Hacker TOEIC 2 – Practice Test 01',
        description: 'Rèn luyện kỹ năng giải quyết các câu hỏi Part 3, 4 dài và đoạn văn đôi/ba.',
        category: 'HACKER',
        badgeType: 'Nâng cao',
        status: 'not_started',
        progressPercent: 0,
        durationMinutes: 120,
        totalQuestions: 200,
        attemptCount: '2,800 lượt'
    }
];
const seedVocabList = [
    {
        id: 'contracts',
        title: 'Hợp Đồng & Đàm Phán (Contracts)',
        description: 'Các điều khoản thương lượng, ký kết văn bản và thỏa thuận kinh doanh.',
        targetLevel: 'Mục tiêu 600+',
        status: 'in_progress',
        memorizedCount: 0,
        totalCount: 10,
        iconType: 'contract',
        category: 'topic',
        words: [
            {
                id: 'w1',
                word: 'Abide by',
                phonetic: '/əˈbaɪd baɪ/',
                partOfSpeech: 'v. phrase',
                meaningVi: 'Tuân theo, làm đúng theo (luật lệ, thỏa thuận)',
                exampleEn: 'Both parties agreed to abide by the terms of the contract.',
                exampleVi: 'Cả hai bên đã đồng ý tuân theo các điều khoản của hợp đồng.',
                collocation: 'abide by the rules / agreement',
                synonyms: [
                    'comply with',
                    'adhere to',
                    'conform to'
                ],
                antonyms: [
                    'violate',
                    'breach',
                    'disobey'
                ],
                isMastered: false
            },
            {
                id: 'w2',
                word: 'Agreement',
                phonetic: '/əˈɡriːmənt/',
                partOfSpeech: 'noun',
                meaningVi: 'Hợp đồng, sự thỏa thuận',
                exampleEn: 'They have reached an agreement on wage increases.',
                exampleVi: 'Họ đã đạt được một sự thỏa thuận về việc tăng lương.',
                collocation: 'reach an agreement, come to an agreement',
                synonyms: [
                    'contract',
                    'accord',
                    'settlement'
                ],
                antonyms: [
                    'disagreement',
                    'dispute',
                    'conflict'
                ],
                isMastered: false
            },
            {
                id: 'w3',
                word: 'Assurance',
                phonetic: '/əˈʃʊərəns/',
                partOfSpeech: 'noun',
                meaningVi: 'Sự bảo đảm, cam đoan chắc chắn',
                exampleEn: 'He gave an assurance that work would begin on Monday.',
                exampleVi: 'Ông ấy đã cam đoan rằng công việc sẽ bắt đầu vào thứ Hai.',
                collocation: 'give an assurance, provide assurance',
                synonyms: [
                    'guarantee',
                    'promise',
                    'pledge'
                ],
                antonyms: [
                    'uncertainty',
                    'doubt',
                    'distrust'
                ],
                isMastered: false
            },
            {
                id: 'w4',
                word: 'Cancellation',
                phonetic: '/ˌkænsəˈleɪʃn/',
                partOfSpeech: 'noun',
                meaningVi: 'Sự hủy bỏ, bãi bỏ',
                exampleEn: 'The cancellation clause allows either party to terminate the contract.',
                exampleVi: 'Điều khoản hủy bỏ cho phép một trong hai bên chấm dứt hợp đồng.',
                collocation: 'cancellation fee, notice of cancellation',
                synonyms: [
                    'revocation',
                    'termination',
                    'annulment'
                ],
                antonyms: [
                    'confirmation',
                    'renewal',
                    'continuation'
                ],
                isMastered: false
            },
            {
                id: 'w5',
                word: 'Determine',
                phonetic: '/dɪˈtɜːmɪn/',
                partOfSpeech: 'verb',
                meaningVi: 'Xác định, quyết định',
                exampleEn: 'We need to determine the exact value of the damaged goods.',
                exampleVi: 'Chúng ta cần xác định giá trị chính xác của lô hàng bị hỏng.',
                collocation: 'determine the outcome / value',
                isMastered: false
            },
            {
                id: 'w6',
                word: 'Engage',
                phonetic: '/ɪnˈɡeɪdʒ/',
                partOfSpeech: 'verb',
                meaningVi: 'Tham gia, cam kết, thuê mướn',
                exampleEn: 'They decided to engage a consultant to resolve the dispute.',
                exampleVi: 'Họ quyết định thuê một chuyên gia tư vấn để giải quyết tranh chấp.',
                collocation: 'engage in negotiations, engage a lawyer',
                isMastered: false
            },
            {
                id: 'w7',
                word: 'Establish',
                phonetic: '/ɪˈstæblɪʃ/',
                partOfSpeech: 'verb',
                meaningVi: 'Thiết lập, thành lập, chứng minh',
                exampleEn: 'The company has established a reputation for reliability.',
                exampleVi: 'Công ty đã tạo dựng được uy tín về độ tin cậy.',
                collocation: 'establish guidelines / partnership',
                isMastered: false
            },
            {
                id: 'w8',
                word: 'Obligate',
                phonetic: '/ˈɒblɪɡeɪt/',
                partOfSpeech: 'verb',
                meaningVi: 'Bắt buộc, ràng buộc nghĩa vụ',
                exampleEn: 'The contract obligates the vendor to deliver by Friday.',
                exampleVi: 'Hợp đồng bắt buộc bên bán phải giao hàng trước thứ Sáu.',
                collocation: 'be obligated to do something',
                isMastered: false
            },
            {
                id: 'w9',
                word: 'Party',
                phonetic: '/ˈpɑːti/',
                partOfSpeech: 'noun',
                meaningVi: 'Bên (tham gia hợp đồng, tranh tụng)',
                exampleEn: 'Neither party may disclose confidential information.',
                exampleVi: 'Không bên nào được tiết lộ thông tin bảo mật.',
                collocation: 'third party, contracting party',
                isMastered: false
            },
            {
                id: 'w10',
                word: 'Provision',
                phonetic: '/prəˈvɪʒn/',
                partOfSpeech: 'noun',
                meaningVi: 'Điều khoản (hợp đồng), sự cung cấp',
                exampleEn: 'Under the provisions of the lease, pets are strictly prohibited.',
                exampleVi: 'Theo các điều khoản hợp đồng thuê, vật nuôi bị nghiêm cấm.',
                collocation: 'make provision for, contractual provision',
                isMastered: false
            }
        ]
    },
    {
        id: 'finance',
        title: 'Tài Chính & Doanh Thu (Finance)',
        description: 'Báo cáo doanh số, thuế, phân tích chi phí và thị trường đầu tư chứng khoán.',
        targetLevel: 'Mục tiêu 700+',
        status: 'in_progress',
        memorizedCount: 0,
        totalCount: 6,
        iconType: 'finance',
        category: 'topic',
        words: [
            {
                id: 'f1',
                word: 'Revenue',
                phonetic: '/ˈrevənuː/',
                partOfSpeech: 'noun',
                meaningVi: 'Doanh thu, tổng thu nhập',
                exampleEn: 'Company revenue increased by 15% in the fourth quarter.',
                exampleVi: 'Doanh thu công ty tăng 15% trong quý 4.',
                collocation: 'generate revenue, annual revenue',
                isMastered: false
            },
            {
                id: 'f2',
                word: 'Budget',
                phonetic: '/ˈbʌdʒɪt/',
                partOfSpeech: 'noun',
                meaningVi: 'Ngân sách tài chính',
                exampleEn: 'The marketing department was allocated a budget of $50,000.',
                exampleVi: 'Phòng tiếp thị được phân bổ ngân sách 50.000 đô la.',
                collocation: 'annual budget, budget deficit',
                isMastered: false
            },
            {
                id: 'f3',
                word: 'Expenditure',
                phonetic: '/ɪkˈspendɪtʃər/',
                partOfSpeech: 'noun',
                meaningVi: 'Chi phí, sự chi tiêu',
                exampleEn: 'We must reduce capital expenditure to maintain cash reserves.',
                exampleVi: 'Chúng ta phải giảm chi phí vốn để duy trì dự trữ tiền mặt.',
                collocation: 'cut expenditure, total expenditure',
                isMastered: false
            },
            {
                id: 'f4',
                word: 'Audit',
                phonetic: '/ˈɔːdɪt/',
                partOfSpeech: 'noun / verb',
                meaningVi: 'Kiểm toán, sự kiểm tra sổ sách',
                exampleEn: 'An independent firm was hired to conduct an annual financial audit.',
                exampleVi: 'Một công ty độc lập đã được thuê để tiến hành kiểm toán tài chính hàng năm.',
                collocation: 'conduct an audit, tax audit',
                isMastered: false
            },
            {
                id: 'f5',
                word: 'Dividend',
                phonetic: '/ˈdɪvɪdend/',
                partOfSpeech: 'noun',
                meaningVi: 'Cổ tức',
                exampleEn: 'Shareholders will receive a dividend of 50 cents per share.',
                exampleVi: 'Các cổ đông sẽ nhận được mức cổ tức 50 xu cho mỗi cổ phần.',
                collocation: 'pay a dividend, dividend yield',
                isMastered: false
            },
            {
                id: 'f6',
                word: 'Fiscal',
                phonetic: '/ˈfɪskl/',
                partOfSpeech: 'adjective',
                meaningVi: 'Thuộc tài chính, năm tài khóa',
                exampleEn: 'The new fiscal year will begin on January 1st.',
                exampleVi: 'Năm tài khóa mới sẽ bắt đầu vào ngày 1 tháng 1.',
                collocation: 'fiscal year, fiscal policy',
                isMastered: false
            }
        ]
    },
    {
        id: 'general-business',
        title: 'Quản Trị Văn Phòng (General Business)',
        description: 'Giao tiếp nội bộ, phân công dự án, gửi email và lịch trình làm việc.',
        targetLevel: 'Mục tiêu 500+',
        status: 'in_progress',
        memorizedCount: 4,
        totalCount: 10,
        iconType: 'business',
        category: 'topic'
    },
    {
        id: 'personnel',
        title: 'Tuyển Dụng & Nhân Sự (Personnel)',
        description: 'Quy trình phỏng vấn, hồ sơ ứng viên, thăng chức và chính sách bảo hiểm.',
        targetLevel: 'Mục tiêu 650+',
        status: 'completed',
        memorizedCount: 10,
        totalCount: 10,
        iconType: 'personnel',
        category: 'topic'
    },
    {
        id: 'travel-hotel',
        title: 'Du Lịch & Đặt Phòng (Travel & Hotel)',
        description: 'Hành trình bay, thủ tục hải quan, đặt phòng nghỉ dưỡng và hội nghị quốc tế.',
        targetLevel: 'Mục tiêu 550+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 10,
        iconType: 'travel',
        category: 'topic'
    },
    {
        id: 'shopping-shipping',
        title: 'Mua Sắm & Hậu Cần (Shopping & Shipping)',
        description: 'Đặt đơn hàng, chuỗi cung ứng, vận chuyển kho bãi và chính sách hoàn trả.',
        targetLevel: 'Mục tiêu 600+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 10,
        iconType: 'shopping',
        category: 'topic'
    },
    // Từ vựng theo đề thi (ETS, Hacker)
    // ETS TOEIC 2024 – Test 01
    {
        id: 'part1-ets-2024-01',
        title: 'Part 1: Từ Vựng Miêu Tả Tranh (ETS Test 01)',
        description: 'Hành động người, trạng thái đồ vật, các động từ và cụm giới từ bẫy âm trong Part 1 đề ETS Test 01.',
        targetLevel: 'Mục tiêu 650+',
        status: 'in_progress',
        memorizedCount: 0,
        totalCount: 6,
        iconType: 'business',
        category: 'part',
        examSetId: 'ets-2024-01',
        examSetName: 'ETS TOEIC 2024 – Test 01',
        partLabel: 'Part 1 · Tranh ảnh',
        words: [
            {
                id: 'p1_1',
                word: 'Strolling',
                phonetic: '/ˈstroʊlɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Đi dạo, tản bộ thong thả',
                exampleEn: 'Pedestrians are strolling along the riverbank.',
                exampleVi: 'Người đi bộ đang tản bộ dọc theo bờ sông.',
                collocation: 'strolling along the path / street',
                isMastered: false
            },
            {
                id: 'p1_2',
                word: 'Overlooking',
                phonetic: '/ˌoʊvərˈlʊkɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Nhìn ra, trông ra (hướng view)',
                exampleEn: 'Some buildings are overlooking the outdoor plaza.',
                exampleVi: 'Một số tòa nhà nhìn ra quảng trường ngoài trời.',
                collocation: 'overlooking the water / park',
                isMastered: false
            },
            {
                id: 'p1_3',
                word: 'Arranged',
                phonetic: '/əˈreɪndʒd/',
                partOfSpeech: 'verb / adj',
                meaningVi: 'Được sắp xếp, bố trí ngay ngắn',
                exampleEn: 'Merchandise is arranged on display shelves.',
                exampleVi: 'Hàng hóa được sắp xếp trên các kệ trưng bày.',
                collocation: 'arranged in a row / neatly arranged',
                isMastered: false
            },
            {
                id: 'p1_4',
                word: 'Inspecting',
                phonetic: '/ɪnˈspektɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Kiểm tra, quan sát kỹ lưỡng',
                exampleEn: 'The technician is inspecting some equipment.',
                exampleVi: 'Kỹ thuật viên đang kiểm tra một số thiết bị.',
                collocation: 'inspecting the items / machinery',
                isMastered: false
            },
            {
                id: 'p1_5',
                word: 'Unoccupied',
                phonetic: '/ˌʌnˈɑːkjəpaɪd/',
                partOfSpeech: 'adjective',
                meaningVi: 'Bỏ trống, không có người ngồi/ở',
                exampleEn: 'All the chairs around the table are unoccupied.',
                exampleVi: 'Tất cả ghế quanh bàn đều đang bỏ trống.',
                collocation: 'unoccupied seats / room',
                isMastered: false
            },
            {
                id: 'p1_6',
                word: 'Leaning',
                phonetic: '/ˈliːnɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Tựa vào, dựa người vào',
                exampleEn: 'A bicycle is leaning against the brick wall.',
                exampleVi: 'Một chiếc xe đạp đang tựa vào bức tường gạch.',
                collocation: 'leaning against the railing / wall',
                isMastered: false
            }
        ]
    },
    {
        id: 'part2-ets-2024-01',
        title: 'Part 2: Hỏi & Đáp Bẫy Gián Tiếp (ETS Test 01)',
        description: 'Cụm từ phản hồi gián tiếp, cấu trúc hoãn trả lời và câu trả lời bất ngờ thường thi trong Test 01.',
        targetLevel: 'Mục tiêu 750+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 6,
        iconType: 'personnel',
        category: 'part',
        examSetId: 'ets-2024-01',
        examSetName: 'ETS TOEIC 2024 – Test 01',
        partLabel: 'Part 2 · Hỏi đáp',
        words: [
            {
                id: 'p2_1',
                word: 'Check with',
                phonetic: '/tʃek wɪð/',
                partOfSpeech: 'phrasal verb',
                meaningVi: 'Hỏi lại, tham khảo ý kiến ai đó',
                exampleEn: "You should check with Ms. Gomez in human resources.",
                exampleVi: 'Bạn nên hỏi lại cô Gomez ở phòng nhân sự.',
                collocation: 'check with your supervisor',
                isMastered: false
            },
            {
                id: 'p2_2',
                word: 'Postpone',
                phonetic: '/poʊˈspoʊn/',
                partOfSpeech: 'verb',
                meaningVi: 'Trì hoãn, hoãn lại lịch trình',
                exampleEn: "The quarterly meeting has been postponed until Friday.",
                exampleVi: 'Cuộc họp hàng quý đã bị hoãn lại đến thứ Sáu.',
                collocation: 'postpone until / postpone indefinitely',
                isMastered: false
            },
            {
                id: 'p2_3',
                word: 'In charge of',
                phonetic: '/ɪn tʃɑːrdʒ ʌv/',
                partOfSpeech: 'idiom / phrase',
                meaningVi: 'Chịu trách nhiệm, phụ trách',
                exampleEn: 'Who is in charge of catering for the seminar?',
                exampleVi: 'Ai là người phụ trách đặt tiệc cho buổi hội thảo?',
                collocation: 'be in charge of logistics / sales',
                isMastered: false
            },
            {
                id: 'p2_4',
                word: 'Out of order',
                phonetic: '/aʊt əv ˈɔːrdər/',
                partOfSpeech: 'phrase',
                meaningVi: 'Bị hỏng, không hoạt động',
                exampleEn: 'The elevator on the west wing is temporarily out of order.',
                exampleVi: 'Thang máy ở cánh phía tây đang tạm thời bị hỏng.',
                collocation: 'machine is out of order',
                isMastered: false
            },
            {
                id: 'p2_5',
                word: 'Take care of',
                phonetic: '/teɪk ker ʌv/',
                partOfSpeech: 'phrasal verb',
                meaningVi: 'Xử lý, giải quyết, lo liệu',
                exampleEn: "Don't worry, David said he would take care of the booking.",
                exampleVi: 'Đừng lo, David nói anh ấy sẽ lo liệu việc đặt chỗ.',
                collocation: 'take care of the issue / paperwork',
                isMastered: false
            },
            {
                id: 'p2_6',
                word: 'Run out of',
                phonetic: '/rʌn aʊt əv/',
                partOfSpeech: 'phrasal verb',
                meaningVi: 'Hết, cạn kiệt (vật tư, thời gian)',
                exampleEn: 'We have completely run out of toner for the printer.',
                exampleVi: 'Chúng ta đã hoàn toàn hết mực cho máy in.',
                collocation: 'run out of supplies / time',
                isMastered: false
            }
        ]
    },
    {
        id: 'part5-ets-2024-01',
        title: 'Part 5: Ngữ Pháp & Điền Câu (ETS Test 01)',
        description: 'Các liên từ phụ thuộc, trạng từ chỉ mức độ và cụm danh từ hay gặp nhất trong Part 5 Test 01.',
        targetLevel: 'Mục tiêu 800+',
        status: 'in_progress',
        memorizedCount: 0,
        totalCount: 6,
        iconType: 'contract',
        category: 'part',
        examSetId: 'ets-2024-01',
        examSetName: 'ETS TOEIC 2024 – Test 01',
        partLabel: 'Part 5 · Điền câu',
        words: [
            {
                id: 'p5_1',
                word: 'Promptly',
                phonetic: '/ˈprɑːmptli/',
                partOfSpeech: 'adverb',
                meaningVi: 'Đúng giờ, ngay lập tức, nhanh chóng',
                exampleEn: 'The presentation will begin promptly at 9:00 A.M.',
                exampleVi: 'Bài thuyết trình sẽ bắt đầu đúng 9 giờ sáng.',
                collocation: 'respond promptly, start promptly at',
                isMastered: false
            },
            {
                id: 'p5_2',
                word: 'Substantial',
                phonetic: '/səbˈstænʃl/',
                partOfSpeech: 'adjective',
                meaningVi: 'Đáng kể, to lớn, quan trọng',
                exampleEn: 'The firm reported a substantial increase in net profits.',
                exampleVi: 'Công ty đã báo cáo mức tăng đáng kể trong lợi nhuận ròng.',
                collocation: 'substantial increase / growth / amount',
                isMastered: false
            },
            {
                id: 'p5_3',
                word: 'Complimentary',
                phonetic: '/ˌkɑːmplɪˈmentri/',
                partOfSpeech: 'adjective',
                meaningVi: 'Miễn phí (dịch vụ đi kèm)',
                exampleEn: 'Guests will receive a complimentary breakfast buffet each morning.',
                exampleVi: 'Khách sẽ nhận được bữa sáng buffet miễn phí mỗi buổi sáng.',
                collocation: 'complimentary ticket / shuttle service',
                isMastered: false
            },
            {
                id: 'p5_4',
                word: 'Confidential',
                phonetic: '/ˌkɑːnfɪˈdenʃl/',
                partOfSpeech: 'adjective',
                meaningVi: 'Bảo mật, tuyệt mật',
                exampleEn: 'All patient records must be kept strictly confidential.',
                exampleVi: 'Tất cả hồ sơ bệnh nhân phải được giữ tuyệt mật.',
                collocation: 'highly confidential / strictly confidential',
                isMastered: false
            },
            {
                id: 'p5_5',
                word: 'Tentative',
                phonetic: '/ˈtentətɪv/',
                partOfSpeech: 'adjective',
                meaningVi: 'Dự kiến, tạm thời (chưa chốt)',
                exampleEn: 'We have agreed on a tentative schedule for the product launch.',
                exampleVi: 'Chúng tôi đã đồng ý với lịch trình dự kiến cho việc ra mắt sản phẩm.',
                collocation: 'tentative agreement / schedule / date',
                isMastered: false
            },
            {
                id: 'p5_6',
                word: 'Mandatory',
                phonetic: '/ˈmændətɔːri/',
                partOfSpeech: 'adjective',
                meaningVi: 'Bắt buộc theo quy định',
                exampleEn: 'Attendance at the safety orientation is mandatory for all new hires.',
                exampleVi: 'Việc tham gia buổi định hướng an toàn là bắt buộc đối với nhân viên mới.',
                collocation: 'mandatory training / attendance',
                isMastered: false
            }
        ]
    },
    {
        id: 'part7-ets-2024-01',
        title: 'Part 7: Đọc Hiểu Đoạn Văn & Email (ETS Test 01)',
        description: 'Từ vựng thông báo nội bộ, email phản hồi khách hàng và biên bản họp trong Part 7 Test 01.',
        targetLevel: 'Mục tiêu 850+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 6,
        iconType: 'finance',
        category: 'part',
        examSetId: 'ets-2024-01',
        examSetName: 'ETS TOEIC 2024 – Test 01',
        partLabel: 'Part 7 · Đoạn văn',
        words: [
            {
                id: 'p7_1',
                word: 'Inconvenience',
                phonetic: '/ˌɪnkənˈviːniəns/',
                partOfSpeech: 'noun',
                meaningVi: 'Sự bất tiện, phiền hà',
                exampleEn: 'We apologize for any inconvenience caused during system upgrades.',
                exampleVi: 'Chúng tôi xin lỗi vì sự bất tiện gây ra trong quá trình nâng cấp hệ thống.',
                collocation: 'apologize for the inconvenience',
                isMastered: false
            },
            {
                id: 'p7_2',
                word: 'Compensation',
                phonetic: '/ˌkɑːmpenˈseɪʃn/',
                partOfSpeech: 'noun',
                meaningVi: 'Khoản đền bù, bồi thường thiệt hại',
                exampleEn: 'Affected passengers are eligible for monetary compensation.',
                exampleVi: 'Hành khách bị ảnh hưởng đủ điều kiện nhận tiền bồi thường.',
                collocation: 'seek compensation, offer compensation',
                isMastered: false
            },
            {
                id: 'p7_3',
                word: 'Warranty',
                phonetic: '/ˈwɔːrənti/',
                partOfSpeech: 'noun',
                meaningVi: 'Phiếu bảo hành, thời hạn bảo hành',
                exampleEn: 'The refrigerator comes with a two-year limited warranty.',
                exampleVi: 'Tủ lạnh đi kèm với bảo hành có giới hạn trong hai năm.',
                collocation: 'under warranty, extended warranty',
                isMastered: false
            },
            {
                id: 'p7_4',
                word: 'Renovation',
                phonetic: '/ˌrenəˈveɪʃn/',
                partOfSpeech: 'noun',
                meaningVi: 'Sự cải tạo, tu sửa công trình',
                exampleEn: 'The branch will close next week for interior renovation.',
                exampleVi: 'Chi nhánh sẽ đóng cửa vào tuần tới để tu sửa nội thất.',
                collocation: 'extensive renovation, undergo renovation',
                isMastered: false
            },
            {
                id: 'p7_5',
                word: 'Specification',
                phonetic: '/ˌspesɪfɪˈkeɪʃn/',
                partOfSpeech: 'noun',
                meaningVi: 'Thông số kỹ thuật, quy cách chi tiết',
                exampleEn: 'The product does not meet the required safety specifications.',
                exampleVi: 'Sản phẩm không đáp ứng các thông số an toàn theo yêu cầu.',
                collocation: 'technical specifications, meet specifications',
                isMastered: false
            },
            {
                id: 'p7_6',
                word: 'Endorsement',
                phonetic: '/ɪnˈdɔːrsmənt/',
                partOfSpeech: 'noun',
                meaningVi: 'Sự chứng thực, quảng bá ủng hộ',
                exampleEn: 'The celebrity endorsement significantly boosted brand awareness.',
                exampleVi: 'Sự chứng thực của người nổi tiếng đã thúc đẩy đáng kể nhận diện thương hiệu.',
                collocation: 'celebrity endorsement, official endorsement',
                isMastered: false
            }
        ]
    },
    // ETS TOEIC 2024 – Test 02
    {
        id: 'part1-ets-2024-02',
        title: 'Part 1: Tranh Môi Trường Công Sở (ETS Test 02)',
        description: 'Từ vựng các thao tác văn phòng, bảo trì thiết bị và vận hành máy móc trong Test 02.',
        targetLevel: 'Mục tiêu 650+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 6,
        iconType: 'business',
        category: 'part',
        examSetId: 'ets-2024-02',
        examSetName: 'ETS TOEIC 2024 – Test 02',
        partLabel: 'Part 1 · Tranh ảnh',
        words: [
            {
                id: 'p1_2_1',
                word: 'Assembling',
                phonetic: '/əˈsemblɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Lắp ráp, ráp các bộ phận lại với nhau',
                exampleEn: 'The workers are assembling components on the production line.',
                exampleVi: 'Công nhân đang lắp ráp các linh kiện trên dây chuyền sản xuất.',
                collocation: 'assembling furniture / machinery',
                isMastered: false
            },
            {
                id: 'p1_2_2',
                word: 'Unloading',
                phonetic: '/ʌnˈloʊdɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Bốc dỡ hàng hóa khỏi xe/tàu',
                exampleEn: 'Delivery personnel are unloading boxes from the truck.',
                exampleVi: 'Nhân viên giao hàng đang bốc dỡ các thùng hàng khỏi xe tải.',
                collocation: 'unloading cargo / packages',
                isMastered: false
            },
            {
                id: 'p1_2_3',
                word: 'Operating',
                phonetic: '/ˈɑːpəreɪtɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Vận hành, điều khiển thiết bị',
                exampleEn: 'An employee is operating a heavy forklift.',
                exampleVi: 'Một nhân viên đang điều khiển chiếc xe nâng hàng lớn.',
                collocation: 'operating heavy machinery',
                isMastered: false
            },
            {
                id: 'p1_2_4',
                word: 'Occupied',
                phonetic: '/ˈɑːkjəpaɪd/',
                partOfSpeech: 'adjective',
                meaningVi: 'Đang có người dùng/ở (đối lập với unoccupied)',
                exampleEn: 'Most of the workstations in the office are occupied.',
                exampleVi: 'Hầu hết các bàn làm việc trong văn phòng đều đang có người ngồi.',
                collocation: 'fully occupied / occupied room',
                isMastered: false
            },
            {
                id: 'p1_2_5',
                word: 'Fastening',
                phonetic: '/ˈfæsənɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Thắt chặt, buộc chặt (dây an toàn, ốc vít)',
                exampleEn: 'The driver is fastening his seatbelt before departure.',
                exampleVi: 'Tài xế đang thắt dây an toàn trước khi khởi hành.',
                collocation: 'fasten seatbelt / fasten securely',
                isMastered: false
            },
            {
                id: 'p1_2_6',
                word: 'Distributing',
                phonetic: '/dɪˈstrɪbjuːtɪŋ/',
                partOfSpeech: 'verb (V-ing)',
                meaningVi: 'Phát, phân phát tài liệu cho mọi người',
                exampleEn: 'The assistant is distributing handouts to meeting attendees.',
                exampleVi: 'Trợ lý đang phát tài liệu cho những người tham dự cuộc họp.',
                collocation: 'distributing documents / brochures',
                isMastered: false
            }
        ]
    },
    {
        id: 'part5-ets-2024-02',
        title: 'Part 5: Cụm Từ Cố Định & Từ Loại (ETS Test 02)',
        description: 'Tổng hợp các collocation quan trọng và từ loại dễ nhầm lẫn trong Test 02.',
        targetLevel: 'Mục tiêu 800+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 6,
        iconType: 'contract',
        category: 'part',
        examSetId: 'ets-2024-02',
        examSetName: 'ETS TOEIC 2024 – Test 02',
        partLabel: 'Part 5 · Điền câu',
        words: [
            {
                id: 'p5_2_1',
                word: 'Accommodate',
                phonetic: '/əˈkɑːmədeɪt/',
                partOfSpeech: 'verb',
                meaningVi: 'Đáp ứng nhu cầu, chứa được số lượng người',
                exampleEn: 'The conference hall can accommodate up to 500 delegates.',
                exampleVi: 'Hội trường hội nghị có thể chứa tới 500 đại biểu.',
                collocation: 'accommodate requests / large groups',
                isMastered: false
            },
            {
                id: 'p5_2_2',
                word: 'Comprehensive',
                phonetic: '/ˌkɑːmprɪˈhensɪv/',
                partOfSpeech: 'adjective',
                meaningVi: 'Toàn diện, bao quát đầy đủ mọi khía cạnh',
                exampleEn: 'We provide a comprehensive warranty covering all parts and labor.',
                exampleVi: 'Chúng tôi cung cấp gói bảo hành toàn diện bao gồm mọi linh kiện và công sửa.',
                collocation: 'comprehensive guide / insurance plan',
                isMastered: false
            },
            {
                id: 'p5_2_3',
                word: 'Reluctant',
                phonetic: '/rɪˈlʌktənt/',
                partOfSpeech: 'adjective',
                meaningVi: 'Lưỡng lự, ngần ngại (chưa sẵn sàng làm)',
                exampleEn: 'Investors were reluctant to commit capital to the risky venture.',
                exampleVi: 'Các nhà đầu tư đã ngần ngại rót vốn vào dự án mạo hiểm.',
                collocation: 'be reluctant to do something',
                isMastered: false
            },
            {
                id: 'p5_2_4',
                word: 'Subsequent',
                phonetic: '/ˈsʌbsɪkwənt/',
                partOfSpeech: 'adjective',
                meaningVi: 'Xảy ra sau đó, tiếp theo',
                exampleEn: 'Subsequent studies confirmed the effectiveness of the new drug.',
                exampleVi: 'Các nghiên cứu tiếp theo đã khẳng định hiệu quả của loại thuốc mới.',
                collocation: 'subsequent years / subsequent events',
                isMastered: false
            },
            {
                id: 'p5_2_5',
                word: 'Incentive',
                phonetic: '/ɪnˈsentɪv/',
                partOfSpeech: 'noun',
                meaningVi: 'Sự khuyến khích, phần thưởng khích lệ',
                exampleEn: 'The firm offers financial incentives for staff who exceed sales targets.',
                exampleVi: 'Công ty thưởng tài chính khích lệ nhân viên vượt chỉ tiêu doanh số.',
                collocation: 'provide incentives / bonus incentive',
                isMastered: false
            },
            {
                id: 'p5_2_6',
                word: 'Punctual',
                phonetic: '/ˈpʌŋktʃuəl/',
                partOfSpeech: 'adjective',
                meaningVi: 'Đúng giờ, không bao giờ trễ hẹn',
                exampleEn: 'All applicants are expected to be punctual for their interviews.',
                exampleVi: 'Tất cả ứng viên được yêu cầu phải đúng giờ cho buổi phỏng vấn.',
                collocation: 'arrive punctual / be punctual',
                isMastered: false
            }
        ]
    },
    // Hacker TOEIC 3 – Test 05
    {
        id: 'part5-hacker-05',
        title: 'Part 5: Từ Vựng Bẫy Nâng Cao 850+ (Hacker Test 05)',
        description: 'Từ vựng mức độ khó cao từ bộ đề Hacker Actual Test 05 dành cho mục tiêu 850+.',
        targetLevel: 'Mục tiêu 850+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 6,
        iconType: 'contract',
        category: 'part',
        examSetId: 'hacker-05',
        examSetName: 'Hacker TOEIC 3 – Actual Test 05',
        partLabel: 'Part 5 · Bẫy nâng cao',
        words: [
            {
                id: 'p5_h_1',
                word: 'Deteriorate',
                phonetic: '/dɪˈtɪriəreɪt/',
                partOfSpeech: 'verb',
                meaningVi: 'Xấu đi, giảm sút chất lượng nghiêm trọng',
                exampleEn: 'Economic conditions began to deteriorate rapidly after the crisis.',
                exampleVi: 'Tình hình kinh tế bắt đầu xấu đi nhanh chóng sau cuộc khủng hoảng.',
                collocation: 'deteriorate rapidly / quality deteriorates',
                isMastered: false
            },
            {
                id: 'p5_h_2',
                word: 'Lucrative',
                phonetic: '/ˈluːkrətɪv/',
                partOfSpeech: 'adjective',
                meaningVi: 'Sinh lợi lớn, đem lại nhiều tiền',
                exampleEn: 'The tech start-up secured a lucrative contract with the government.',
                exampleVi: 'Công ty khởi nghiệp công nghệ đã ký được hợp đồng béo bở với chính phủ.',
                collocation: 'lucrative deal / business opportunity',
                isMastered: false
            },
            {
                id: 'p5_h_3',
                word: 'Rigorous',
                phonetic: '/ˈrɪɡərəs/',
                partOfSpeech: 'adjective',
                meaningVi: 'Nghiêm ngặt, khắt khe, tỉ mỉ',
                exampleEn: 'The laboratory adheres to rigorous safety standards at all times.',
                exampleVi: 'Phòng thí nghiệm luôn tuân thủ các tiêu chuẩn an toàn nghiêm ngặt.',
                collocation: 'rigorous testing / rigorous standards',
                isMastered: false
            },
            {
                id: 'p5_h_4',
                word: 'Precaution',
                phonetic: '/prɪˈkɔːʃn/',
                partOfSpeech: 'noun',
                meaningVi: 'Biện pháp phòng ngừa, đề phòng rủi ro',
                exampleEn: 'We took extra safety precautions before beginning construction.',
                exampleVi: 'Chúng tôi đã thực hiện thêm các biện pháp đề phòng an toàn trước khi khởi công.',
                collocation: 'take precautions / safety precautions',
                isMastered: false
            },
            {
                id: 'p5_h_5',
                word: 'Surplus',
                phonetic: '/ˈsɜːrpləs/',
                partOfSpeech: 'noun / adj',
                meaningVi: 'Số dư, thặng dư ngân sách',
                exampleEn: 'The municipality recorded a budget surplus at the end of the fiscal year.',
                exampleVi: 'Thành phố ghi nhận thặng dư ngân sách vào cuối năm tài chính.',
                collocation: 'budget surplus / trade surplus',
                isMastered: false
            },
            {
                id: 'p5_h_6',
                word: 'Stipulate',
                phonetic: '/ˈstɪpjuleɪt/',
                partOfSpeech: 'verb',
                meaningVi: 'Quy định rõ ràng (trong điều khoản hợp đồng)',
                exampleEn: 'The contract stipulates that payment must be made within 30 days.',
                exampleVi: 'Hợp đồng quy định rõ việc thanh toán phải được thực hiện trong vòng 30 ngày.',
                collocation: 'stipulate in the agreement',
                isMastered: false
            }
        ]
    }
];
const seedExamSeriesList = [
    {
        id: 'ets-2024',
        title: 'Bộ đề ETS TOEIC 2024',
        shortLabel: '2024',
        publisher: 'ETS',
        badge: 'Đề thi chuẩn ETS',
        totalTests: 6,
        description: 'Bộ đề sát với format đề thi thật TOEIC nhất hiện nay từ ETS, tổng hợp từ vựng chọn lọc xuất hiện trực tiếp trong từng Part của Test 1 đến Test 6.',
        tests: [
            {
                id: 'ets24-test-01',
                testNumber: 1,
                title: 'ETS 2024 – Test 01',
                badge: 'Full Test 01',
                description: 'Đầy đủ từ vựng trọng tâm từ Part 1 đến Part 7 của đề thi Test 01.',
                status: 'in_progress',
                totalWords: 42,
                masteredWords: 8,
                parts: [
                    {
                        id: 'ets24-t1-p1',
                        partNumber: 1,
                        partTitle: 'Part 1: Photographs (Tranh miêu tả)',
                        skillType: 'Listening',
                        description: 'Động từ chỉ hành động người và trạng thái tĩnh của đồ vật trong tranh.',
                        totalCount: 6,
                        memorizedCount: 2,
                        status: 'in_progress',
                        words: [
                            {
                                id: 'p1_1',
                                word: 'Strolling',
                                phonetic: '/ˈstroʊlɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Đi dạo, tản bộ thong thả',
                                exampleEn: 'Pedestrians are strolling along the riverbank.',
                                exampleVi: 'Người đi bộ đang tản bộ dọc theo bờ sông.',
                                collocation: 'strolling along the path / street',
                                isMastered: false
                            },
                            {
                                id: 'p1_2',
                                word: 'Overlooking',
                                phonetic: '/ˌoʊvərˈlʊkɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Nhìn ra, trông ra (hướng view)',
                                exampleEn: 'Some buildings are overlooking the outdoor plaza.',
                                exampleVi: 'Một số tòa nhà nhìn ra quảng trường ngoài trời.',
                                collocation: 'overlooking the water / park',
                                isMastered: false
                            },
                            {
                                id: 'p1_3',
                                word: 'Arranged',
                                phonetic: '/əˈreɪndʒd/',
                                partOfSpeech: 'verb / adj',
                                meaningVi: 'Được sắp xếp, bố trí ngay ngắn',
                                exampleEn: 'Merchandise is arranged on display shelves.',
                                exampleVi: 'Hàng hóa được sắp xếp trên các kệ trưng bày.',
                                collocation: 'arranged in a row / neatly arranged',
                                isMastered: false
                            },
                            {
                                id: 'p1_4',
                                word: 'Inspecting',
                                phonetic: '/ɪnˈspektɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Kiểm tra, quan sát kỹ lưỡng',
                                exampleEn: 'The technician is inspecting some equipment.',
                                exampleVi: 'Kỹ thuật viên đang kiểm tra một số thiết bị.',
                                collocation: 'inspecting the items / machinery',
                                isMastered: false
                            },
                            {
                                id: 'p1_5',
                                word: 'Unoccupied',
                                phonetic: '/ˌʌnˈɑːkjəpaɪd/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Bỏ trống, không có người ngồi/ở',
                                exampleEn: 'All the chairs around the table are unoccupied.',
                                exampleVi: 'Tất cả ghế quanh bàn đều đang bỏ trống.',
                                collocation: 'unoccupied seats / room',
                                isMastered: false
                            },
                            {
                                id: 'p1_6',
                                word: 'Leaning',
                                phonetic: '/ˈliːnɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Tựa vào, dựa người vào',
                                exampleEn: 'A bicycle is leaning against the brick wall.',
                                exampleVi: 'Một chiếc xe đạp đang tựa vào bức tường gạch.',
                                collocation: 'leaning against the railing / wall',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t1-p2',
                        partNumber: 2,
                        partTitle: 'Part 2: Question-Response (Hỏi & Đáp)',
                        skillType: 'Listening',
                        description: 'Các cấu trúc trả lời gián tiếp, cụm từ hoãn câu trả lời và phản hồi bất ngờ.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p2_1',
                                word: 'Check with',
                                phonetic: '/tʃek wɪð/',
                                partOfSpeech: 'phrasal verb',
                                meaningVi: 'Hỏi lại, tham khảo ý kiến ai đó',
                                exampleEn: 'You should check with Ms. Gomez in human resources.',
                                exampleVi: 'Bạn nên hỏi lại cô Gomez ở phòng nhân sự.',
                                collocation: 'check with your supervisor',
                                isMastered: false
                            },
                            {
                                id: 'p2_2',
                                word: 'Postpone',
                                phonetic: '/poʊˈspoʊn/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Trì hoãn, hoãn lại lịch trình',
                                exampleEn: 'The quarterly meeting has been postponed until Friday.',
                                exampleVi: 'Cuộc họp hàng quý đã bị hoãn lại đến thứ Sáu.',
                                collocation: 'postpone until / postpone indefinitely',
                                isMastered: false
                            },
                            {
                                id: 'p2_3',
                                word: 'In charge of',
                                phonetic: '/ɪn tʃɑːrdʒ ʌv/',
                                partOfSpeech: 'idiom / phrase',
                                meaningVi: 'Chịu trách nhiệm, phụ trách',
                                exampleEn: 'Who is in charge of catering for the seminar?',
                                exampleVi: 'Ai là người phụ trách đặt tiệc cho buổi hội thảo?',
                                collocation: 'be in charge of logistics / sales',
                                isMastered: false
                            },
                            {
                                id: 'p2_4',
                                word: 'Out of order',
                                phonetic: '/aʊt əv ˈɔːrdər/',
                                partOfSpeech: 'phrase',
                                meaningVi: 'Bị hỏng, không hoạt động',
                                exampleEn: 'The elevator on the west wing is temporarily out of order.',
                                exampleVi: 'Thang máy ở cánh phía tây đang tạm thời bị hỏng.',
                                collocation: 'machine is out of order',
                                isMastered: false
                            },
                            {
                                id: 'p2_5',
                                word: 'Take care of',
                                phonetic: '/teɪk ker ʌv/',
                                partOfSpeech: 'phrasal verb',
                                meaningVi: 'Xử lý, giải quyết, lo liệu',
                                exampleEn: "Don't worry, David said he would take care of the booking.",
                                exampleVi: 'Đừng lo, David nói anh ấy sẽ lo liệu việc đặt chỗ.',
                                collocation: 'take care of the issue / paperwork',
                                isMastered: false
                            },
                            {
                                id: 'p2_6',
                                word: 'Run out of',
                                phonetic: '/rʌn aʊt əv/',
                                partOfSpeech: 'phrasal verb',
                                meaningVi: 'Hết, cạn kiệt (vật tư, thời gian)',
                                exampleEn: 'We have completely run out of toner for the printer.',
                                exampleVi: 'Chúng ta đã hoàn toàn hết mực cho máy in.',
                                collocation: 'run out of supplies / time',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t1-p3',
                        partNumber: 3,
                        partTitle: 'Part 3: Conversations (Hội thoại)',
                        skillType: 'Listening',
                        description: 'Từ vựng các chủ đề văn phòng, xử lý vấn đề đơn hàng và lịch trình công tác.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p3_1',
                                word: 'Reschedule',
                                phonetic: '/ˌriːˈskedʒuːl/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Dời lại lịch hẹn, sắp xếp lại thời gian',
                                exampleEn: 'Could we reschedule our appointment for Thursday afternoon?',
                                exampleVi: 'Chúng ta có thể dời lịch hẹn sang chiều thứ Năm được không?',
                                collocation: 'reschedule an appointment / meeting',
                                isMastered: false
                            },
                            {
                                id: 'p3_2',
                                word: 'Invoice',
                                phonetic: '/ˈɪnvɔɪs/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Hóa đơn thanh toán',
                                exampleEn: 'Please submit the revised invoice to the accounting office.',
                                exampleVi: 'Vui lòng nộp hóa đơn đã sửa đổi cho phòng kế toán.',
                                collocation: 'issue an invoice / overdue invoice',
                                isMastered: false
                            },
                            {
                                id: 'p3_3',
                                word: 'Shortage',
                                phonetic: '/ˈʃɔːrtɪdʒ/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự thiếu hụt (nguồn cung, nhân lực)',
                                exampleEn: 'We are currently experiencing a temporary staff shortage.',
                                exampleVi: 'Hiện tại chúng tôi đang gặp tình trạng thiếu hụt nhân viên tạm thời.',
                                collocation: 'labor shortage / food shortage',
                                isMastered: false
                            },
                            {
                                id: 'p3_4',
                                word: 'Confirm',
                                phonetic: '/kənˈfɜːrm/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Xác nhận (đơn hàng, thông tin đặt phòng)',
                                exampleEn: 'I am calling to confirm your flight reservation.',
                                exampleVi: 'Tôi gọi điện để xác nhận đặt chỗ chuyến bay của bạn.',
                                collocation: 'confirm the reservation / details',
                                isMastered: false
                            },
                            {
                                id: 'p3_5',
                                word: 'Representative',
                                phonetic: '/ˌreprɪˈzentətɪv/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Người đại diện, nhân viên hỗ trợ khách hàng',
                                exampleEn: 'A customer service representative will assist you shortly.',
                                exampleVi: 'Một đại diện dịch vụ khách hàng sẽ hỗ trợ bạn ngay.',
                                collocation: 'sales representative / customer service representative',
                                isMastered: false
                            },
                            {
                                id: 'p3_6',
                                word: 'Feedback',
                                phonetic: '/ˈfiːdbæk/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Ý kiến phản hồi, nhận xét',
                                exampleEn: 'Client feedback on the new mobile app has been positive.',
                                exampleVi: 'Phản hồi của khách hàng về ứng dụng mới rất tích cực.',
                                collocation: 'gather feedback / positive feedback',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t1-p4',
                        partNumber: 4,
                        partTitle: 'Part 4: Talks (Bài nói ngắn)',
                        skillType: 'Listening',
                        description: 'Thông báo sân bay, quảng cáo trên radio, hướng dẫn tham quan và thuyết trình.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p4_1',
                                word: 'Announcement',
                                phonetic: '/əˈnaʊnsmənt/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Thông báo chính thức, lời tuyên bố',
                                exampleEn: 'Please listen carefully to the boarding announcement.',
                                exampleVi: 'Vui lòng lắng nghe kỹ thông báo lên máy bay.',
                                collocation: 'make an announcement / official announcement',
                                isMastered: false
                            },
                            {
                                id: 'p4_2',
                                word: 'Keynote speaker',
                                phonetic: '/ˈkiːnoʊt ˈspiːkər/',
                                partOfSpeech: 'noun phrase',
                                meaningVi: 'Diễn giả chính (tại hội nghị)',
                                exampleEn: 'Our keynote speaker today is Dr. Angela Morrison.',
                                exampleVi: 'Diễn giả chính của chúng ta hôm nay là Tiến sĩ Angela Morrison.',
                                collocation: 'invite a keynote speaker',
                                isMastered: false
                            },
                            {
                                id: 'p4_3',
                                word: 'Broadcasting',
                                phonetic: '/ˈbrɔːdkæstɪŋ/',
                                partOfSpeech: 'verb / noun',
                                meaningVi: 'Phát sóng truyền thanh, phát hình',
                                exampleEn: 'The program is broadcasting live from the city center.',
                                exampleVi: 'Chương trình đang phát sóng trực tiếp từ trung tâm thành phố.',
                                collocation: 'live broadcasting / radio station',
                                isMastered: false
                            },
                            {
                                id: 'p4_4',
                                word: 'Promotion',
                                phonetic: '/prəˈmoʊʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Chương trình khuyến mãi; sự thăng tiến',
                                exampleEn: 'Take advantage of our weekend promotional discount.',
                                exampleVi: 'Hãy tận dụng ưu đãi giảm giá khuyến mãi cuối tuần của chúng tôi.',
                                collocation: 'promotional offer / get a promotion',
                                isMastered: false
                            },
                            {
                                id: 'p4_5',
                                word: 'Itinerary',
                                phonetic: '/aɪˈtɪnəreri/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Lịch trình chuyến đi, lộ trình chi tiết',
                                exampleEn: 'Your full conference itinerary is in the welcome packet.',
                                exampleVi: 'Lịch trình hội nghị đầy đủ nằm trong túi quà chào mừng.',
                                collocation: 'travel itinerary / tour itinerary',
                                isMastered: false
                            },
                            {
                                id: 'p4_6',
                                word: 'Facility',
                                phonetic: '/fəˈsɪləti/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Cơ sở vật chất, tòa nhà tiện ích',
                                exampleEn: 'The fitness facility is open 24 hours for hotel guests.',
                                exampleVi: 'Khu tiện ích thể dục mở cửa 24/7 cho khách lưu trú.',
                                collocation: 'manufacturing facility / state-of-the-art facility',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t1-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Các liên từ phụ thuộc, trạng từ chỉ mức độ và cấu trúc ngữ pháp then chốt.',
                        totalCount: 6,
                        memorizedCount: 6,
                        status: 'completed',
                        words: [
                            {
                                id: 'p5_1',
                                word: 'Promptly',
                                phonetic: '/ˈprɑːmptli/',
                                partOfSpeech: 'adverb',
                                meaningVi: 'Đúng giờ, ngay lập tức, nhanh chóng',
                                exampleEn: 'The presentation will begin promptly at 9:00 A.M.',
                                exampleVi: 'Bài thuyết trình sẽ bắt đầu đúng 9 giờ sáng.',
                                collocation: 'respond promptly, start promptly at',
                                isMastered: true
                            },
                            {
                                id: 'p5_2',
                                word: 'Substantial',
                                phonetic: '/səbˈstænʃl/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Đáng kể, to lớn, quan trọng',
                                exampleEn: 'The firm reported a substantial increase in net profits.',
                                exampleVi: 'Công ty đã báo cáo mức tăng đáng kể trong lợi nhuận ròng.',
                                collocation: 'substantial increase / growth / amount',
                                isMastered: true
                            },
                            {
                                id: 'p5_3',
                                word: 'Complimentary',
                                phonetic: '/ˌkɑːmplɪˈmentri/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Miễn phí (dịch vụ đi kèm)',
                                exampleEn: 'Guests will receive a complimentary breakfast buffet each morning.',
                                exampleVi: 'Khách sẽ nhận được bữa sáng buffet miễn phí mỗi buổi sáng.',
                                collocation: 'complimentary ticket / shuttle service',
                                isMastered: true
                            },
                            {
                                id: 'p5_4',
                                word: 'Confidential',
                                phonetic: '/ˌkɑːnfɪˈdenʃl/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Bảo mật, tuyệt mật',
                                exampleEn: 'All patient records must be kept strictly confidential.',
                                exampleVi: 'Tất cả hồ sơ bệnh nhân phải được giữ tuyệt mật.',
                                collocation: 'highly confidential / strictly confidential',
                                isMastered: true
                            },
                            {
                                id: 'p5_5',
                                word: 'Tentative',
                                phonetic: '/ˈtentətɪv/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Dự kiến, tạm thời (chưa chốt)',
                                exampleEn: 'We have agreed on a tentative schedule for the product launch.',
                                exampleVi: 'Chúng tôi đã đồng ý với lịch trình dự kiến cho việc ra mắt sản phẩm.',
                                collocation: 'tentative agreement / schedule / date',
                                isMastered: true
                            },
                            {
                                id: 'p5_6',
                                word: 'Mandatory',
                                phonetic: '/ˈmændətɔːri/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Bắt buộc theo quy định',
                                exampleEn: 'Attendance at the safety orientation is mandatory for all new hires.',
                                exampleVi: 'Việc tham gia buổi định hướng an toàn là bắt buộc đối với nhân viên mới.',
                                collocation: 'mandatory training / attendance',
                                isMastered: true
                            }
                        ]
                    },
                    {
                        id: 'ets24-t1-p6',
                        partNumber: 6,
                        partTitle: 'Part 6: Text Completion (Điền đoạn văn)',
                        skillType: 'Reading',
                        description: 'Từ vựng ngữ cảnh thư thông báo tuyển dụng, memo nội bộ và thông cáo báo chí.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p6_1',
                                word: 'Consequently',
                                phonetic: '/ˈkɑːnsɪkwentli/',
                                partOfSpeech: 'adverb',
                                meaningVi: 'Do đó, hậu quả là (từ nối đoạn)',
                                exampleEn: 'Budget cuts occurred; consequently, we had to postpone the project.',
                                exampleVi: 'Ngân sách bị cắt giảm; do đó, chúng tôi phải hoãn dự án.',
                                collocation: 'consequently led to / consequently resulted in',
                                isMastered: false
                            },
                            {
                                id: 'p6_2',
                                word: 'Implementation',
                                phonetic: '/ˌɪmplɪmenˈteɪʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự triển khai thực hiện, thi hành',
                                exampleEn: 'The implementation of the new software took three months.',
                                exampleVi: 'Việc triển khai phần mềm mới mất ba tháng.',
                                collocation: 'implementation of policy / plan',
                                isMastered: false
                            },
                            {
                                id: 'p6_3',
                                word: 'Furthermore',
                                phonetic: '/ˌfɜːrðərˈmɔːr/',
                                partOfSpeech: 'adverb',
                                meaningVi: 'Hơn nữa, vả lại (bổ sung ý)',
                                exampleEn: 'Furthermore, candidates must have at least three years of experience.',
                                exampleVi: 'Hơn nữa, các ứng viên phải có ít nhất ba năm kinh nghiệm.',
                                collocation: 'furthermore, in addition',
                                isMastered: false
                            },
                            {
                                id: 'p6_4',
                                word: 'Commence',
                                phonetic: '/kəˈmens/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Bắt đầu, khởi động một quá trình',
                                exampleEn: 'Renovations will commence at the beginning of next month.',
                                exampleVi: 'Công tác sửa chữa sẽ bắt đầu vào đầu tháng tới.',
                                collocation: 'commence operations / commence construction',
                                isMastered: false
                            },
                            {
                                id: 'p6_5',
                                word: 'Eligible',
                                phonetic: '/ˈelɪdʒəbl/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Đủ tư cách, đủ điều kiện hưởng quyền lợi',
                                exampleEn: 'Employees are eligible for full health benefits after 90 days.',
                                exampleVi: 'Nhân viên đủ điều kiện hưởng đầy đủ phúc lợi sau 90 ngày.',
                                collocation: 'eligible for a bonus / eligible to apply',
                                isMastered: false
                            },
                            {
                                id: 'p6_6',
                                word: 'Notify',
                                phonetic: '/ˈnoʊtɪfaɪ/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Thông báo cho ai biết bằng văn bản',
                                exampleEn: 'Please notify human resources if your address changes.',
                                exampleVi: 'Vui lòng thông báo cho phòng nhân sự nếu bạn đổi địa chỉ.',
                                collocation: 'notify someone in writing / notify immediately',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t1-p7',
                        partNumber: 7,
                        partTitle: 'Part 7: Reading Comprehension (Đoạn đơn & kép)',
                        skillType: 'Reading',
                        description: 'Từ vựng hợp đồng, biên bản thỏa thuận, email khiếu nại và bài báo doanh nghiệp.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p7_1',
                                word: 'Inconvenience',
                                phonetic: '/ˌɪnkənˈviːniəns/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự bất tiện, phiền hà',
                                exampleEn: 'We apologize for any inconvenience caused during system upgrades.',
                                exampleVi: 'Chúng tôi xin lỗi vì sự bất tiện gây ra trong quá trình nâng cấp hệ thống.',
                                collocation: 'apologize for the inconvenience',
                                isMastered: false
                            },
                            {
                                id: 'p7_2',
                                word: 'Compensation',
                                phonetic: '/ˌkɑːmpenˈseɪʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Khoản đền bù, bồi thường thiệt hại',
                                exampleEn: 'Affected passengers are eligible for monetary compensation.',
                                exampleVi: 'Hành khách bị ảnh hưởng đủ điều kiện nhận tiền bồi thường.',
                                collocation: 'seek compensation, offer compensation',
                                isMastered: false
                            },
                            {
                                id: 'p7_3',
                                word: 'Warranty',
                                phonetic: '/ˈwɔːrənti/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Phiếu bảo hành, thời hạn bảo hành',
                                exampleEn: 'The refrigerator comes with a two-year limited warranty.',
                                exampleVi: 'Tủ lạnh đi kèm với bảo hành có giới hạn trong hai năm.',
                                collocation: 'under warranty, extended warranty',
                                isMastered: false
                            },
                            {
                                id: 'p7_4',
                                word: 'Renovation',
                                phonetic: '/ˌrenəˈveɪʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự cải tạo, tu sửa công trình',
                                exampleEn: 'The branch will close next week for interior renovation.',
                                exampleVi: 'Chi nhánh sẽ đóng cửa vào tuần tới để tu sửa nội thất.',
                                collocation: 'extensive renovation, undergo renovation',
                                isMastered: false
                            },
                            {
                                id: 'p7_5',
                                word: 'Specification',
                                phonetic: '/ˌspesɪfɪˈkeɪʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Thông số kỹ thuật, quy cách chi tiết',
                                exampleEn: 'The product does not meet the required safety specifications.',
                                exampleVi: 'Sản phẩm không đáp ứng các thông số an toàn theo yêu cầu.',
                                collocation: 'technical specifications, meet specifications',
                                isMastered: false
                            },
                            {
                                id: 'p7_6',
                                word: 'Endorsement',
                                phonetic: '/ɪnˈdɔːrsmənt/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự chứng thực, quảng bá ủng hộ',
                                exampleEn: 'The celebrity endorsement significantly boosted brand awareness.',
                                exampleVi: 'Sự chứng thực của người nổi tiếng đã thúc đẩy đáng kể nhận diện thương hiệu.',
                                collocation: 'celebrity endorsement, official endorsement',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets24-test-02',
                testNumber: 2,
                title: 'ETS 2024 – Test 02',
                badge: 'Full Test 02',
                description: 'Từ vựng các tình huống văn phòng, quản lý tiến độ và đàm phán trong Test 02.',
                status: 'not_started',
                totalWords: 38,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets24-t2-p1',
                        partNumber: 1,
                        partTitle: 'Part 1: Photographs (Tranh miêu tả)',
                        skillType: 'Listening',
                        description: 'Các thao tác văn phòng, bảo trì thiết bị và vận hành máy móc trong Test 02.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p1_2_1',
                                word: 'Assembling',
                                phonetic: '/əˈsemblɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Lắp ráp, ráp các bộ phận lại với nhau',
                                exampleEn: 'The workers are assembling components on the production line.',
                                exampleVi: 'Công nhân đang lắp ráp các linh kiện trên dây chuyền sản xuất.',
                                collocation: 'assembling furniture / machinery',
                                isMastered: false
                            },
                            {
                                id: 'p1_2_2',
                                word: 'Unloading',
                                phonetic: '/ʌnˈloʊdɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Bốc dỡ hàng hóa khỏi xe/tàu',
                                exampleEn: 'Delivery personnel are unloading boxes from the truck.',
                                exampleVi: 'Nhân viên giao hàng đang bốc dỡ các thùng hàng khỏi xe tải.',
                                collocation: 'unloading cargo / packages',
                                isMastered: false
                            },
                            {
                                id: 'p1_2_3',
                                word: 'Operating',
                                phonetic: '/ˈɑːpəreɪtɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Vận hành, điều khiển thiết bị',
                                exampleEn: 'An employee is operating a heavy forklift.',
                                exampleVi: 'Một nhân viên đang điều khiển chiếc xe nâng hàng lớn.',
                                collocation: 'operating heavy machinery',
                                isMastered: false
                            },
                            {
                                id: 'p1_2_4',
                                word: 'Occupied',
                                phonetic: '/ˈɑːkjəpaɪd/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Đang có người dùng/ở (đối lập với unoccupied)',
                                exampleEn: 'Most of the workstations in the office are occupied.',
                                exampleVi: 'Hầu hết các bàn làm việc trong văn phòng đều đang có người ngồi.',
                                collocation: 'fully occupied / occupied room',
                                isMastered: false
                            },
                            {
                                id: 'p1_2_5',
                                word: 'Fastening',
                                phonetic: '/ˈfæsənɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Thắt chặt, buộc chặt (dây an toàn, ốc vít)',
                                exampleEn: 'The driver is fastening his seatbelt before departure.',
                                exampleVi: 'Tài xế đang thắt dây an toàn trước khi khởi hành.',
                                collocation: 'fasten seatbelt / fasten securely',
                                isMastered: false
                            },
                            {
                                id: 'p1_2_6',
                                word: 'Distributing',
                                phonetic: '/dɪˈstrɪbjuːtɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Phát, phân phát tài liệu cho mọi người',
                                exampleEn: 'The assistant is distributing handouts to meeting attendees.',
                                exampleVi: 'Trợ lý đang phát tài liệu cho những người tham dự cuộc họp.',
                                collocation: 'distributing documents / brochures',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t2-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Tổng hợp các collocation quan trọng và từ loại dễ nhầm lẫn trong Test 02.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_2_1',
                                word: 'Accommodate',
                                phonetic: '/əˈkɑːmədeɪt/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Đáp ứng nhu cầu, chứa được số lượng người',
                                exampleEn: 'The conference hall can accommodate up to 500 delegates.',
                                exampleVi: 'Hội trường hội nghị có thể chứa tới 500 đại biểu.',
                                collocation: 'accommodate requests / large groups',
                                isMastered: false
                            },
                            {
                                id: 'p5_2_2',
                                word: 'Comprehensive',
                                phonetic: '/ˌkɑːmprɪˈhensɪv/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Toàn diện, bao quát đầy đủ mọi khía cạnh',
                                exampleEn: 'We provide a comprehensive warranty covering all parts and labor.',
                                exampleVi: 'Chúng tôi cung cấp gói bảo hành toàn diện bao gồm mọi linh kiện và công sửa.',
                                collocation: 'comprehensive guide / insurance plan',
                                isMastered: false
                            },
                            {
                                id: 'p5_2_3',
                                word: 'Reluctant',
                                phonetic: '/rɪˈlʌktənt/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Lưỡng lự, ngần ngại (chưa sẵn sàng làm)',
                                exampleEn: 'Investors were reluctant to commit capital to the risky venture.',
                                exampleVi: 'Các nhà đầu tư đã ngần ngại rót vốn vào dự án mạo hiểm.',
                                collocation: 'be reluctant to do something',
                                isMastered: false
                            },
                            {
                                id: 'p5_2_4',
                                word: 'Subsequent',
                                phonetic: '/ˈsʌbsɪkwənt/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Xảy ra sau đó, tiếp theo',
                                exampleEn: 'Subsequent studies confirmed the effectiveness of the new drug.',
                                exampleVi: 'Các nghiên cứu tiếp theo đã khẳng định hiệu quả của loại thuốc mới.',
                                collocation: 'subsequent years / subsequent events',
                                isMastered: false
                            },
                            {
                                id: 'p5_2_5',
                                word: 'Incentive',
                                phonetic: '/ɪnˈsentɪv/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự khuyến khích, phần thưởng khích lệ',
                                exampleEn: 'The firm offers financial incentives for staff who exceed sales targets.',
                                exampleVi: 'Công ty thưởng tài chính khích lệ nhân viên vượt chỉ tiêu doanh số.',
                                collocation: 'provide incentives / bonus incentive',
                                isMastered: false
                            },
                            {
                                id: 'p5_2_6',
                                word: 'Punctual',
                                phonetic: '/ˈpʌŋktʃuəl/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Đúng giờ, không bao giờ trễ hẹn',
                                exampleEn: 'All applicants are expected to be punctual for their interviews.',
                                exampleVi: 'Tất cả ứng viên được yêu cầu phải đúng giờ cho buổi phỏng vấn.',
                                collocation: 'arrive punctual / be punctual',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t2-p7',
                        partNumber: 7,
                        partTitle: 'Part 7: Reading Comprehension (Đọc hiểu)',
                        skillType: 'Reading',
                        description: 'Email gửi khách hàng, thông báo bảo trì máy chủ và văn bản hướng dẫn sử dụng.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p7_2_1',
                                word: 'Overdue',
                                phonetic: '/ˌoʊvərˈduː/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Quá hạn thanh toán, trễ hạn',
                                exampleEn: 'Our records indicate that your monthly account payment is overdue.',
                                exampleVi: 'Hồ sơ của chúng tôi cho thấy khoản thanh toán tài khoản hàng tháng đã quá hạn.',
                                collocation: 'overdue payment / overdue invoice',
                                isMastered: false
                            },
                            {
                                id: 'p7_2_2',
                                word: 'Reimbursement',
                                phonetic: '/ˌriːɪmˈbɜːrsmənt/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Khoản hoàn trả chi phí công tác',
                                exampleEn: 'Submit all travel receipts to claim reimbursement by Friday.',
                                exampleVi: 'Nộp tất cả hóa đơn đi lại để yêu cầu hoàn trả trước thứ Sáu.',
                                collocation: 'travel reimbursement / request reimbursement',
                                isMastered: false
                            },
                            {
                                id: 'p7_2_3',
                                word: 'Credentials',
                                phonetic: '/krəˈdenʃlz/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Bằng cấp, chứng chỉ chuyên môn',
                                exampleEn: 'The hiring committee verified the lead engineer credentials.',
                                exampleVi: 'Hội đồng tuyển dụng đã xác minh bằng cấp của kỹ sư trưởng.',
                                collocation: 'professional credentials / verified credentials',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets24-test-03',
                testNumber: 3,
                title: 'ETS 2024 – Test 03',
                badge: 'Full Test 03',
                description: 'Tổng hợp từ vựng chuyên ngành chuỗi cung ứng, thương mại điện tử và tài chính.',
                status: 'not_started',
                totalWords: 35,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets24-t3-p1',
                        partNumber: 1,
                        partTitle: 'Part 1: Photographs (Tranh miêu tả)',
                        skillType: 'Listening',
                        description: 'Từ vựng miêu tả bến cảng, nhà kho và công trường xây dựng.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p1_3_1',
                                word: 'Docked',
                                phonetic: '/dɑːkt/',
                                partOfSpeech: 'verb / adj',
                                meaningVi: 'Cập bến, neo đậu tại bến cảng',
                                exampleEn: 'Several cargo ships are docked at the busy commercial port.',
                                exampleVi: 'Một số tàu chở hàng đang neo đậu tại cảng thương mại tấp nập.',
                                collocation: 'docked at the pier / port',
                                isMastered: false
                            },
                            {
                                id: 'p1_3_2',
                                word: 'Stacking',
                                phonetic: '/ˈstækɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Xếp chồng lên nhau ngay ngắn',
                                exampleEn: 'A worker is stacking cardboard cartons onto wooden pallets.',
                                exampleVi: 'Một công nhân đang xếp các thùng carton lên các tấm ballet gỗ.',
                                collocation: 'stacking boxes / cartons',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t3-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Từ loại biến đổi đuôi và cụm giới từ nâng cao xuất hiện trong Test 03.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_3_1',
                                word: 'Unanimous',
                                phonetic: '/juˈnænɪməs/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Nhất trí, đồng lòng 100%',
                                exampleEn: 'The board reached a unanimous decision to expand into Asia.',
                                exampleVi: 'Hội đồng đã đạt được quyết định nhất trí mở rộng sang châu Á.',
                                collocation: 'unanimous decision / unanimous vote',
                                isMastered: false
                            },
                            {
                                id: 'p5_3_2',
                                word: 'Discretion',
                                phonetic: '/dɪˈskreʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Quyền tự quyết, sự thận trọng',
                                exampleEn: 'Managers may use their discretion when granting leave.',
                                exampleVi: 'Các nhà quản lý có thể sử dụng quyền tự quyết khi xét duyệt nghỉ phép.',
                                collocation: 'at the discretion of / use discretion',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t3-p7',
                        partNumber: 7,
                        partTitle: 'Part 7: Reading Comprehension (Đọc hiểu)',
                        skillType: 'Reading',
                        description: 'Bản phân tích tài chính quý và hợp đồng dịch vụ thuê mặt bằng kinh doanh.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p7_3_1',
                                word: 'Quarterly',
                                phonetic: '/ˈkwɔːrtərli/',
                                partOfSpeech: 'adjective / adverb',
                                meaningVi: 'Hàng quý, mỗi ba tháng một lần',
                                exampleEn: 'The quarterly financial statement will be released next week.',
                                exampleVi: 'Báo cáo tài chính hàng quý sẽ được công bố vào tuần tới.',
                                collocation: 'quarterly earnings / quarterly report',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets24-test-04',
                testNumber: 4,
                title: 'ETS 2024 – Test 04',
                badge: 'Full Test 04',
                description: 'Từ vựng các chủ đề quản trị nhân sự, quy trình chuyển giao công nghệ và marketing.',
                status: 'not_started',
                totalWords: 34,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets24-t4-p1',
                        partNumber: 1,
                        partTitle: 'Part 1: Photographs (Tranh miêu tả)',
                        skillType: 'Listening',
                        description: 'Các góc ảnh phòng họp, quầy lễ tân và sảnh khách sạn trong Test 04.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p1_4_1',
                                word: 'Greeting',
                                phonetic: '/ˈɡriːtɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Chào đón khách, chào hỏi',
                                exampleEn: 'The receptionist is greeting visitors at the front desk.',
                                exampleVi: 'Nhân viên lễ tân đang chào đón khách ở bàn tiếp tân.',
                                collocation: 'greeting clients / visitors',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t4-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Trạng từ liên kết câu và cấu trúc đảo ngữ trong đề thi Test 04.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_4_1',
                                word: 'Simultaneously',
                                phonetic: '/ˌsaɪmlˈteɪniəsli/',
                                partOfSpeech: 'adverb',
                                meaningVi: 'Đồng thời, cùng một lúc',
                                exampleEn: 'The software update was deployed simultaneously across all offices.',
                                exampleVi: 'Bản cập nhật phần mềm được triển khai đồng thời trên tất cả văn phòng.',
                                collocation: 'occur simultaneously',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets24-test-05',
                testNumber: 5,
                title: 'ETS 2024 – Test 05',
                badge: 'Full Test 05',
                description: 'Từ vựng chọn lọc từ Test 05 về đàm phán hợp đồng quốc tế và logistics xuyên biên giới.',
                status: 'not_started',
                totalWords: 36,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets24-t5-p1',
                        partNumber: 1,
                        partTitle: 'Part 1: Photographs (Tranh miêu tả)',
                        skillType: 'Listening',
                        description: 'Từ vựng quan sát chi tiết khung cảnh ngoài trời và phòng thí nghiệm.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p1_5_1',
                                word: 'Examining',
                                phonetic: '/ɪɡˈzæmɪnɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Xem xét, soi kỹ mẫu vật dưới kính',
                                exampleEn: 'The scientist is examining a glass slide under the microscope.',
                                exampleVi: 'Nhà khoa học đang xem xét tiêu bản kính dưới kính hiển vi.',
                                collocation: 'examining the specimen / document',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t5-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Các từ vựng mức độ 800+ về điều khoản ràng buộc pháp lý và chuyển giao cổ phần.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_5_1',
                                word: 'Indispensable',
                                phonetic: '/ˌɪndɪˈspensəbl/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Không thể thiếu, vô cùng thiết yếu',
                                exampleEn: 'Reliable cloud storage has become indispensable for remote teams.',
                                exampleVi: 'Lưu trữ đám mây tin cậy đã trở nên không thể thiếu cho các nhóm làm việc từ xa.',
                                collocation: 'indispensable tool / part of the team',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets24-test-06',
                testNumber: 6,
                title: 'ETS 2024 – Test 06',
                badge: 'Full Test 06',
                description: 'Đề thi tổng hợp hoàn chỉnh 7 Part giúp củng cố toàn diện vốn từ ETS 2024.',
                status: 'not_started',
                totalWords: 40,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets24-t6-p1',
                        partNumber: 1,
                        partTitle: 'Part 1: Photographs (Tranh miêu tả)',
                        skillType: 'Listening',
                        description: 'Tranh hoạt động dịch vụ nhà hàng, khách sạn và phương tiện công cộng.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p1_6_1',
                                word: 'Boarding',
                                phonetic: '/ˈbɔːrdɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Bước lên phương tiện (tàu, xe buýt, máy bay)',
                                exampleEn: 'Passengers are boarding the commuter train on platform 3.',
                                exampleVi: 'Hành khách đang bước lên tàu hỏa tại ke số 3.',
                                collocation: 'boarding the train / flight',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets24-t6-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Các câu bẫy từ vựng nghĩa tinh tế trong Test 06.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_6_1',
                                word: 'Discrepancy',
                                phonetic: '/dɪˈskrepənsi/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự sai lệch, bất nhất giữa các số liệu',
                                exampleEn: 'The internal audit identified a minor discrepancy in inventory totals.',
                                exampleVi: 'Kiểm toán nội bộ đã phát hiện một sự sai lệch nhỏ trong tổng số hàng tồn.',
                                collocation: 'discrepancy in figures / discrepancy between',
                                isMastered: false
                            },
                            {
                                id: 'p5_6_2',
                                word: 'Contingency',
                                phonetic: '/kənˈtɪndʒənsi/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Phương án dự phòng rủi ro, tình huống bất ngờ',
                                exampleEn: 'We have developed a comprehensive contingency plan for supply delays.',
                                exampleVi: 'Chúng tôi đã lập kế hoạch dự phòng toàn diện cho các chậm trễ nguồn cung.',
                                collocation: 'contingency plan / contingency fund',
                                isMastered: false
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'ets-2023',
        title: 'Bộ đề ETS TOEIC 2023',
        shortLabel: '2023',
        publisher: 'ETS',
        badge: 'Đề thi kinh điển',
        totalTests: 6,
        description: 'Kho từ vựng thực chiến kinh điển từ bộ đề ETS 2023, phân chia chi tiết theo Test 1 đến Test 6 và từng Part bài thi.',
        tests: [
            {
                id: 'ets23-test-01',
                testNumber: 1,
                title: 'ETS 2023 – Test 01',
                badge: 'Full Test 01',
                description: 'Từ vựng các chủ đề chăm sóc khách hàng và bán lẻ trong ETS 2023 Test 01.',
                status: 'not_started',
                totalWords: 35,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets23-t1-p1',
                        partNumber: 1,
                        partTitle: 'Part 1: Photographs (Tranh miêu tả)',
                        skillType: 'Listening',
                        description: 'Tranh miêu tả cửa hàng tạp hóa và công viên ngoài trời.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p1_23_1',
                                word: 'Browsing',
                                phonetic: '/ˈbraʊzɪŋ/',
                                partOfSpeech: 'verb (V-ing)',
                                meaningVi: 'Xem lướt qua hàng hóa trong tiệm',
                                exampleEn: 'Shoppers are browsing items on the clothing rack.',
                                exampleVi: 'Khách mua đang ngắm nghía đồ trên giá treo quần áo.',
                                collocation: 'browsing through the catalog',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: 'ets23-t1-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Từ vựng trọng tâm thường gặp trong đề thi năm 2023.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_23_1',
                                word: 'Perseverance',
                                phonetic: '/ˌpɜːrsəˈvɪrəns/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự kiên trì, bền bỉ theo đuổi mục tiêu',
                                exampleEn: 'Her perseverance ultimately earned her a promotion to manager.',
                                exampleVi: 'Sự kiên trì của cô ấy cuối cùng đã giúp cô được thăng chức quản lý.',
                                collocation: 'through hard work and perseverance',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets23-test-02',
                testNumber: 2,
                title: 'ETS 2023 – Test 02',
                badge: 'Full Test 02',
                description: 'Từ vựng hội nghị khách hàng và chiến lược bán hàng đa kênh.',
                status: 'not_started',
                totalWords: 30,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets23-t2-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Các từ vựng chọn lọc trong đề ETS 2023 Test 02.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_23_2_1',
                                word: 'Streamline',
                                phonetic: '/ˈstriːmlaɪn/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Tinh gọn, hợp lý hóa quy trình',
                                exampleEn: 'The firm invested in automation to streamline manufacturing.',
                                exampleVi: 'Công ty đầu tư tự động hóa nhằm tinh gọn quy trình sản xuất.',
                                collocation: 'streamline the workflow / operations',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets23-test-03',
                testNumber: 3,
                title: 'ETS 2023 – Test 03',
                badge: 'Full Test 03',
                description: 'Từ vựng ngân sách dự án và phân tích rủi ro thị trường.',
                status: 'not_started',
                totalWords: 28,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets23-t3-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Từ vựng điểm 800+ Test 03 ETS 2023.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_23_3_1',
                                word: 'Viable',
                                phonetic: '/ˈvaɪəbl/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Khả thi, có khả năng thực hiện thành công',
                                exampleEn: 'Solar panels present a commercially viable energy alternative.',
                                exampleVi: 'Tấm pin năng lượng mặt trời là một giải pháp năng lượng khả thi về mặt thương mại.',
                                collocation: 'economically viable / viable solution',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets23-test-04',
                testNumber: 4,
                title: 'ETS 2023 – Test 04',
                badge: 'Full Test 04',
                description: 'Từ vựng tuyển dụng quốc tế và văn hóa công sở hiện đại.',
                status: 'not_started',
                totalWords: 26,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets23-t4-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Các từ vựng Test 04.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_23_4_1',
                                word: 'Adept',
                                phonetic: '/əˈdept/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Khéo léo, tinh thông một kỹ năng nào đó',
                                exampleEn: 'The new designer is highly adept at using digital graphics software.',
                                exampleVi: 'Nhà thiết kế mới rất tinh thông sử dụng phần mềm đồ họa kỹ thuật số.',
                                collocation: 'adept at handling problems',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets23-test-05',
                testNumber: 5,
                title: 'ETS 2023 – Test 05',
                badge: 'Full Test 05',
                description: 'Từ vựng thương thảo hợp đồng phân phối độc quyền.',
                status: 'not_started',
                totalWords: 28,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets23-t5-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Từ vựng Test 05.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_23_5_1',
                                word: 'Affiliation',
                                phonetic: '/əˌfɪliˈeɪʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự liên kết, gia nhập tổ chức/hiệp hội',
                                exampleEn: 'Our hospital has established an academic affiliation with the university.',
                                exampleVi: 'Bệnh viện chúng tôi đã thiết lập quan hệ liên kết học thuật với trường đại học.',
                                collocation: 'in affiliation with / institutional affiliation',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'ets23-test-06',
                testNumber: 6,
                title: 'ETS 2023 – Test 06',
                badge: 'Full Test 06',
                description: 'Từ vựng tổng hợp rèn luyện phản xạ Part 1 đến Part 7 trong đề thi Test 06.',
                status: 'not_started',
                totalWords: 30,
                masteredWords: 0,
                parts: [
                    {
                        id: 'ets23-t6-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Incomplete Sentences (Điền câu)',
                        skillType: 'Reading',
                        description: 'Từ vựng Test 06.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_23_6_1',
                                word: 'Contingency',
                                phonetic: '/kənˈtɪndʒənsi/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Tình huống dự phòng khẩn cấp',
                                exampleEn: 'Emergency funds were allocated for unforeseen contingencies.',
                                exampleVi: 'Kinh phí khẩn cấp đã được phân bổ cho các tình huống dự phòng bất ngờ.',
                                collocation: 'plan for contingencies',
                                isMastered: false
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'hacker-toeic-3',
        title: 'Bộ đề Hacker TOEIC 3 (Nâng cao)',
        shortLabel: 'Crack Vol 1',
        publisher: 'HACKER',
        badge: 'Mục tiêu 850+',
        totalTests: 6,
        description: 'Bộ đề có độ khó cao hơn đề thi thật 10-15%, tổng hợp các từ vựng bẫy tinh vi nhất trong Actual Practice Test 1 đến 6.',
        tests: [
            {
                id: 'hacker3-test-01',
                testNumber: 1,
                title: 'Hacker 3 – Actual Test 01',
                badge: 'Test 01 · Bứt phá',
                description: 'Từ vựng các tình huống kinh doanh phức tạp và từ vựng học thuật trong Test 01.',
                status: 'not_started',
                totalWords: 32,
                masteredWords: 0,
                parts: [
                    {
                        id: 'h3-t1-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Từ Vựng Bẫy Nâng Cao',
                        skillType: 'Reading',
                        description: 'Các từ ghép lạ và cấu trúc câu đảo ngữ mức độ khó cao.',
                        totalCount: 5,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_h_1_1',
                                word: 'Expedite',
                                phonetic: '/ˈekspədaɪt/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Xúc tiến nhanh chóng tiến trình xử lý',
                                exampleEn: 'We paid an extra fee to expedite the delivery of urgent parts.',
                                exampleVi: 'Chúng tôi trả thêm phí để xúc tiến giao nhanh các linh kiện khẩn cấp.',
                                collocation: 'expedite the process / delivery',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'hacker3-test-02',
                testNumber: 2,
                title: 'Hacker 3 – Actual Test 02',
                badge: 'Test 02 · Bứt phá',
                description: 'Từ vựng mức độ 850+ về mua bán sáp nhập và khủng hoảng truyền thông.',
                status: 'not_started',
                totalWords: 30,
                masteredWords: 0,
                parts: [
                    {
                        id: 'h3-t2-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Từ Vựng Bẫy Nâng Cao',
                        skillType: 'Reading',
                        description: 'Các collocation chuyên biệt trong đề Actual Test 02.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_h_2_1',
                                word: 'Stringent',
                                phonetic: '/ˈstrɪndʒənt/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Nghiêm ngặt, khắt khe (tiêu chuẩn, quy tắc)',
                                exampleEn: 'The firm complies with stringent international environmental laws.',
                                exampleVi: 'Công ty tuân thủ các luật bảo vệ môi trường quốc tế nghiêm ngặt.',
                                collocation: 'stringent standards / measures',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'hacker3-test-03',
                testNumber: 3,
                title: 'Hacker 3 – Actual Test 03',
                badge: 'Test 03 · Bứt phá',
                description: 'Từ vựng đầu tư mạo hiểm và bản ghi nhớ quyền sở hữu trí tuệ.',
                status: 'not_started',
                totalWords: 28,
                masteredWords: 0,
                parts: [
                    {
                        id: 'h3-t3-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Từ Vựng Bẫy Nâng Cao',
                        skillType: 'Reading',
                        description: 'Từ vựng Actual Test 03.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_h_3_1',
                                word: 'Scrutinize',
                                phonetic: '/ˈskruːtənaɪz/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Xem xét kỹ lưỡng, soi xét từng chi tiết',
                                exampleEn: 'Auditors will scrutinize the company financial records.',
                                exampleVi: 'Các kiểm toán viên sẽ soi xét kỹ lưỡng các hồ sơ tài chính của công ty.',
                                collocation: 'scrutinize closely',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'hacker3-test-04',
                testNumber: 4,
                title: 'Hacker 3 – Actual Test 04',
                badge: 'Test 04 · Bứt phá',
                description: 'Từ vựng các tình huống khiếu nại tranh chấp thương mại.',
                status: 'not_started',
                totalWords: 28,
                masteredWords: 0,
                parts: [
                    {
                        id: 'h3-t4-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Từ Vựng Bẫy Nâng Cao',
                        skillType: 'Reading',
                        description: 'Từ vựng Actual Test 04.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_h_4_1',
                                word: 'Arbitration',
                                phonetic: '/ˌɑːrbɪˈtreɪʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Sự phân xử, trọng tài giải quyết tranh chấp',
                                exampleEn: 'Both companies agreed to submit their dispute to arbitration.',
                                exampleVi: 'Cả hai công ty đã đồng ý đưa tranh chấp ra trọng tài phân xử.',
                                collocation: 'binding arbitration / go to arbitration',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'hacker3-test-05',
                testNumber: 5,
                title: 'Hacker 3 – Actual Test 05',
                badge: 'Test 05 · Bứt phá',
                description: 'Các từ vựng ngữ nghĩa tinh tế nhất trích từ đề Actual Test 05.',
                status: 'not_started',
                totalWords: 30,
                masteredWords: 0,
                parts: [
                    {
                        id: 'h3-t5-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Từ Vựng Bẫy Nâng Cao 850+',
                        skillType: 'Reading',
                        description: 'Từ vựng mức độ khó cao từ bộ đề Hacker Actual Test 05.',
                        totalCount: 6,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_h_1',
                                word: 'Deteriorate',
                                phonetic: '/dɪˈtɪriəreɪt/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Xấu đi, giảm sút chất lượng nghiêm trọng',
                                exampleEn: 'Economic conditions began to deteriorate rapidly after the crisis.',
                                exampleVi: 'Tình hình kinh tế bắt đầu xấu đi nhanh chóng sau cuộc khủng hoảng.',
                                collocation: 'deteriorate rapidly / quality deteriorates',
                                isMastered: false
                            },
                            {
                                id: 'p5_h_2',
                                word: 'Lucrative',
                                phonetic: '/ˈluːkrətɪv/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Sinh lợi lớn, đem lại nhiều tiền',
                                exampleEn: 'The tech start-up secured a lucrative contract with the government.',
                                exampleVi: 'Công ty khởi nghiệp công nghệ đã ký được hợp đồng béo bở với chính phủ.',
                                collocation: 'lucrative deal / business opportunity',
                                isMastered: false
                            },
                            {
                                id: 'p5_h_3',
                                word: 'Rigorous',
                                phonetic: '/ˈrɪɡərəs/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Nghiêm ngặt, khắt khe, tỉ mỉ',
                                exampleEn: 'The laboratory adheres to rigorous safety standards at all times.',
                                exampleVi: 'Phòng thí nghiệm luôn tuân thủ các tiêu chuẩn an toàn nghiêm ngặt.',
                                collocation: 'rigorous testing / rigorous standards',
                                isMastered: false
                            },
                            {
                                id: 'p5_h_4',
                                word: 'Precaution',
                                phonetic: '/prɪˈkɔːʃn/',
                                partOfSpeech: 'noun',
                                meaningVi: 'Biện pháp phòng ngừa, đề phòng rủi ro',
                                exampleEn: 'We took extra safety precautions before beginning construction.',
                                exampleVi: 'Chúng tôi đã thực hiện thêm các biện pháp đề phòng an toàn trước khi khởi công.',
                                collocation: 'take precautions / safety precautions',
                                isMastered: false
                            },
                            {
                                id: 'p5_h_5',
                                word: 'Surplus',
                                phonetic: '/ˈsɜːrpləs/',
                                partOfSpeech: 'noun / adj',
                                meaningVi: 'Số dư, thặng dư ngân sách',
                                exampleEn: 'The municipality recorded a budget surplus at the end of the fiscal year.',
                                exampleVi: 'Thành phố ghi nhận thặng dư ngân sách vào cuối năm tài chính.',
                                collocation: 'budget surplus / trade surplus',
                                isMastered: false
                            },
                            {
                                id: 'p5_h_6',
                                word: 'Stipulate',
                                phonetic: '/ˈstɪpjuleɪt/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Quy định rõ ràng (trong điều khoản hợp đồng)',
                                exampleEn: 'The contract stipulates that payment must be made within 30 days.',
                                exampleVi: 'Hợp đồng quy định rõ việc thanh toán phải được thực hiện trong vòng 30 ngày.',
                                collocation: 'stipulate in the agreement',
                                isMastered: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'hacker3-test-06',
                testNumber: 6,
                title: 'Hacker 3 – Actual Test 06',
                badge: 'Test 06 · Bứt phá',
                description: 'Đề tổng duyệt cuối cùng của Hacker TOEIC 3 với vốn từ vựng phong phú.',
                status: 'not_started',
                totalWords: 30,
                masteredWords: 0,
                parts: [
                    {
                        id: 'h3-t6-p5',
                        partNumber: 5,
                        partTitle: 'Part 5: Từ Vựng Bẫy Nâng Cao',
                        skillType: 'Reading',
                        description: 'Các từ vựng chọn lọc trong đề Actual Test 06.',
                        totalCount: 4,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: 'p5_h_6_1',
                                word: 'Proactive',
                                phonetic: '/ˌproʊˈæktɪv/',
                                partOfSpeech: 'adjective',
                                meaningVi: 'Chủ động hành động, tiên phong xử lý',
                                exampleEn: 'We need to take a proactive approach to risk management.',
                                exampleVi: 'Chúng ta cần có cách tiếp cận chủ động đối với việc quản trị rủi ro.',
                                collocation: 'proactive approach / proactive measures',
                                isMastered: false
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'crack-vol-2',
        title: 'Crack Vol 2',
        shortLabel: 'Crack Vol 2',
        publisher: 'HACKER',
        badge: 'Chuyên sâu',
        totalTests: 10,
        description: 'Bộ luyện đề cấp tốc với bộ từ vựng tần suất xuất hiện cao trong các kỳ thi gần đây.',
        tests: Array.from({
            length: 10
        }, (_, i)=>({
                id: `crack2-test-${i + 1}`,
                testNumber: i + 1,
                title: `Test ${i + 1}`,
                badge: 'Crack Vol 2',
                description: `Tổng hợp từ vựng quan trọng cho bài thi Test ${i + 1}.`,
                status: 'not_started',
                totalWords: 240 + i * 37 % 180,
                masteredWords: 0,
                parts: [
                    {
                        id: `crack2-t${i + 1}-p1`,
                        partNumber: 1,
                        partTitle: 'Part 1',
                        skillType: 'Listening',
                        description: 'Từ vựng tranh miêu tả hình ảnh',
                        totalCount: 37,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: [
                            {
                                id: `w_c2_${i}_1`,
                                word: 'slice',
                                phonetic: '/slaɪs/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Cắt lát, thái thành từng miếng mỏng',
                                exampleEn: 'The chef is slicing vegetables on the cutting board.',
                                exampleVi: 'Đầu bếp đang thái rau củ trên thớt.',
                                collocation: 'slice thinly / slice of bread',
                                isMastered: false
                            },
                            {
                                id: `w_c2_${i}_2`,
                                word: 'scrub',
                                phonetic: '/skrʌb/',
                                partOfSpeech: 'verb',
                                meaningVi: 'Cọ rửa, chà sạch bề mặt',
                                exampleEn: 'A worker is scrubbing the kitchen floor.',
                                exampleVi: 'Một công nhân đang cọ rửa sàn bếp.',
                                collocation: 'scrub the floor',
                                isMastered: false
                            }
                        ]
                    },
                    {
                        id: `crack2-t${i + 1}-p2`,
                        partNumber: 2,
                        partTitle: 'Part 2',
                        skillType: 'Listening',
                        description: 'Hỏi đáp phản hồi nhanh',
                        totalCount: 77,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    },
                    {
                        id: `crack2-t${i + 1}-p3`,
                        partNumber: 3,
                        partTitle: 'Part 3',
                        skillType: 'Listening',
                        description: 'Đoạn hội thoại ngắn',
                        totalCount: 134,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    },
                    {
                        id: `crack2-t${i + 1}-p4`,
                        partNumber: 4,
                        partTitle: 'Part 4',
                        skillType: 'Listening',
                        description: 'Bài nói độc thoại',
                        totalCount: 63,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    },
                    {
                        id: `crack2-t${i + 1}-p5`,
                        partNumber: 5,
                        partTitle: 'Part 5',
                        skillType: 'Reading',
                        description: 'Ngữ pháp và điền câu',
                        totalCount: 73,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    },
                    {
                        id: `crack2-t${i + 1}-p6`,
                        partNumber: 6,
                        partTitle: 'Part 6',
                        skillType: 'Reading',
                        description: 'Hoàn thành đoạn văn',
                        totalCount: 29,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    },
                    {
                        id: `crack2-t${i + 1}-p7`,
                        partNumber: 7,
                        partTitle: 'Part 7',
                        skillType: 'Reading',
                        description: 'Đọc hiểu đoạn đơn và đoạn kép',
                        totalCount: 115,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    }
                ]
            }))
    },
    {
        id: 'toeic-2026',
        title: 'Bộ đề Dự đoán TOEIC 2026',
        shortLabel: '2026',
        publisher: 'ETS',
        badge: 'Mới nhất',
        totalTests: 10,
        description: 'Bộ từ vựng cập nhật xu hướng ra đề thi mới nhất cho năm 2026.',
        tests: Array.from({
            length: 10
        }, (_, i)=>({
                id: `pred26-test-${i + 1}`,
                testNumber: i + 1,
                title: `Test ${i + 1}`,
                badge: '2026',
                description: `Từ vựng bám sát đề thi xu hướng 2026 Test ${i + 1}.`,
                status: 'not_started',
                totalWords: 310 + i * 29 % 150,
                masteredWords: 0,
                parts: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ].map((pNum)=>({
                        id: `pred26-t${i + 1}-p${pNum}`,
                        partNumber: pNum,
                        partTitle: `Part ${pNum}`,
                        skillType: pNum <= 4 ? 'Listening' : 'Reading',
                        description: `Từ vựng trọng điểm Part ${pNum}`,
                        totalCount: [
                            37,
                            77,
                            134,
                            63,
                            73,
                            29,
                            115
                        ][pNum - 1],
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    }))
            }))
    },
    {
        id: 'essential-600',
        title: '600 Essential Words for the TOEIC',
        shortLabel: '600 Essential Words',
        publisher: 'ECONOMY',
        badge: 'Nền tảng 600+',
        totalTests: 10,
        description: '50 bài học 600 từ vựng căn bản nền tảng không thể thiếu cho mọi sĩ tử TOEIC.',
        tests: Array.from({
            length: 10
        }, (_, i)=>({
                id: `ess600-test-${i + 1}`,
                testNumber: i + 1,
                title: `Test ${i + 1}`,
                badge: '600 Words',
                description: `Chuyên đề từ vựng nhóm ${i + 1}.`,
                status: 'not_started',
                totalWords: 60,
                masteredWords: 0,
                parts: [
                    1,
                    2,
                    5,
                    7
                ].map((pNum)=>({
                        id: `ess600-t${i + 1}-p${pNum}`,
                        partNumber: pNum,
                        partTitle: `Part ${pNum}`,
                        skillType: pNum <= 4 ? 'Listening' : 'Reading',
                        description: `Từ vựng cơ bản Part ${pNum}`,
                        totalCount: 15,
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    }))
            }))
    },
    {
        id: 'toeic-master',
        title: 'TOEIC MASTER 990',
        shortLabel: 'TOEIC MASTER',
        publisher: 'HACKER',
        badge: 'Chinh phục 990',
        totalTests: 10,
        description: 'Từ vựng cao cấp tinh hoa dành riêng cho các bạn đặt mục tiêu max điểm 900+.',
        tests: Array.from({
            length: 10
        }, (_, i)=>({
                id: `master-test-${i + 1}`,
                testNumber: i + 1,
                title: `Test ${i + 1}`,
                badge: 'MASTER',
                description: `Bộ từ vựng bẫy nâng cao Test ${i + 1}.`,
                status: 'not_started',
                totalWords: 350,
                masteredWords: 0,
                parts: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7
                ].map((pNum)=>({
                        id: `master-t${i + 1}-p${pNum}`,
                        partNumber: pNum,
                        partTitle: `Part ${pNum}`,
                        skillType: pNum <= 4 ? 'Listening' : 'Reading',
                        description: `Từ vựng Master Part ${pNum}`,
                        totalCount: [
                            40,
                            80,
                            140,
                            70,
                            80,
                            30,
                            120
                        ][pNum - 1],
                        memorizedCount: 0,
                        status: 'not_started',
                        words: []
                    }))
            }))
    }
];
}),
]})(),
"[project]/src/styles/Student.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badgeAmber": "Student-module__7btSFG__badgeAmber",
  "badgeBlue": "Student-module__7btSFG__badgeBlue",
  "badgeGreen": "Student-module__7btSFG__badgeGreen",
  "badgeGreenSoft": "Student-module__7btSFG__badgeGreenSoft",
  "badgeMutedSoft": "Student-module__7btSFG__badgeMutedSoft",
  "badgesRow": "Student-module__7btSFG__badgesRow",
  "btnCardAmberOutline": "Student-module__7btSFG__btnCardAmberOutline",
  "btnCardBlue": "Student-module__7btSFG__btnCardBlue",
  "btnCardGreenOutline": "Student-module__7btSFG__btnCardGreenOutline",
  "btnFullWidth": "Student-module__7btSFG__btnFullWidth",
  "btnGoalAction": "Student-module__7btSFG__btnGoalAction",
  "btnPrimaryAmber": "Student-module__7btSFG__btnPrimaryAmber",
  "btnPrimaryGreen": "Student-module__7btSFG__btnPrimaryGreen",
  "btnSecondaryOutline": "Student-module__7btSFG__btnSecondaryOutline",
  "btnSquareIcon": "Student-module__7btSFG__btnSquareIcon",
  "btnSquareIconGreen": "Student-module__7btSFG__btnSquareIconGreen",
  "cardActionRow": "Student-module__7btSFG__cardActionRow",
  "cardTitle": "Student-module__7btSFG__cardTitle",
  "cardTopRow": "Student-module__7btSFG__cardTopRow",
  "cardsGrid": "Student-module__7btSFG__cardsGrid",
  "categoryBtn": "Student-module__7btSFG__categoryBtn",
  "categoryBtnActive": "Student-module__7btSFG__categoryBtnActive",
  "categoryBtnInactive": "Student-module__7btSFG__categoryBtnInactive",
  "categoryGroup": "Student-module__7btSFG__categoryGroup",
  "categoryLabel": "Student-module__7btSFG__categoryLabel",
  "dateBadge": "Student-module__7btSFG__dateBadge",
  "donutCircle": "Student-module__7btSFG__donutCircle",
  "donutMax": "Student-module__7btSFG__donutMax",
  "donutScore": "Student-module__7btSFG__donutScore",
  "examCard": "Student-module__7btSFG__examCard",
  "filterPill": "Student-module__7btSFG__filterPill",
  "filterPillActive": "Student-module__7btSFG__filterPillActive",
  "filterPillInactive": "Student-module__7btSFG__filterPillInactive",
  "goalText": "Student-module__7btSFG__goalText",
  "goalTitle": "Student-module__7btSFG__goalTitle",
  "goalTrophyIcon": "Student-module__7btSFG__goalTrophyIcon",
  "grammarCenter": "Student-module__7btSFG__grammarCenter",
  "grammarIconCircle": "Student-module__7btSFG__grammarIconCircle",
  "grammarTitle": "Student-module__7btSFG__grammarTitle",
  "headerWithFilters": "Student-module__7btSFG__headerWithFilters",
  "heroDescription": "Student-module__7btSFG__heroDescription",
  "heroGrid": "Student-module__7btSFG__heroGrid",
  "heroHeading": "Student-module__7btSFG__heroHeading",
  "heroHeadingAccent": "Student-module__7btSFG__heroHeadingAccent",
  "heroLeftContent": "Student-module__7btSFG__heroLeftContent",
  "heroWrapper": "Student-module__7btSFG__heroWrapper",
  "iconBoxGreen": "Student-module__7btSFG__iconBoxGreen",
  "itemDesc": "Student-module__7btSFG__itemDesc",
  "itemHeading": "Student-module__7btSFG__itemHeading",
  "metaRow": "Student-module__7btSFG__metaRow",
  "overviewCard": "Student-module__7btSFG__overviewCard",
  "overviewGrid": "Student-module__7btSFG__overviewGrid",
  "progressBarFillGreen": "Student-module__7btSFG__progressBarFillGreen",
  "progressBarThin": "Student-module__7btSFG__progressBarThin",
  "progressBarTrack": "Student-module__7btSFG__progressBarTrack",
  "progressBox": "Student-module__7btSFG__progressBox",
  "progressLabelRow": "Student-module__7btSFG__progressLabelRow",
  "scoreDetails": "Student-module__7btSFG__scoreDetails",
  "scoreDonutRow": "Student-module__7btSFG__scoreDonutRow",
  "scoreRowTarget": "Student-module__7btSFG__scoreRowTarget",
  "scoreStatusBadgeAmber": "Student-module__7btSFG__scoreStatusBadgeAmber",
  "scoreStatusBadgeGreen": "Student-module__7btSFG__scoreStatusBadgeGreen",
  "sectionBlock": "Student-module__7btSFG__sectionBlock",
  "sectionHeading": "Student-module__7btSFG__sectionHeading",
  "statCard": "Student-module__7btSFG__statCard",
  "statIconFlame": "Student-module__7btSFG__statIconFlame",
  "statIconTarget": "Student-module__7btSFG__statIconTarget",
  "statLabel": "Student-module__7btSFG__statLabel",
  "statList": "Student-module__7btSFG__statList",
  "statValue": "Student-module__7btSFG__statValue",
  "statusFilterGroup": "Student-module__7btSFG__statusFilterGroup",
  "targetLevelLabel": "Student-module__7btSFG__targetLevelLabel",
  "timeMuted": "Student-module__7btSFG__timeMuted",
  "todayGoalCard": "Student-module__7btSFG__todayGoalCard",
  "vocabCard": "Student-module__7btSFG__vocabCard",
  "vocabIconBox": "Student-module__7btSFG__vocabIconBox",
  "vocabRow": "Student-module__7btSFG__vocabRow",
  "vocabSubTitle": "Student-module__7btSFG__vocabSubTitle",
  "vocabTopRow": "Student-module__7btSFG__vocabTopRow",
});
}),
];

//# sourceMappingURL=src_18fkqnzlghl1-._.js.map