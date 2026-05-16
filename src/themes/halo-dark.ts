import { alpha, type Theme } from "../util.ts";

// ---- Palette ----------------------------------------------------------

// Backgrounds (darkest → lightest layers)
const bg = "#13101f";
const bgPanel = "#100c1b";
const bgRaised = "#0c0a14";
const bgHover = "#181228";
const bgSelected = "#22183a";

// Text
const fg = "#dcd4e6";
const fgStrong = "#ece4f5";
const fgList = "#cdc2dc";
const fgMuted = "#7a6e90";
const fgTitle = "#a89db8";
const fgComment = "#5d5072";
const fgFaint = "#4a3f5f";
const fgPunct = "#6d5c8c";
const fgOperator = "#8a7da0";

// Borders / guides
const border = "#1f1832";
const guide = "#181228";

// Family accents
const purple = "#b4a3e8";
const teal = "#7bcdc2";
const tealStatus = "#2a7d72";
const tealStatusFg = "#e6f5f2";

// Token-only colours
const string = "#9ee0d6";
const propBlue = "#92c5e0";
const paramTan = "#f5b48c";

// Pink (deleted, decorator, number)
const pink = "#ef7aae";

// Standard / shared semantics
const green = "#00a000";
const red = "#cd0365";
const orange = "#e7645c";
const blue = "#2a94d6";
const lightGreen = "#4cd07a";
const lightOrange = "#f5a070";
const lightBlue = "#6ab7e8";
const lightCyan = "#9ee0d6";
const ansiBlack = "#0a120e";
const ansiWhite = "#d6e0d8";
const ansiBrightBlack = "#3e4d44";
const ansiMagenta = "#6c4bc1";
const warm = "#b85a00";
const white = "#ffffff";
const transparent = "#00000000";

// ---- Theme ------------------------------------------------------------

