import { alpha, type Theme } from "../util.ts";

// ---- Palette ----------------------------------------------------------

// Backgrounds (darkest → lightest layers)
const bg = "#0f1815";
const bgPanel = "#0d1714";
const bgRaised = "#0a120e";
const bgHover = "#152620";
const bgSelected = "#1d3326";

// Text
const fg = "#d6e0d8";
const fgStrong = "#e6efe6";
const fgList = "#c5d2c2";
const fgTitle = "#a3b39f";
const fgMuted = "#7a8a78";
const fgComment = "#5a6e60";
const fgFaint = "#3e4d44";
const fgPunct = "#6a7b6f";
const fgOperator = "#8aa395";

// Borders / guides
const border = "#1d2622";
const guide = "#162019";

// Family accents
const green = "#8ac9a0";
const blue = "#6ab7e8";
const blueStatus = "#1f6e93";
const blueStatusFg = "#e6f3fb";
const activityBg = "#10211b";

// Token-only colours
const cyan = "#5cd9d6";
const pink = "#ef7aae";
const propBlue = "#92c5e0";
const purpleBright = "#c7b4f0";
const purpleSoft = "#b89cf0";
const stringOrange = "#f08a3c";

// Standard / shared semantics
const lightGreen = "#4cd07a";
const lightOrange = "#f5a070";
const lightCyan = "#9ee0d6";
const lightPurple = "#b4a3e8";
const lightPink = "#ef5a93"; // git/diff/badge
const teal = "#7bcdc2";
const red = "#cd0365";
const orange = "#e7645c";
const blueAnsi = "#2a94d6";
const ansiBlack = "#0a120e";
const ansiMagenta = "#6c4bc1";
const warm = "#b85a00";
const white = "#ffffff";
const transparent = "#00000000";

// ---- Theme ------------------------------------------------------------

