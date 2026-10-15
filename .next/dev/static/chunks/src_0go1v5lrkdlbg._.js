(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(student)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/seedData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StudentDashboardPage() {
    _s();
    const [selectedExamCategory, setSelectedExamCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [examStatusFilter, setExamStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [vocabStatusFilter, setVocabStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    // Filter exams
    const filteredExams = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedExamList"].filter((exam)=>{
        const matchesCategory = selectedExamCategory === 'all' || exam.category.toUpperCase() === selectedExamCategory.toUpperCase();
        const matchesStatus = examStatusFilter === 'all' || examStatusFilter === 'completed' && exam.status === 'completed' || examStatusFilter === 'in_progress' && exam.status === 'in_progress';
        return matchesCategory && matchesStatus;
    });
    // Filter vocab
    const filteredVocabs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedVocabList"].filter((v)=>{
        if (vocabStatusFilter === 'completed') return v.status === 'completed';
        if (vocabStatusFilter === 'in_progress') return v.status === 'in_progress';
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '28px 24px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.9fr) minmax(0, 1fr)',
                    gap: '24px',
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#f2fbf6',
                            borderRadius: '24px',
                            padding: '36px',
                            border: '1px solid #d1fae5',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '6px 14px',
                                            backgroundColor: '#ffffff',
                                            borderRadius: '999px',
                                            border: '1px solid #a7f3d0',
                                            fontSize: '0.85rem',
                                            color: '#065f46',
                                            fontWeight: 600,
                                            marginBottom: '20px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🗓️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            " Hôm nay, ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedUserData"].greetingDate,
                                            " – Chúc bạn ngày mới vui vẻ!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: '2.5rem',
                                            fontWeight: 800,
                                            color: '#0f172a',
                                            marginBottom: '12px',
                                            letterSpacing: '-0.5px'
                                        },
                                        children: [
                                            "Xin chào, ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#059669'
                                                },
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedUserData"].name,
                                                    " (",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedUserData"].role,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 25
                                            }, this),
                                            "!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#475569',
                                            fontSize: '0.98rem',
                                            lineHeight: 1.6,
                                            maxWidth: '620px',
                                            marginBottom: '28px'
                                        },
                                        children: [
                                            "Hãy duy trì chuỗi học tập hôm nay để sớm đạt mục tiêu",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    color: '#059669'
                                                },
                                                children: "800+ TOEIC"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            ". Bạn có thể xem tổng quan tiến độ hoặc bắt đầu luyện đề bên dưới."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '16px',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: '#ffffff',
                                            padding: '12px 20px',
                                            borderRadius: '14px',
                                            border: '1px solid #e2e8f0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            minWidth: '180px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '36px',
                                                    height: '36px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#fef3c7',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '18px'
                                                },
                                                children: "🔥"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: '#64748b',
                                                            fontWeight: 500
                                                        },
                                                        children: "Chuỗi học tập"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: '0.95rem',
                                                            color: '#0f172a'
                                                        },
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedUserData"].streakDays,
                                                            " Ngày liên tiếp"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: '#ffffff',
                                            padding: '12px 20px',
                                            borderRadius: '14px',
                                            border: '1px solid #e2e8f0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            minWidth: '180px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '36px',
                                                    height: '36px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#ecfdf5',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '18px'
                                                },
                                                children: "🎯"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: '#64748b',
                                                            fontWeight: 500
                                                        },
                                                        children: "Mục tiêu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: '0.95rem',
                                                            color: '#0f172a'
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedUserData"].targetScore
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#ffffff',
                            borderRadius: '24px',
                            padding: '36px 28px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    backgroundColor: '#ecfdf5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '32px',
                                    marginBottom: '16px'
                                },
                                children: "🏆"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#0f172a',
                                    marginBottom: '8px'
                                },
                                children: "Mục tiêu hôm nay"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.9rem',
                                    color: '#64748b',
                                    lineHeight: 1.5,
                                    maxWidth: '280px',
                                    marginBottom: '24px'
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedUserData"].todayGoalText
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#de-thi",
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '10px 24px',
                                    borderRadius: '999px',
                                    border: '1px solid #10b981',
                                    color: '#059669',
                                    fontWeight: 600,
                                    fontSize: '0.88rem',
                                    backgroundColor: '#ffffff'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🎯"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    " Đến danh sách đề →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    marginBottom: '44px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '1.6rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            marginBottom: '20px'
                        },
                        children: "Tổng Quan Tiến Độ"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '24px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '14px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            padding: '4px 10px',
                                                            borderRadius: '999px',
                                                            backgroundColor: '#eff6ff',
                                                            color: '#2563eb',
                                                            fontSize: '0.78rem',
                                                            fontWeight: 600
                                                        },
                                                        children: "📝 Đề thi vừa hoàn thành"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: '#94a3b8'
                                                        },
                                                        children: [
                                                            "🕒 ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastExam.completedAt
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '1.05rem',
                                                    fontWeight: 700,
                                                    color: '#0f172a',
                                                    marginBottom: '20px'
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastExam.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '24px',
                                                    marginBottom: '24px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '90px',
                                                            height: '90px',
                                                            borderRadius: '50%',
                                                            border: '8px solid #2563eb',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 800,
                                                                    fontSize: '1.25rem',
                                                                    color: '#2563eb',
                                                                    lineHeight: 1
                                                                },
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastExam.score
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.65rem',
                                                                    color: '#64748b'
                                                                },
                                                                children: [
                                                                    "/",
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastExam.maxScore,
                                                                    " điểm"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.88rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#64748b',
                                                                    marginBottom: '6px'
                                                                },
                                                                children: [
                                                                    "Mục tiêu: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        style: {
                                                                            color: '#0f172a'
                                                                        },
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastExam.targetScore,
                                                                            " đ"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#64748b'
                                                                },
                                                                children: [
                                                                    "Khoảng cách: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        style: {
                                                                            color: '#2563eb'
                                                                        },
                                                                        children: [
                                                                            "+",
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastExam.pointsNeeded,
                                                                            " đ cần đạt"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                                        lineNumber: 283,
                                                                        columnNumber: 34
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '999px',
                                            border: '1px solid #bfdbfe',
                                            backgroundColor: '#eff6ff',
                                            color: '#2563eb',
                                            fontWeight: 600,
                                            fontSize: '0.88rem'
                                        },
                                        children: "📊 Xem lại đáp án và lời giải"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '24px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '14px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            padding: '4px 10px',
                                                            borderRadius: '999px',
                                                            backgroundColor: '#ecfdf5',
                                                            color: '#059669',
                                                            fontSize: '0.78rem',
                                                            fontWeight: 600
                                                        },
                                                        children: "📖 Từ vựng vừa xong"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: '#94a3b8'
                                                        },
                                                        children: [
                                                            "🕒 ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastVocab.completedAt
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '14px',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '42px',
                                                            height: '42px',
                                                            borderRadius: '10px',
                                                            backgroundColor: '#ecfdf5',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '20px'
                                                        },
                                                        children: "👥"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontSize: '1.05rem',
                                                                    fontWeight: 700,
                                                                    color: '#0f172a',
                                                                    marginBottom: '2px'
                                                                },
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastVocab.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.8rem',
                                                                    color: '#64748b'
                                                                },
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastVocab.subTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    backgroundColor: '#f8fafc',
                                                    borderRadius: '12px',
                                                    padding: '16px',
                                                    border: '1px solid #f1f5f9',
                                                    marginBottom: '20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            fontSize: '0.88rem',
                                                            marginBottom: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#475569'
                                                                },
                                                                children: "Đã ghi nhớ:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: '#059669'
                                                                },
                                                                children: [
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastVocab.memorizedCount,
                                                                    " / ",
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastVocab.totalCount,
                                                                    " từ"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: '8px',
                                                            backgroundColor: '#e2e8f0',
                                                            borderRadius: '999px',
                                                            overflow: 'hidden'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastVocab.memorizedCount / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastVocab.totalCount * 100}%`,
                                                                height: '100%',
                                                                backgroundColor: '#059669'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(student)/page.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '999px',
                                            border: '1px solid #10b981',
                                            backgroundColor: '#ffffff',
                                            color: '#059669',
                                            fontWeight: 600,
                                            fontSize: '0.88rem'
                                        },
                                        children: "⊕ Học chủ đề mới"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '24px',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '14px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            padding: '4px 10px',
                                                            borderRadius: '999px',
                                                            backgroundColor: '#fffbeb',
                                                            color: '#d97706',
                                                            fontSize: '0.78rem',
                                                            fontWeight: 600
                                                        },
                                                        children: "🔡 Ngữ pháp vừa học"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: '#94a3b8'
                                                        },
                                                        children: [
                                                            "🕒 ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastGrammar.studiedAt
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'center',
                                                    padding: '24px 0'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '48px',
                                                            height: '48px',
                                                            borderRadius: '50%',
                                                            backgroundColor: '#fef3c7',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '22px',
                                                            margin: '0 auto 16px'
                                                        },
                                                        children: "📐"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '1.2rem',
                                                            fontWeight: 700,
                                                            color: '#0f172a'
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedProgress"].lastGrammar.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 419,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '999px',
                                            border: '1px solid #fde68a',
                                            backgroundColor: '#ffffff',
                                            color: '#b45309',
                                            fontWeight: 600,
                                            fontSize: '0.88rem'
                                        },
                                        children: "✍️ Làm bài tập củng cố"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/page.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "de-thi",
                style: {
                    marginBottom: '52px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '16px',
                            marginBottom: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.6rem',
                                    fontWeight: 800,
                                    color: '#0f172a'
                                },
                                children: "Thư Viện Đề Thi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExamStatusFilter('all'),
                                        style: {
                                            padding: '6px 14px',
                                            borderRadius: '999px',
                                            border: 'none',
                                            backgroundColor: examStatusFilter === 'all' ? '#059669' : '#f1f5f9',
                                            color: examStatusFilter === 'all' ? '#fff' : '#64748b',
                                            fontWeight: 600,
                                            fontSize: '0.85rem'
                                        },
                                        children: [
                                            "▦ Tất cả (",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedExamList"].length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExamStatusFilter('completed'),
                                        style: {
                                            padding: '6px 14px',
                                            borderRadius: '999px',
                                            border: 'none',
                                            backgroundColor: examStatusFilter === 'completed' ? '#059669' : '#f1f5f9',
                                            color: examStatusFilter === 'completed' ? '#fff' : '#64748b',
                                            fontWeight: 600,
                                            fontSize: '0.85rem'
                                        },
                                        children: "✓ Đã hoàn thành (2)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 484,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setExamStatusFilter('in_progress'),
                                        style: {
                                            padding: '6px 14px',
                                            borderRadius: '999px',
                                            border: 'none',
                                            backgroundColor: examStatusFilter === 'in_progress' ? '#059669' : '#f1f5f9',
                                            color: examStatusFilter === 'in_progress' ? '#fff' : '#64748b',
                                            fontWeight: 600,
                                            fontSize: '0.85rem'
                                        },
                                        children: "⏳ Đang làm dở (2)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            flexWrap: 'wrap',
                            marginBottom: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    color: '#475569',
                                    marginRight: '4px'
                                },
                                children: "🔻 Bộ đề:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            [
                                'all',
                                'ETS',
                                'HACKER',
                                'BIG STEP',
                                'ECONOMY'
                            ].map((cat)=>{
                                const isSelected = selectedExamCategory === cat;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedExamCategory(cat),
                                    style: {
                                        padding: '5px 14px',
                                        borderRadius: '999px',
                                        border: isSelected ? 'none' : '1px solid #e2e8f0',
                                        backgroundColor: isSelected ? '#059669' : '#ffffff',
                                        color: isSelected ? '#ffffff' : '#64748b',
                                        fontSize: '0.8rem',
                                        fontWeight: 600
                                    },
                                    children: cat === 'all' ? 'Tất cả bộ đề' : cat
                                }, cat, false, {
                                    fileName: "[project]/src/app/(student)/page.tsx",
                                    lineNumber: 521,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                            gap: '20px'
                        },
                        children: filteredExams.map((exam)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '24px',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: '6px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    padding: '3px 8px',
                                                                    borderRadius: '6px',
                                                                    backgroundColor: '#ecfdf5',
                                                                    color: '#059669',
                                                                    fontSize: '0.72rem',
                                                                    fontWeight: 600
                                                                },
                                                                children: exam.badgeType
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    padding: '3px 8px',
                                                                    borderRadius: '6px',
                                                                    backgroundColor: '#f1f5f9',
                                                                    color: '#475569',
                                                                    fontSize: '0.72rem',
                                                                    fontWeight: 600
                                                                },
                                                                children: exam.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 19
                                                    }, this),
                                                    exam.scoreBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            padding: '3px 10px',
                                                            borderRadius: '999px',
                                                            backgroundColor: exam.status === 'completed' ? '#ecfdf5' : '#fffbeb',
                                                            color: exam.status === 'completed' ? '#059669' : '#d97706',
                                                            fontSize: '0.75rem',
                                                            fontWeight: 600
                                                        },
                                                        children: exam.scoreBadge
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 557,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.1rem',
                                                    fontWeight: 700,
                                                    color: '#0f172a',
                                                    marginBottom: '8px'
                                                },
                                                children: exam.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 595,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: '#64748b',
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.5,
                                                    minHeight: '40px',
                                                    marginBottom: '16px'
                                                },
                                                children: exam.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 599,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            fontSize: '0.78rem',
                                                            color: '#64748b',
                                                            marginBottom: '6px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: exam.status === 'completed' ? 'Kết quả:' : 'Tiến độ làm bài:'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 612,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    color: exam.status === 'completed' ? '#059669' : '#0f172a'
                                                                },
                                                                children: exam.status === 'completed' ? 'Đã hoàn thành 100%' : `${exam.progressPercent}%`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 613,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: '6px',
                                                            backgroundColor: '#f1f5f9',
                                                            borderRadius: '999px',
                                                            overflow: 'hidden'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: `${exam.progressPercent}%`,
                                                                height: '100%',
                                                                backgroundColor: exam.status === 'completed' ? '#059669' : '#f59e0b'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(student)/page.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 617,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 610,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: '0.78rem',
                                                    color: '#64748b',
                                                    borderTop: '1px solid #f8fafc',
                                                    paddingTop: '12px',
                                                    marginBottom: '20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "🕒 ",
                                                            exam.durationMinutes,
                                                            " phút"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "❓ ",
                                                            exam.totalQuestions,
                                                            " câu"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "👥 ",
                                                            exam.attemptCount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '8px'
                                        },
                                        children: [
                                            exam.status === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            flex: 1,
                                                            padding: '10px',
                                                            borderRadius: '10px',
                                                            border: '1px solid #10b981',
                                                            backgroundColor: '#ffffff',
                                                            color: '#059669',
                                                            fontWeight: 600,
                                                            fontSize: '0.88rem'
                                                        },
                                                        children: "↺ Làm lại"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            padding: '10px 14px',
                                                            borderRadius: '10px',
                                                            border: 'none',
                                                            backgroundColor: '#059669',
                                                            color: '#ffffff'
                                                        },
                                                        children: "📋"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 645,
                                                columnNumber: 19
                                            }, this),
                                            exam.status === 'in_progress' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            flex: 1,
                                                            padding: '10px',
                                                            borderRadius: '10px',
                                                            border: 'none',
                                                            backgroundColor: '#f59e0b',
                                                            color: '#ffffff',
                                                            fontWeight: 600,
                                                            fontSize: '0.88rem'
                                                        },
                                                        children: [
                                                            "▶ Làm tiếp (",
                                                            exam.currentQuestion,
                                                            "/200)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            padding: '10px 14px',
                                                            borderRadius: '10px',
                                                            border: '1px solid #e2e8f0',
                                                            backgroundColor: '#ffffff',
                                                            color: '#64748b'
                                                        },
                                                        children: "ⓘ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 671,
                                                columnNumber: 19
                                            }, this),
                                            exam.status === 'not_started' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            flex: 1,
                                                            padding: '10px',
                                                            borderRadius: '10px',
                                                            border: 'none',
                                                            backgroundColor: '#059669',
                                                            color: '#ffffff',
                                                            fontWeight: 600,
                                                            fontSize: '0.88rem'
                                                        },
                                                        children: "✍️ Làm bài"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        style: {
                                                            padding: '10px 14px',
                                                            borderRadius: '10px',
                                                            border: '1px solid #e2e8f0',
                                                            backgroundColor: '#ffffff',
                                                            color: '#64748b'
                                                        },
                                                        children: "ⓘ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 697,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, exam.id, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 546,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 540,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/page.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "tu-vung",
                style: {
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '16px',
                            marginBottom: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.6rem',
                                    fontWeight: 800,
                                    color: '#0f172a'
                                },
                                children: "Chủ Đề Từ Vựng Đã Học"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 737,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setVocabStatusFilter('all'),
                                        style: {
                                            padding: '6px 14px',
                                            borderRadius: '999px',
                                            border: 'none',
                                            backgroundColor: vocabStatusFilter === 'all' ? '#059669' : '#f1f5f9',
                                            color: vocabStatusFilter === 'all' ? '#fff' : '#64748b',
                                            fontWeight: 600,
                                            fontSize: '0.85rem'
                                        },
                                        children: [
                                            "▦ Tất cả (",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$seedData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedVocabList"].length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setVocabStatusFilter('completed'),
                                        style: {
                                            padding: '6px 14px',
                                            borderRadius: '999px',
                                            border: 'none',
                                            backgroundColor: vocabStatusFilter === 'completed' ? '#059669' : '#f1f5f9',
                                            color: vocabStatusFilter === 'completed' ? '#fff' : '#64748b',
                                            fontWeight: 600,
                                            fontSize: '0.85rem'
                                        },
                                        children: "✓ Đã học (2)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setVocabStatusFilter('in_progress'),
                                        style: {
                                            padding: '6px 14px',
                                            borderRadius: '999px',
                                            border: 'none',
                                            backgroundColor: vocabStatusFilter === 'in_progress' ? '#059669' : '#f1f5f9',
                                            color: vocabStatusFilter === 'in_progress' ? '#fff' : '#64748b',
                                            fontWeight: 600,
                                            fontSize: '0.85rem'
                                        },
                                        children: "⏳ Đang học (2)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 768,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 741,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 729,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                            gap: '20px'
                        },
                        children: filteredVocabs.map((topic)=>{
                            const progressPercent = Math.round(topic.memorizedCount / topic.totalCount * 100);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px',
                                    padding: '24px',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start',
                                                    marginBottom: '14px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '44px',
                                                            height: '44px',
                                                            borderRadius: '10px',
                                                            backgroundColor: topic.status === 'completed' ? '#ecfdf5' : topic.status === 'in_progress' ? '#fffbeb' : '#f8fafc',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '22px'
                                                        },
                                                        children: [
                                                            topic.iconType === 'contract' && '📄',
                                                            topic.iconType === 'finance' && '💰',
                                                            topic.iconType === 'business' && '💼',
                                                            topic.iconType === 'personnel' && '👥',
                                                            topic.iconType === 'travel' && '✈️',
                                                            topic.iconType === 'shopping' && '📦'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 805,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'right'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    padding: '3px 8px',
                                                                    borderRadius: '999px',
                                                                    backgroundColor: topic.status === 'completed' ? '#ecfdf5' : topic.status === 'in_progress' ? '#fffbeb' : '#f1f5f9',
                                                                    color: topic.status === 'completed' ? '#059669' : topic.status === 'in_progress' ? '#d97706' : '#64748b',
                                                                    fontSize: '0.72rem',
                                                                    fontWeight: 600,
                                                                    display: 'inline-block',
                                                                    marginBottom: '4px'
                                                                },
                                                                children: topic.status === 'completed' ? '✓ Đã học xong' : topic.status === 'in_progress' ? '⏳ Đang học' : '○ Chưa học'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 824,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.72rem',
                                                                    color: '#94a3b8'
                                                                },
                                                                children: topic.targetLevel
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 804,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.15rem',
                                                    fontWeight: 700,
                                                    color: '#0f172a',
                                                    marginBottom: '8px'
                                                },
                                                children: topic.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 840,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: '#64748b',
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.5,
                                                    minHeight: '42px',
                                                    marginBottom: '16px'
                                                },
                                                children: topic.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 844,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            fontSize: '0.78rem',
                                                            color: '#64748b',
                                                            marginBottom: '6px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Tiến độ từ vựng:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 856,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: '#0f172a'
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
                                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: '6px',
                                                            backgroundColor: '#f1f5f9',
                                                            borderRadius: '999px',
                                                            overflow: 'hidden'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: `${progressPercent}%`,
                                                                height: '100%',
                                                                backgroundColor: topic.status === 'completed' ? '#059669' : '#f59e0b'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(student)/page.tsx",
                                                            lineNumber: 862,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(student)/page.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 854,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 803,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            topic.status === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    width: '100%',
                                                    padding: '10px',
                                                    borderRadius: '10px',
                                                    border: '1px solid #10b981',
                                                    backgroundColor: '#ffffff',
                                                    color: '#059669',
                                                    fontWeight: 600,
                                                    fontSize: '0.88rem'
                                                },
                                                children: [
                                                    "↺ Ôn tập lại (",
                                                    topic.totalCount,
                                                    " từ)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 874,
                                                columnNumber: 21
                                            }, this),
                                            topic.status === 'in_progress' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    width: '100%',
                                                    padding: '10px',
                                                    borderRadius: '10px',
                                                    border: 'none',
                                                    backgroundColor: '#f59e0b',
                                                    color: '#ffffff',
                                                    fontWeight: 600,
                                                    fontSize: '0.88rem'
                                                },
                                                children: [
                                                    "▶ Học tiếp (",
                                                    topic.memorizedCount,
                                                    "/",
                                                    topic.totalCount,
                                                    " từ)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 889,
                                                columnNumber: 21
                                            }, this),
                                            topic.status === 'not_started' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    width: '100%',
                                                    padding: '10px',
                                                    borderRadius: '10px',
                                                    border: 'none',
                                                    backgroundColor: '#059669',
                                                    color: '#ffffff',
                                                    fontWeight: 600,
                                                    fontSize: '0.88rem'
                                                },
                                                children: "📖 Bắt đầu học"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(student)/page.tsx",
                                                lineNumber: 904,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(student)/page.tsx",
                                        lineNumber: 872,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, topic.id, true, {
                                fileName: "[project]/src/app/(student)/page.tsx",
                                lineNumber: 793,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/page.tsx",
                        lineNumber: 785,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/page.tsx",
                lineNumber: 728,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(student)/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(StudentDashboardPage, "OY36kvZMFFEVh/CAKWnI8CGIKLw=");
_c = StudentDashboardPage;
var _c;
__turbopack_context__.k.register(_c, "StudentDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/seedData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedExamList",
    ()=>seedExamList,
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
        memorizedCount: 45,
        totalCount: 45
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
        status: 'completed',
        memorizedCount: 10,
        totalCount: 10,
        iconType: 'contract'
    },
    {
        id: 'finance',
        title: 'Tài Chính & Doanh Thu (Finance)',
        description: 'Báo cáo doanh số, thuế, phân tích chi phí và thị trường đầu tư chứng khoán.',
        targetLevel: 'Mục tiêu 700+',
        status: 'in_progress',
        memorizedCount: 6,
        totalCount: 10,
        iconType: 'finance'
    },
    {
        id: 'general-business',
        title: 'Quản Trị Văn Phòng (General Business)',
        description: 'Giao tiếp nội bộ, phân công dự án, gửi email và lịch trình làm việc.',
        targetLevel: 'Mục tiêu 500+',
        status: 'in_progress',
        memorizedCount: 4,
        totalCount: 10,
        iconType: 'business'
    },
    {
        id: 'personnel',
        title: 'Tuyển Dụng & Nhân Sự (Personnel)',
        description: 'Quy trình phỏng vấn, hồ sơ ứng viên, thăng chức và chính sách bảo hiểm.',
        targetLevel: 'Mục tiêu 650+',
        status: 'completed',
        memorizedCount: 10,
        totalCount: 10,
        iconType: 'personnel'
    },
    {
        id: 'travel-hotel',
        title: 'Du Lịch & Đặt Phòng (Travel & Hotel)',
        description: 'Hành trình bay, thủ tục hải quan, đặt phòng nghỉ dưỡng và hội nghị quốc tế.',
        targetLevel: 'Mục tiêu 550+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 10,
        iconType: 'travel'
    },
    {
        id: 'shopping-shipping',
        title: 'Mua Sắm & Hậu Cần (Shopping & Shipping)',
        description: 'Đặt đơn hàng, chuỗi cung ứng, vận chuyển kho bãi và chính sách hoàn trả.',
        targetLevel: 'Mục tiêu 600+',
        status: 'not_started',
        memorizedCount: 0,
        totalCount: 10,
        iconType: 'shopping'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_0go1v5lrkdlbg._.js.map