const theme: Theme = {
  $schema: "vscode://schemas/color-theme",
  name: "micro:bit Halo Dark",
  type: "dark",
  semanticHighlighting: true,
  colors: {
    "editor.background": bg,
    "editor.foreground": fg,
    "editor.lineHighlightBackground": alpha(purple, 0.05),
    "editor.lineHighlightBorder": transparent,
    "editor.selectionBackground": alpha(teal, 0.22),
    "editor.inactiveSelectionBackground": alpha(teal, 0.22),
    "editor.findMatchBackground": alpha(teal, 0.14),
    "editor.findMatchHighlightBackground": alpha(teal, 0.14),
    "editor.wordHighlightBackground": alpha(teal, 0.14),
    "editorCursor.foreground": purple,
    "editorLineNumber.foreground": fgFaint,
    "editorLineNumber.activeForeground": fg,
    "editorBracketMatch.background": alpha(teal, 0.14),
    "editorBracketMatch.border": purple,
    "editorWhitespace.foreground": fgFaint + "55",
    "editorIndentGuide.background": guide,
    "editorIndentGuide.activeBackground": fgFaint,
    "editorRuler.foreground": guide,
    "editorBracketHighlight.foreground1": purple,
    "editorBracketHighlight.foreground2": teal,
    "editorBracketHighlight.foreground3": pink,
    "editorBracketHighlight.foreground4": purple,
    "editorBracketHighlight.foreground5": teal,
    "editorBracketHighlight.foreground6": pink,
    "editorBracketHighlight.unexpectedBracket.foreground": red,
    "editorGutter.background": bg,
    "editorGutter.modifiedBackground": teal,
    "editorGutter.addedBackground": lightGreen,
    "editorGutter.deletedBackground": pink,
    "titleBar.activeBackground": bgRaised,
    "titleBar.activeForeground": fgTitle,
    "titleBar.inactiveBackground": bgRaised,
    "titleBar.inactiveForeground": fgMuted,
    "titleBar.border": border,
    "activityBar.background": "#241a3d",
    "activityBar.foreground": purple,
    "activityBar.inactiveForeground": alpha(purple, 0.5),
    "activityBar.activeBorder": purple,
    "activityBar.activeBackground": transparent,
    "activityBar.border": "#241a3d",
    "activityBarBadge.background": lightOrange,
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
    "list.focusOutline": purple,
    "list.highlightForeground": purple,
    "tree.indentGuidesStroke": guide,
    "editorGroupHeader.tabsBackground": bgRaised,
    "editorGroupHeader.tabsBorder": border,
    "editorGroupHeader.border": border,
    "tab.activeBackground": bg,
    "tab.activeForeground": fgStrong,
    "tab.activeBorderTop": purple,
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
    "breadcrumb.activeSelectionForeground": purple,
    "statusBar.background": tealStatus,
    "statusBar.foreground": tealStatusFg,
    "statusBar.border": tealStatus,
    "statusBar.noFolderBackground": tealStatus,
    "statusBar.debuggingBackground": purple,
    "statusBarItem.hoverBackground": alpha(white, 0.13),
    "statusBarItem.remoteBackground": "#00000022",
    "statusBarItem.remoteForeground": tealStatusFg,
    "statusBarItem.prominentBackground": "#00000022",
    "statusBarItem.errorBackground": red,
    "statusBarItem.warningBackground": warm,
    "panel.background": bg,
    "panel.border": border,
    "panelTitle.activeForeground": fg,
    "panelTitle.inactiveForeground": fgMuted,
    "panelTitle.activeBorder": purple,
    "terminal.background": bg,
    "terminal.foreground": fg,
    "terminal.ansiBlack": ansiBlack,
    "terminal.ansiRed": red,
    "terminal.ansiGreen": green,
    "terminal.ansiYellow": orange,
    "terminal.ansiBlue": blue,
    "terminal.ansiMagenta": ansiMagenta,
    "terminal.ansiCyan": teal,
    "terminal.ansiWhite": ansiWhite,
    "terminal.ansiBrightBlack": ansiBrightBlack,
    "terminal.ansiBrightRed": orange,
    "terminal.ansiBrightGreen": lightGreen,
    "terminal.ansiBrightYellow": lightOrange,
    "terminal.ansiBrightBlue": lightBlue,
    "terminal.ansiBrightMagenta": purple,
    "terminal.ansiBrightCyan": lightCyan,
    "terminal.ansiBrightWhite": white,
    "minimap.background": bgPanel,
    "minimap.selectionHighlight": purple,
    "minimapSlider.background": alpha(teal, 0.14),
    "minimapSlider.hoverBackground": alpha(teal, 0.14),
    "minimapSlider.activeBackground": alpha(teal, 0.14),
    "minimapGutter.modifiedBackground": teal,
    "minimapGutter.addedBackground": lightGreen,
    "minimapGutter.deletedBackground": pink,
    "input.background": bg,
    "input.foreground": fg,
    "input.border": border,
    "input.placeholderForeground": fgMuted,
    "inputOption.activeBorder": purple,
    "dropdown.background": bg,
    "dropdown.foreground": fg,
    "dropdown.border": border,
    "button.background": purple,
    "button.foreground": white,
    "button.hoverBackground": alpha(purple, 0.8),
    "badge.background": purple,
    "badge.foreground": white,
    "notificationCenter.border": border,
    "notifications.background": bgPanel,
    "notifications.foreground": fgList,
    "notifications.border": border,
    "textLink.foreground": purple,
    "textLink.activeForeground": purple,
    "editorLink.activeForeground": purple,
    "focusBorder": purple,
    "contrastBorder": transparent,
    "scrollbar.shadow": "#00000022",
    "scrollbarSlider.background": alpha(fgFaint, 0.27),
    "scrollbarSlider.hoverBackground": alpha(fgFaint, 0.4),
    "scrollbarSlider.activeBackground": alpha(fgFaint, 0.53),
    "diffEditor.insertedTextBackground": alpha(lightGreen, 0.18),
    "diffEditor.removedTextBackground": alpha(pink, 0.18),
    "diffEditor.insertedLineBackground": alpha(lightGreen, 0.1),
    "diffEditor.removedLineBackground": alpha(pink, 0.1),
    "merge.currentHeaderBackground": alpha(teal, 0.3),
    "merge.currentContentBackground": alpha(teal, 0.12),
    "merge.incomingHeaderBackground": alpha(lightGreen, 0.3),
    "merge.incomingContentBackground": alpha(lightGreen, 0.12),
    "peekView.border": purple,
    "peekViewEditor.background": bg,
    "peekViewEditor.matchHighlightBackground": alpha(teal, 0.2),
    "peekViewResult.background": bgPanel,
    "peekViewResult.fileForeground": fgList,
    "peekViewResult.lineForeground": fgFaint,
    "peekViewResult.matchHighlightBackground": alpha(teal, 0.25),
    "peekViewResult.selectionBackground": bgSelected,
    "peekViewResult.selectionForeground": fgList,
    "peekViewTitle.background": bgRaised,
    "peekViewTitleLabel.foreground": fg,
    "peekViewTitleDescription.foreground": fgFaint,
    "notebook.editorBackground": bg,
    "notebook.cellEditorBackground": bg,
    "notebook.cellBorderColor": border,
    "notebook.focusedCellBorder": purple,
    "notebook.focusedEditorBorder": purple,
    "notebook.focusedCellBackground": alpha(teal, 0.04),
    "notebook.selectedCellBackground": bgSelected,
    "debugToolBar.background": bg,
    "debugToolBar.border": border,
    "debugConsole.errorForeground": red,
    "debugConsole.warningForeground": warm,
    "debugConsole.infoForeground": teal,
    "debugIcon.breakpointForeground": red,
    "debugIcon.startForeground": lightGreen,
    "debugIcon.stopForeground": pink,
    "debugIcon.pauseForeground": teal,
    "debugIcon.continueForeground": lightGreen,
    "debugIcon.restartForeground": lightGreen,
    "debugIcon.stepOverForeground": teal,
    "debugIcon.stepIntoForeground": teal,
    "debugIcon.stepOutForeground": teal,
    "debugIcon.disconnectForeground": pink,
    "gitDecoration.addedResourceForeground": lightGreen,
    "gitDecoration.modifiedResourceForeground": teal,
    "gitDecoration.deletedResourceForeground": pink,
    "gitDecoration.untrackedResourceForeground": lightGreen,
    "gitDecoration.ignoredResourceForeground": fgFaint,
    "gitDecoration.conflictingResourceForeground": warm,
    "gitDecoration.stageModifiedResourceForeground": teal,
    "gitDecoration.stageDeletedResourceForeground": pink,
    "editorWidget.background": bg,
    "editorWidget.foreground": fg,
    "editorWidget.border": border,
    "editorSuggestWidget.background": bg,
    "editorSuggestWidget.foreground": fg,
    "editorSuggestWidget.border": border,
    "editorSuggestWidget.selectedBackground": bgSelected,
    "editorSuggestWidget.selectedForeground": fgList,
    "editorSuggestWidget.highlightForeground": purple,
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
    "problemsInfoIcon.foreground": teal,
  },
  tokenColors: [
    { name: "Comment", scope: ["comment", "punctuation.definition.comment"], settings: { foreground: fgComment, fontStyle: "italic" } },
    { name: "Comment Doc", scope: ["comment.block.documentation", "comment.line.documentation"], settings: { foreground: fgComment, fontStyle: "italic" } },
    { name: "String", scope: ["string", "string.quoted", "string.template"], settings: { foreground: string } },
    { name: "String Escape", scope: ["constant.character.escape"], settings: { foreground: lightGreen } },
    { name: "Template Expression", scope: ["meta.template.expression", "punctuation.definition.template-expression"], settings: { foreground: fgPunct } },
    { name: "Number", scope: ["constant.numeric"], settings: { foreground: pink } },
    { name: "Constant", scope: ["constant.language", "constant.other"], settings: { foreground: pink } },
    { name: "Variable", scope: ["variable", "variable.other"], settings: { foreground: fg } },
    { name: "Variable Parameter", scope: ["variable.parameter"], settings: { foreground: paramTan } },
    { name: "Property", scope: ["variable.other.property", "meta.property.object", "support.variable.property"], settings: { foreground: propBlue } },
    { name: "Keyword", scope: ["keyword", "keyword.control", "keyword.operator.expression"], settings: { foreground: purple, fontStyle: "" } },
    { name: "Storage", scope: ["storage.type", "storage.modifier"], settings: { foreground: purple } },
    { name: "Type", scope: ["entity.name.type", "entity.name.class", "support.class", "support.type"], settings: { foreground: lightOrange } },
    { name: "Builtin Type", scope: ["support.type.primitive", "support.type.builtin"], settings: { foreground: lightOrange } },
    { name: "Function", scope: ["entity.name.function", "support.function", "meta.function-call.generic"], settings: { foreground: teal } },
    { name: "Method", scope: ["meta.function-call entity.name.function", "variable.function"], settings: { foreground: teal } },
    { name: "Decorator", scope: ["meta.decorator", "punctuation.decorator", "entity.name.function.decorator"], settings: { foreground: pink } },
    { name: "Operator", scope: ["keyword.operator", "punctuation.separator"], settings: { foreground: fgOperator } },
    { name: "Punctuation", scope: ["punctuation"], settings: { foreground: fgPunct } },
    { name: "Regex", scope: ["string.regexp"], settings: { foreground: lightGreen } },
    { name: "Tag", scope: ["entity.name.tag"], settings: { foreground: purple } },
    { name: "Tag Attribute", scope: ["entity.other.attribute-name"], settings: { foreground: paramTan } },
    { name: "Markdown Heading", scope: ["markup.heading", "entity.name.section"], settings: { foreground: lightOrange, fontStyle: "bold" } },
    { name: "Markdown Link", scope: ["markup.underline.link"], settings: { foreground: teal } },
    { name: "Markdown Bold", scope: ["markup.bold"], settings: { foreground: purple, fontStyle: "bold" } },
    { name: "Markdown Italic", scope: ["markup.italic"], settings: { foreground: string, fontStyle: "italic" } },
    { name: "Markdown Code", scope: ["markup.inline.raw", "markup.fenced_code"], settings: { foreground: teal } },
    { name: "JSON Key", scope: ["support.type.property-name.json"], settings: { foreground: propBlue } },
    { name: "Invalid", scope: ["invalid"], settings: { foreground: white, background: red } },
  ],
  semanticTokenColors: {
    "variable.readonly": { foreground: pink },
    "variable.defaultLibrary": { foreground: teal },
    "property.readonly": { foreground: propBlue },
    "parameter": { foreground: paramTan },
    "class": { foreground: lightOrange },
    "interface": { foreground: lightOrange },
    "enum": { foreground: lightOrange },
    "type": { foreground: lightOrange },
    "typeParameter": { foreground: paramTan, italic: true },
    "function": { foreground: teal },
    "method": { foreground: teal },
    "namespace": { foreground: lightOrange },
    "keyword": { foreground: purple },
    "decorator": { foreground: pink },
    "regexp": { foreground: lightGreen },
  },
};

export default theme;