const theme: Theme = {
  $schema: "vscode://schemas/color-theme",
  name: "micro:bit Pixel Dark",
  type: "dark",
  semanticHighlighting: true,
  colors: {
    "editor.background": bg,
    "editor.foreground": fg,
    "editor.lineHighlightBackground": alpha(green, 0.05),
    "editor.lineHighlightBorder": transparent,
    "editor.selectionBackground": alpha(blue, 0.22),
    "editor.inactiveSelectionBackground": alpha(blue, 0.22),
    "editor.findMatchBackground": alpha(green, 0.14),
    "editor.findMatchHighlightBackground": alpha(green, 0.14),
    "editor.wordHighlightBackground": alpha(green, 0.14),
    "editorCursor.foreground": green,
    "editorLineNumber.foreground": fgFaint,
    "editorLineNumber.activeForeground": fg,
    "editorBracketMatch.background": alpha(lightGreen, 0.12),
    "editorBracketMatch.border": green,
    "editorWhitespace.foreground": fgFaint + "55",
    "editorIndentGuide.background": guide,
    "editorIndentGuide.activeBackground": fgFaint,
    "editorRuler.foreground": guide,
    "editorBracketHighlight.foreground1": lightGreen,
    "editorBracketHighlight.foreground2": blue,
    "editorBracketHighlight.foreground3": purpleBright,
    "editorBracketHighlight.foreground4": lightGreen,
    "editorBracketHighlight.foreground5": blue,
    "editorBracketHighlight.foreground6": purpleBright,
    "editorBracketHighlight.unexpectedBracket.foreground": red,
    "editorGutter.background": bg,
    "editorGutter.modifiedBackground": blue,
    "editorGutter.addedBackground": green,
    "editorGutter.deletedBackground": lightPink,
    "titleBar.activeBackground": bgRaised,
    "titleBar.activeForeground": fgTitle,
    "titleBar.inactiveBackground": bgRaised,
    "titleBar.inactiveForeground": fgMuted,
    "titleBar.border": border,
    "activityBar.background": activityBg,
    "activityBar.foreground": green,
    "activityBar.inactiveForeground": alpha(green, 0.5),
    "activityBar.activeBorder": green,
    "activityBar.activeBackground": transparent,
    "activityBar.border": activityBg,
    "activityBarBadge.background": lightPink,
    "activityBarBadge.foreground": white,
    "sideBar.background": bgPanel,
    "sideBar.foreground": fgList,
    "sideBar.border": border,
    "sideBarTitle.foreground": fgMuted,
    "sideBarSectionHeader.background": bgPanel,
    "sideBarSectionHeader.foreground": fgMuted,
    "sideBarSectionHeader.border": guide,
    "list.activeSelectionBackground": bgSelected,
    "list.activeSelectionForeground": fgList,
    "list.inactiveSelectionBackground": bgSelected,
    "list.inactiveSelectionForeground": fgList,
    "list.hoverBackground": bgHover,
    "list.hoverForeground": fgList,
    "list.focusBackground": bgSelected,
    "list.focusForeground": fgList,
    "list.focusOutline": green,
    "list.highlightForeground": green,
    "tree.indentGuidesStroke": guide,
    "editorGroupHeader.tabsBackground": bgRaised,
    "editorGroupHeader.tabsBorder": border,
    "editorGroupHeader.border": border,
    "tab.activeBackground": bg,
    "tab.activeForeground": fgStrong,
    "tab.activeBorderTop": green,
    "tab.activeBorder": bg,
    "tab.inactiveBackground": bgRaised,
    "tab.inactiveForeground": fgPunct,
    "tab.hoverBackground": bgHover,
    "tab.border": border,
    "tab.unfocusedActiveBorderTop": guide,
    "editorGroup.border": border,
    "breadcrumb.background": bg,
    "breadcrumb.foreground": fgMuted,
    "breadcrumb.focusForeground": fg,
    "breadcrumb.activeSelectionForeground": green,
    "statusBar.background": blueStatus,
    "statusBar.foreground": blueStatusFg,
    "statusBar.border": blueStatus,
    "statusBar.noFolderBackground": blueStatus,
    "statusBar.debuggingBackground": green,
    "statusBarItem.hoverBackground": alpha(white, 0.13),
    "statusBarItem.remoteBackground": "#00000022",
    "statusBarItem.remoteForeground": blueStatusFg,
    "statusBarItem.prominentBackground": "#00000022",
    "statusBarItem.errorBackground": red,
    "statusBarItem.warningBackground": warm,
    "panel.background": bg,
    "panel.border": border,
    "panelTitle.activeForeground": fg,
    "panelTitle.inactiveForeground": fgMuted,
    "panelTitle.activeBorder": green,
    "terminal.background": bg,
    "terminal.foreground": fg,
    "terminal.ansiBlack": ansiBlack,
    "terminal.ansiRed": red,
    "terminal.ansiGreen": "#00a000",
    "terminal.ansiYellow": orange,
    "terminal.ansiBlue": blueAnsi,
    "terminal.ansiMagenta": ansiMagenta,
    "terminal.ansiCyan": teal,
    "terminal.ansiWhite": fg,
    "terminal.ansiBrightBlack": fgFaint,
    "terminal.ansiBrightRed": orange,
    "terminal.ansiBrightGreen": lightGreen,
    "terminal.ansiBrightYellow": lightOrange,
    "terminal.ansiBrightBlue": blue,
    "terminal.ansiBrightMagenta": lightPurple,
    "terminal.ansiBrightCyan": lightCyan,
    "terminal.ansiBrightWhite": white,
    "minimap.background": bgPanel,
    "minimap.selectionHighlight": green,
    "minimapSlider.background": alpha(green, 0.14),
    "minimapSlider.hoverBackground": alpha(green, 0.14),
    "minimapSlider.activeBackground": alpha(green, 0.14),
    "minimapGutter.modifiedBackground": blue,
    "minimapGutter.addedBackground": green,
    "minimapGutter.deletedBackground": lightPink,
    "input.background": bg,
    "input.foreground": fg,
    "input.border": border,
    "input.placeholderForeground": fgMuted,
    "inputOption.activeBorder": green,
    "dropdown.background": bg,
    "dropdown.foreground": fg,
    "dropdown.border": border,
    "button.background": green,
    "button.foreground": white,
    "button.hoverBackground": alpha(green, 0.8),
    "badge.background": green,
    "badge.foreground": white,
    "notificationCenter.border": border,
    "notifications.background": bgPanel,
    "notifications.foreground": fgList,
    "notifications.border": border,
    "textLink.foreground": green,
    "textLink.activeForeground": green,
    "editorLink.activeForeground": green,
    "focusBorder": green,
    "contrastBorder": transparent,
    "scrollbar.shadow": "#00000022",
    "scrollbarSlider.background": alpha(fgFaint, 0.27),
    "scrollbarSlider.hoverBackground": alpha(fgFaint, 0.4),
    "scrollbarSlider.activeBackground": alpha(fgFaint, 0.53),
    "diffEditor.insertedTextBackground": alpha(green, 0.18),
    "diffEditor.removedTextBackground": alpha(lightPink, 0.18),
    "diffEditor.insertedLineBackground": alpha(green, 0.1),
    "diffEditor.removedLineBackground": alpha(lightPink, 0.1),
    "merge.currentHeaderBackground": alpha(blue, 0.3),
    "merge.currentContentBackground": alpha(blue, 0.12),
    "merge.incomingHeaderBackground": alpha(green, 0.3),
    "merge.incomingContentBackground": alpha(green, 0.12),
    "peekView.border": green,
    "peekViewEditor.background": bg,
    "peekViewEditor.matchHighlightBackground": alpha(blue, 0.2),
    "peekViewResult.background": bgPanel,
    "peekViewResult.fileForeground": fgList,
    "peekViewResult.lineForeground": fgFaint,
    "peekViewResult.matchHighlightBackground": alpha(blue, 0.25),
    "peekViewResult.selectionBackground": bgSelected,
    "peekViewResult.selectionForeground": fgList,
    "peekViewTitle.background": bgRaised,
    "peekViewTitleLabel.foreground": fg,
    "peekViewTitleDescription.foreground": fgFaint,
    "notebook.editorBackground": bg,
    "notebook.cellEditorBackground": bg,
    "notebook.cellBorderColor": border,
    "notebook.focusedCellBorder": green,
    "notebook.focusedEditorBorder": green,
    "notebook.focusedCellBackground": alpha(blue, 0.04),
    "notebook.selectedCellBackground": bgSelected,
    "debugToolBar.background": bg,
    "debugToolBar.border": border,
    "debugConsole.errorForeground": red,
    "debugConsole.warningForeground": warm,
    "debugConsole.infoForeground": blue,
    "debugIcon.breakpointForeground": red,
    "debugIcon.startForeground": green,
    "debugIcon.stopForeground": lightPink,
    "debugIcon.pauseForeground": blue,
    "debugIcon.continueForeground": green,
    "debugIcon.restartForeground": green,
    "debugIcon.stepOverForeground": blue,
    "debugIcon.stepIntoForeground": blue,
    "debugIcon.stepOutForeground": blue,
    "debugIcon.disconnectForeground": lightPink,
    "gitDecoration.addedResourceForeground": green,
    "gitDecoration.modifiedResourceForeground": blue,
    "gitDecoration.deletedResourceForeground": lightPink,
    "gitDecoration.untrackedResourceForeground": green,
    "gitDecoration.ignoredResourceForeground": fgFaint,
    "gitDecoration.conflictingResourceForeground": warm,
    "gitDecoration.stageModifiedResourceForeground": blue,
    "gitDecoration.stageDeletedResourceForeground": lightPink,
    "editorWidget.background": bg,
    "editorWidget.foreground": fg,
    "editorWidget.border": border,
    "editorSuggestWidget.background": bg,
    "editorSuggestWidget.foreground": fg,
    "editorSuggestWidget.border": border,
    "editorSuggestWidget.selectedBackground": bgSelected,
    "editorSuggestWidget.selectedForeground": fgList,
    "editorSuggestWidget.highlightForeground": green,
    "editorHoverWidget.background": bg,
    "editorHoverWidget.foreground": fg,
    "editorHoverWidget.border": border,
    "quickInput.background": bg,
    "quickInput.foreground": fg,
    "quickInputList.focusBackground": bgSelected,
    "quickInputList.focusForeground": fgList,
    "quickInputTitle.background": bgRaised,
    "scm.providerBorder": border,
    "problemsErrorIcon.foreground": red,
    "problemsWarningIcon.foreground": warm,
    "problemsInfoIcon.foreground": blue,
  },
  tokenColors: [
    { name: "Comment", scope: ["comment", "punctuation.definition.comment"], settings: { foreground: fgComment, fontStyle: "italic" } },
    { name: "Comment Doc", scope: ["comment.block.documentation", "comment.line.documentation"], settings: { foreground: fgComment, fontStyle: "italic" } },
    { name: "String", scope: ["string", "string.quoted", "string.template"], settings: { foreground: stringOrange } },
    { name: "String Escape", scope: ["constant.character.escape"], settings: { foreground: lightGreen } },
    { name: "Template Expression", scope: ["meta.template.expression", "punctuation.definition.template-expression"], settings: { foreground: fgPunct } },
    { name: "Number", scope: ["constant.numeric"], settings: { foreground: purpleSoft } },
    { name: "Constant", scope: ["constant.language", "constant.other"], settings: { foreground: purpleBright } },
    { name: "Variable", scope: ["variable", "variable.other"], settings: { foreground: fg } },
    { name: "Variable Parameter", scope: ["variable.parameter"], settings: { foreground: purpleBright } },
    { name: "Property", scope: ["variable.other.property", "meta.property.object", "support.variable.property"], settings: { foreground: propBlue } },
    { name: "Keyword", scope: ["keyword", "keyword.control", "keyword.operator.expression"], settings: { foreground: cyan, fontStyle: "" } },
    { name: "Storage", scope: ["storage.type", "storage.modifier"], settings: { foreground: cyan } },
    { name: "Type", scope: ["entity.name.type", "entity.name.class", "support.class", "support.type"], settings: { foreground: pink } },
    { name: "Builtin Type", scope: ["support.type.primitive", "support.type.builtin"], settings: { foreground: pink } },
    { name: "Function", scope: ["entity.name.function", "support.function", "meta.function-call.generic"], settings: { foreground: blue } },
    { name: "Method", scope: ["meta.function-call entity.name.function", "variable.function"], settings: { foreground: blue } },
    { name: "Decorator", scope: ["meta.decorator", "punctuation.decorator", "entity.name.function.decorator"], settings: { foreground: stringOrange } },
    { name: "Operator", scope: ["keyword.operator", "punctuation.separator"], settings: { foreground: fgOperator } },
    { name: "Punctuation", scope: ["punctuation"], settings: { foreground: fgPunct } },
    { name: "Regex", scope: ["string.regexp"], settings: { foreground: lightGreen } },
    { name: "Tag", scope: ["entity.name.tag"], settings: { foreground: pink } },
    { name: "Tag Attribute", scope: ["entity.other.attribute-name"], settings: { foreground: purpleBright } },
    { name: "Markdown Heading", scope: ["markup.heading", "entity.name.section"], settings: { foreground: pink, fontStyle: "bold" } },
    { name: "Markdown Link", scope: ["markup.underline.link"], settings: { foreground: blue } },
    { name: "Markdown Bold", scope: ["markup.bold"], settings: { foreground: cyan, fontStyle: "bold" } },
    { name: "Markdown Italic", scope: ["markup.italic"], settings: { foreground: stringOrange, fontStyle: "italic" } },
    { name: "Markdown Code", scope: ["markup.inline.raw", "markup.fenced_code"], settings: { foreground: blue } },
    { name: "JSON Key", scope: ["support.type.property-name.json"], settings: { foreground: propBlue } },
    { name: "Invalid", scope: ["invalid"], settings: { foreground: white, background: red } },
  ],
  semanticTokenColors: {
    "variable.readonly": { foreground: purpleBright },
    "variable.defaultLibrary": { foreground: blue },
    "property.readonly": { foreground: propBlue },
    "parameter": { foreground: purpleBright },
    "class": { foreground: pink },
    "interface": { foreground: pink },
    "enum": { foreground: pink },
    "type": { foreground: pink },
    "typeParameter": { foreground: purpleBright, italic: true },
    "function": { foreground: blue },
    "method": { foreground: blue },
    "namespace": { foreground: pink },
    "keyword": { foreground: cyan },
    "decorator": { foreground: stringOrange },
    "regexp": { foreground: lightGreen },
  },
};

export default theme;
