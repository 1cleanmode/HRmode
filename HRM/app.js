// ==================== CONFIG ====================
const DEMO_MODE = false;

const MAX_PHOTO_MB = 5;
const STORAGE_KEY = 'hrmode-employees';
const DEPTS_KEY = 'hrmode-departments';
const TITLES_KEY = 'hrmode-titles';
const THEME_KEY = 'hrmode-theme';
const SORT_KEY = 'hrmode-sort';
const PROTECT_KEY = 'hrmode-protect';
const SNAPSHOTS_KEY = 'hrmode-pay-snapshots';
const HOLIDAYS_KEY = 'hrmode-holidays';
const DEMO_SEEDED_KEY = 'hrmode-demo-seeded';
const HOLIDAYS_SEEDED_KEY = 'hrmode-holidays-seeded';
const ACTIVITY_KEY = 'hrmode-activity';
const ANNOUNCEMENTS_KEY = 'hrmode-announcements';
const KUDOS_KEY = 'hrmode-kudos';
const NOTES_KEY = 'hrmode-notes';
const JOB_HISTORY_KEY = 'hrmode-job-history';
const GOALS_KEY = 'hrmode-goals';
const DOCUMENTS_KEY = 'hrmode-documents';
const ONBOARDING_TEMPLATES_KEY = 'hrmode-onboarding-templates';
const TRASH_KEY = 'hrmode-trash';
const ACTIVITY_MAX = 500;
const TRASH_MAX = 500;
const TRASH_TTL_DAYS = 30;
const TRASH_TTL_MS = TRASH_TTL_DAYS * 24 * 60 * 60 * 1000;

const DOC_MAX_FILE_BYTES = 500 * 1024;
const DOC_MAX_FILES_PER_EMPLOYEE = 5;
const DOC_MAX_TOTAL_BYTES = 20 * 1024 * 1024;

const DEFAULT_DEPARTMENTS = [
    'Engineering', 'Product', 'Design', 'Sales',
    'Marketing', 'HR', 'Operations', 'Finance', 'Other'
];

const AVATAR_HUES = [262, 320, 200, 170, 30, 350, 240, 130, 20, 290];

const STATUSES = [
    { key: 'off-shift',  label: 'Off-Shift' },
    { key: 'break',      label: 'Break/Lunch' },
    { key: 'production', label: 'Production' },
    { key: 'overtime',   label: 'Over-Time' }
];
const DEFAULT_STATUS = 'off-shift';

const THEME_TRANSITION_MS = 850;
const NOT_PROVIDED_TEXT = 'Not provided';
const PRODUCING_STATUSES = ['production', 'overtime'];
const TRACKED_STATUSES = ['production', 'overtime', 'break'];

const DEFAULT_TAX_PCT = 16;
const DEFAULT_PENSION_PCT = 5;

const DEFAULT_TIMEOFF_ALLOWANCE = 72;
const HOURS_PER_DAY = 8;
const TIMEOFF_TYPES = [
    { key: 'vacation', label: 'Vacation' },
    { key: 'sick',     label: 'Sick' },
    { key: 'personal', label: 'Personal' },
    { key: 'unpaid',   label: 'Unpaid' }
];

const ORG_ZOOM_MIN = 0.5;
const ORG_ZOOM_MAX = 1.5;
const ORG_ZOOM_STEP = 0.1;

const TOAST_MAX_VISIBLE = 3;
const BIRTHDAY_CONFETTI_MS = 30000;

const KUDOS_BADGES = {
    '':       { emoji: '💬', label: 'Message' },
    'star':   { emoji: '⭐', label: 'Star' },
    'rocket': { emoji: '🚀', label: 'Rocket' },
    'heart':  { emoji: '💖', label: 'Heart' },
    'fire':   { emoji: '🔥', label: 'Fire' },
    'trophy': { emoji: '🏆', label: 'Trophy' },
    'bulb':   { emoji: '💡', label: 'Bright Idea' }
};

const NOTE_TYPES = [
    { key: 'note',        label: 'General Note' },
    { key: 'one-on-one',  label: '1-on-1' },
    { key: 'feedback',    label: 'Feedback' },
    { key: 'warning',     label: 'Warning / PIP' }
];

const JOB_HISTORY_KINDS = [
    { key: 'title',      label: 'Title change',      icon: '🏷️' },
    { key: 'pay',        label: 'Pay change',        icon: '💰' },
    { key: 'department', label: 'Department change', icon: '🏢' },
    { key: 'manager',    label: 'Manager change',    icon: '👤' },
    { key: 'promotion',  label: 'Promotion',         icon: '⬆️' },
    { key: 'other',      label: 'Other',             icon: '📝' }
];

const GOAL_CATEGORIES = [
    { key: 'objective',  label: 'Objective' },
    { key: 'key-result', label: 'Key Result' },
    { key: 'personal',   label: 'Personal Growth' },
    { key: 'team',       label: 'Team Goal' }
];
const GOAL_STATUSES = [
    { key: 'not-started', label: 'Not Started' },
    { key: 'in-progress', label: 'In Progress' },
    { key: 'at-risk',     label: 'At Risk' },
    { key: 'done',        label: 'Done' }
];

const DOC_CATEGORIES = [
    { key: 'contract',    label: 'Contract',      short: 'DOC' },
    { key: 'id',          label: 'ID / Passport', short: 'ID' },
    { key: 'certificate', label: 'Certificate',   short: 'CERT' },
    { key: 'performance', label: 'Performance',   short: 'PERF' },
    { key: 'medical',     label: 'Medical',       short: 'MED' },
    { key: 'other',       label: 'Other',         short: 'FILE' }
];

const ANNOUNCE_PREVIEW_COUNT = 3;
const KUDOS_PREVIEW_COUNT = 5;
const GOALS_PREVIEW_COUNT = 4;
const JOB_HISTORY_PREVIEW_COUNT = 5;

const ONBOARDING_DEFAULT_ITEMS = [
    'Sign contract',
    'Submit ID & documents',
    'Set up work email',
    'Add to payroll',
    'Meet the team',
    'Complete orientation'
];

// ==================== DOM ====================
const employeeGrid   = document.getElementById('employeeGrid');
const emptyState     = document.getElementById('emptyState');
const noResults      = document.getElementById('noResults');
const noResultsText  = document.getElementById('noResultsText');
const noResultsClearBtn = document.getElementById('noResultsClearBtn');
const searchInput    = document.getElementById('searchInput');
const sortSelect     = document.getElementById('sortSelect');
const addBtn         = document.getElementById('addBtn');
const emptyAddBtn    = document.getElementById('emptyAddBtn');
const selectToggleBtn= document.getElementById('selectToggleBtn');

const filterChipsWrap = document.getElementById('filterChipsWrap');
const filterChips     = document.getElementById('filterChips');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

const statTotal      = document.getElementById('statTotal');
const statVisible    = document.getElementById('statVisible');
const statDepts      = document.getElementById('statDepts');

const statusStrip    = document.getElementById('statusStrip');
const countOff       = document.getElementById('countOff');
const countBreak     = document.getElementById('countBreak');
const countProd      = document.getElementById('countProd');
const countOT        = document.getElementById('countOT');

const recentStrip    = document.getElementById('recentStrip');
const recentList     = document.getElementById('recentList');

const bulkBar        = document.getElementById('bulkBar');
const bulkCount      = document.getElementById('bulkCount');
const bulkCancelBtn  = document.getElementById('bulkCancelBtn');
const bulkChangeDeptBtn = document.getElementById('bulkChangeDeptBtn');
const bulkDeleteBtn  = document.getElementById('bulkDeleteBtn');

const protectToggle  = document.getElementById('protectToggle');
const protectBanner  = document.getElementById('protectBanner');
const demoPill       = document.getElementById('demoPill');

const navStatusPill  = document.getElementById('navStatusPill');
const navStatusDot   = document.getElementById('navStatusDot');
const navStatusText  = document.getElementById('navStatusText');

const detailOverlay  = document.getElementById('detailOverlay');
const detailPanel    = document.getElementById('detailPanel');
const detailClose    = document.getElementById('detailClose');
const detailBody     = document.getElementById('detailBody');

const timesheetCard   = document.getElementById('timesheetCard');
const timesheetScroll = document.getElementById('timesheetScroll');
const timesheetList   = document.getElementById('timesheetList');
const timesheetSub    = document.getElementById('timesheetSub');

const timesheetModalOverlay = document.getElementById('timesheetModalOverlay');
const timesheetModalClose   = document.getElementById('timesheetModalClose');
const timesheetModalList    = document.getElementById('timesheetModalList');
const timesheetModalSub     = document.getElementById('timesheetModalSub');

const payEmployeeSelect = document.getElementById('payEmployeeSelect');
const payEmpty          = document.getElementById('payEmpty');
const payBody           = document.getElementById('payBody');
const payRateType       = document.getElementById('payRateType');
const payRateLabel      = document.getElementById('payRateLabel');
const payRate           = document.getElementById('payRate');
const payTax            = document.getElementById('payTax');
const payPension        = document.getElementById('payPension');
const payOther          = document.getElementById('payOther');
const paySaveBtn        = document.getElementById('paySaveBtn');
const calcHours         = document.getElementById('calcHours');
const calcGross         = document.getElementById('calcGross');
const calcTax           = document.getElementById('calcTax');
const calcPension       = document.getElementById('calcPension');
const calcOther         = document.getElementById('calcOther');
const calcNet           = document.getElementById('calcNet');

const closePeriodBtn = document.getElementById('closePeriodBtn');
const payHistoryList = document.getElementById('payHistoryList');

const probationCount = document.getElementById('probationCount');
const probationList  = document.getElementById('probationList');

const celebrateCard    = document.getElementById('celebrateCard');
const celebrateCount   = document.getElementById('celebrateCount');
const celebrateList    = document.getElementById('celebrateList');
const celebrateModalOverlay = document.getElementById('celebrateModalOverlay');
const celebrateModalClose   = document.getElementById('celebrateModalClose');
const celebrateModalList    = document.getElementById('celebrateModalList');
const celebrateModalSub     = document.getElementById('celebrateModalSub');

const closePeriodOverlay   = document.getElementById('closePeriodOverlay');
const closePeriodClose     = document.getElementById('closePeriodClose');
const closePeriodLabel     = document.getElementById('closePeriodLabel');
const closePeriodConfirm   = document.getElementById('closePeriodConfirm');
const closePeriodCancelBtn = document.getElementById('closePeriodCancelBtn');
const closePeriodApplyBtn  = document.getElementById('closePeriodApplyBtn');

const snapshotOverlay = document.getElementById('snapshotOverlay');
const snapshotClose   = document.getElementById('snapshotClose');
const snapshotTitle   = document.getElementById('snapshotTitle');
const snapshotSub     = document.getElementById('snapshotSub');
const snapshotList    = document.getElementById('snapshotList');
const exportAllSnapshotsBtn = document.getElementById('exportAllSnapshotsBtn');
const snapshotExportBtn     = document.getElementById('snapshotExportBtn');

const modalOverlay   = document.getElementById('modalOverlay');
const modalTitle     = document.getElementById('modalTitle');
const modalClose     = document.getElementById('modalClose');
const employeeForm   = document.getElementById('employeeForm');
const employeeId     = document.getElementById('employeeId');
const cancelBtn      = document.getElementById('cancelBtn');
const saveBtn        = document.getElementById('saveBtn');
const formError      = document.getElementById('formError');

const fieldName            = document.getElementById('fieldName');
const fieldNickname        = document.getElementById('fieldNickname');
const fieldTitleSelect     = document.getElementById('fieldTitleSelect');
const fieldTitleNew        = document.getElementById('fieldTitleNew');
const fieldTitleRemoveBtn  = document.getElementById('fieldTitleRemoveBtn');
const fieldDepartmentSelect= document.getElementById('fieldDepartmentSelect');
const fieldDepartmentNew   = document.getElementById('fieldDepartmentNew');
const fieldDepartmentRemoveBtn = document.getElementById('fieldDepartmentRemoveBtn');
const fieldManagerSelect   = document.getElementById('fieldManagerSelect');
const fieldStartDate       = document.getElementById('fieldStartDate');
const fieldProbationEnd    = document.getElementById('fieldProbationEnd');
const fieldTimeOffAllowance= document.getElementById('fieldTimeOffAllowance');
const fieldAbout           = document.getElementById('fieldAbout');
const fieldBirthday        = document.getElementById('fieldBirthday');
const fieldPronouns        = document.getElementById('fieldPronouns');
const fieldMarital         = document.getElementById('fieldMarital');
const fieldGender          = document.getElementById('fieldGender');
const fieldLocation        = document.getElementById('fieldLocation');
const fieldAddress         = document.getElementById('fieldAddress');
const fieldHobby           = document.getElementById('fieldHobby');
const fieldEmail           = document.getElementById('fieldEmail');
const fieldPhone           = document.getElementById('fieldPhone');

const fieldEmergencyName     = document.getElementById('fieldEmergencyName');
const fieldEmergencyRelation = document.getElementById('fieldEmergencyRelation');
const fieldEmergencyPhone    = document.getElementById('fieldEmergencyPhone');
const fieldEmergencyEmail    = document.getElementById('fieldEmergencyEmail');

const photoInput       = document.getElementById('photoInput');
const photoImg         = document.getElementById('photoImg');
const photoPlaceholder = document.getElementById('photoPlaceholder');
const photoRemoveBtn   = document.getElementById('photoRemoveBtn');
const photoBtnText     = document.getElementById('photoBtnText');

const deptModalOverlay = document.getElementById('deptModalOverlay');
const deptModalClose   = document.getElementById('deptModalClose');
const deptModalSub     = document.getElementById('deptModalSub');
const bulkDeptSelect   = document.getElementById('bulkDeptSelect');
const bulkDeptNew      = document.getElementById('bulkDeptNew');
const bulkDeptRemoveBtn= document.getElementById('bulkDeptRemoveBtn');
const deptModalError   = document.getElementById('deptModalError');
const deptCancelBtn    = document.getElementById('deptCancelBtn');
const deptApplyBtn     = document.getElementById('deptApplyBtn');

const removeListOverlay     = document.getElementById('removeListOverlay');
const removeListClose       = document.getElementById('removeListClose');
const removeListTitle       = document.getElementById('removeListTitle');
const removeListMessage     = document.getElementById('removeListMessage');
const removeFromListOnlyBtn = document.getElementById('removeFromListOnlyBtn');
const removeAndClearBtn     = document.getElementById('removeAndClearBtn');
const removeListCancelBtn   = document.getElementById('removeListCancelBtn');

const confirmOverlay   = document.getElementById('confirmOverlay');
const confirmClose     = document.getElementById('confirmClose');
const confirmTitle     = document.getElementById('confirmTitle');
const confirmMessage   = document.getElementById('confirmMessage');
const confirmPhraseLabel = document.getElementById('confirmPhraseLabel');
const confirmInput     = document.getElementById('confirmInput');
const confirmCancelBtn = document.getElementById('confirmCancelBtn');
const confirmApplyBtn  = document.getElementById('confirmApplyBtn');

const themeToggle      = document.getElementById('themeToggle');
const toastContainer   = document.getElementById('toastContainer');

const onboardingModalOverlay = document.getElementById('onboardingModalOverlay');
const onboardingModalClose   = document.getElementById('onboardingModalClose');
const onboardingModalBody    = document.getElementById('onboardingModalBody');
const onboardingModalSub     = document.getElementById('onboardingModalSub');
const onboardingCard         = document.getElementById('onboardingCard');
const onboardingList         = document.getElementById('onboardingList');
const onboardingCount        = document.getElementById('onboardingCount');
const onboardingResetAllBtn  = document.getElementById('onboardingResetAllBtn');

const onboardingTemplatesChips   = document.getElementById('onboardingTemplatesChips');
const onboardingNewTemplateBtn   = document.getElementById('onboardingNewTemplateBtn');
const onboardingTemplateEditOverlay = document.getElementById('onboardingTemplateEditOverlay');
const onboardingTemplateEditTitle = document.getElementById('onboardingTemplateEditTitle');
const onboardingTemplateEditClose = document.getElementById('onboardingTemplateEditClose');
const onboardingTemplateEditId    = document.getElementById('onboardingTemplateEditId');
const onboardingTemplateFieldName = document.getElementById('onboardingTemplateFieldName');
const onboardingTemplateItemsList = document.getElementById('onboardingTemplateItemsList');
const onboardingTemplateNewItem   = document.getElementById('onboardingTemplateNewItem');
const onboardingTemplateAddItemBtn= document.getElementById('onboardingTemplateAddItemBtn');
const onboardingTemplateEditError = document.getElementById('onboardingTemplateEditError');
const onboardingTemplateDeleteBtn = document.getElementById('onboardingTemplateDeleteBtn');
const onboardingTemplateEditCancelBtn = document.getElementById('onboardingTemplateEditCancelBtn');
const onboardingTemplateEditSaveBtn   = document.getElementById('onboardingTemplateEditSaveBtn');
const onboardingTemplateDeleteOverlay = document.getElementById('onboardingTemplateDeleteOverlay');
const onboardingTemplateDeleteClose   = document.getElementById('onboardingTemplateDeleteClose');
const onboardingTemplateDeleteMessage = document.getElementById('onboardingTemplateDeleteMessage');
const onboardingTemplateDeleteCancelBtn = document.getElementById('onboardingTemplateDeleteCancelBtn');
const onboardingTemplateDeleteApplyBtn  = document.getElementById('onboardingTemplateDeleteApplyBtn');

const orgChartCard       = document.getElementById('orgChartCard');
const orgChartSub        = document.getElementById('orgChartSub');
const orgChartPreview    = document.getElementById('orgChartPreview');
const orgChartPreviewScroll = document.getElementById('orgChartPreviewScroll');
const orgModalOverlay    = document.getElementById('orgModalOverlay');
const orgModalClose      = document.getElementById('orgModalClose');
const orgModalSub        = document.getElementById('orgModalSub');
const orgModalChart      = document.getElementById('orgModalChart');
const orgModalScroll     = document.getElementById('orgModalScroll');
const orgModalExpandAllBtn = document.getElementById('orgModalExpandAllBtn');
const orgModalCollapseAllBtn = document.getElementById('orgModalCollapseAllBtn');
const orgZoomOut         = document.getElementById('orgZoomOut');
const orgZoomIn          = document.getElementById('orgZoomIn');
const orgZoomLevel       = document.getElementById('orgZoomLevel');

const widgetStrip       = document.getElementById('widgetStrip');
const widgetStripTrack  = document.getElementById('widgetStripTrack');
const widgetStripLeft   = document.getElementById('widgetStripLeft');
const widgetStripRight  = document.getElementById('widgetStripRight');

const timeOffCard          = document.getElementById('timeOffCard');
const timeOffSub           = document.getElementById('timeOffSub');
const timeOffList          = document.getElementById('timeOffList');
const timeOffScroll        = document.getElementById('timeOffScroll');
const timeOffRequestBtn    = document.getElementById('timeOffRequestBtn');
const timeOffViewAll       = document.getElementById('timeOffViewAll');
const timeOffModalOverlay  = document.getElementById('timeOffModalOverlay');
const timeOffModalClose    = document.getElementById('timeOffModalClose');
const timeOffModalSub      = document.getElementById('timeOffModalSub');
const timeOffModalRequestBtn = document.getElementById('timeOffModalRequestBtn');
const timeOffTabs          = document.getElementById('timeOffTabs');
const timeOffTabContent    = document.getElementById('timeOffTabContent');
const timeOffPendingBadge  = document.getElementById('timeOffPendingBadge');
const timeOffRequestOverlay = document.getElementById('timeOffRequestOverlay');
const timeOffRequestClose   = document.getElementById('timeOffRequestClose');
const toEmployeeSelect      = document.getElementById('toEmployeeSelect');
const toType                = document.getElementById('toType');
const toStartDate           = document.getElementById('toStartDate');
const toEndDate             = document.getElementById('toEndDate');
const toReason              = document.getElementById('toReason');
const timeOffPreview        = document.getElementById('timeOffPreview');
const timeOffFormError      = document.getElementById('timeOffFormError');
const timeOffCancelBtn      = document.getElementById('timeOffCancelBtn');
const timeOffSubmitBtn      = document.getElementById('timeOffSubmitBtn');

const holidayCard        = document.getElementById('holidayCard');
const holidaySub         = document.getElementById('holidaySub');
const holidayList        = document.getElementById('holidayList');
const holidayCount       = document.getElementById('holidayCount');
const holidayAddBtn      = document.getElementById('holidayAddBtn');

const holidayModalOverlay = document.getElementById('holidayModalOverlay');
const holidayModalClose   = document.getElementById('holidayModalClose');
const holidayModalSub     = document.getElementById('holidayModalSub');
const holidayModalAddBtn  = document.getElementById('holidayModalAddBtn');
const holidayModalList    = document.getElementById('holidayModalList');

const holidayEditOverlay  = document.getElementById('holidayEditOverlay');
const holidayEditTitle    = document.getElementById('holidayEditTitle');
const holidayEditClose    = document.getElementById('holidayEditClose');
const holidayEditId       = document.getElementById('holidayEditId');
const holidayFieldName    = document.getElementById('holidayFieldName');
const holidayFieldDate    = document.getElementById('holidayFieldDate');
const holidayFieldCountry = document.getElementById('holidayFieldCountry');
const holidayFieldType    = document.getElementById('holidayFieldType');
const holidayFieldRepeat  = document.getElementById('holidayFieldRepeat');
const holidayEditError    = document.getElementById('holidayEditError');
const holidayEditCancelBtn= document.getElementById('holidayEditCancelBtn');
const holidayEditSaveBtn  = document.getElementById('holidayEditSaveBtn');

const holidayDeleteOverlay = document.getElementById('holidayDeleteOverlay');
const holidayDeleteClose   = document.getElementById('holidayDeleteClose');
const holidayDeleteMessage = document.getElementById('holidayDeleteMessage');
const holidayDeleteCancelBtn = document.getElementById('holidayDeleteCancelBtn');
const holidayDeleteApplyBtn  = document.getElementById('holidayDeleteApplyBtn');

const announceStrip        = document.getElementById('announceStrip');
const announceStripCount   = document.getElementById('announceStripCount');
const announceStripPinned  = document.getElementById('announceStripPinned');
const announceModalOverlay = document.getElementById('announceModalOverlay');
const announceModalClose   = document.getElementById('announceModalClose');
const announceModalSub     = document.getElementById('announceModalSub');
const announceModalAddBtn  = document.getElementById('announceModalAddBtn');
const announceModalList    = document.getElementById('announceModalList');
const announceEditOverlay  = document.getElementById('announceEditOverlay');
const announceEditTitle    = document.getElementById('announceEditTitle');
const announceEditClose    = document.getElementById('announceEditClose');
const announceEditId       = document.getElementById('announceEditId');
const announceFieldTitle   = document.getElementById('announceFieldTitle');
const announceFieldBody    = document.getElementById('announceFieldBody');
const announceFieldAuthor  = document.getElementById('announceFieldAuthor');
const announceFieldPinned  = document.getElementById('announceFieldPinned');
const announceEditError    = document.getElementById('announceEditError');
const announceEditCancelBtn= document.getElementById('announceEditCancelBtn');
const announceEditSaveBtn  = document.getElementById('announceEditSaveBtn');
const announceDeleteOverlay = document.getElementById('announceDeleteOverlay');
const announceDeleteClose   = document.getElementById('announceDeleteClose');
const announceDeleteMessage = document.getElementById('announceDeleteMessage');
const announceDeleteCancelBtn = document.getElementById('announceDeleteCancelBtn');
const announceDeleteApplyBtn  = document.getElementById('announceDeleteApplyBtn');

const kudosCard          = document.getElementById('kudosCard');
const kudosSub           = document.getElementById('kudosSub');
const kudosList          = document.getElementById('kudosList');
const kudosGiveBtn       = document.getElementById('kudosGiveBtn');
const kudosViewAll       = document.getElementById('kudosViewAll');
const kudosScroll        = document.getElementById('kudosScroll');
const kudosModalOverlay  = document.getElementById('kudosModalOverlay');
const kudosModalClose    = document.getElementById('kudosModalClose');
const kudosModalSub      = document.getElementById('kudosModalSub');
const kudosModalGiveBtn  = document.getElementById('kudosModalGiveBtn');
const kudosModalList     = document.getElementById('kudosModalList');
const kudosGiveOverlay   = document.getElementById('kudosGiveOverlay');
const kudosGiveTitle     = document.getElementById('kudosGiveTitle');
const kudosGiveClose     = document.getElementById('kudosGiveClose');
const kudosFieldFrom     = document.getElementById('kudosFieldFrom');
const kudosFieldTo       = document.getElementById('kudosFieldTo');
const kudosFieldMessage  = document.getElementById('kudosFieldMessage');
const kudosFieldBadge    = document.getElementById('kudosFieldBadge');
const kudosGiveError     = document.getElementById('kudosGiveError');
const kudosGiveCancelBtn = document.getElementById('kudosGiveCancelBtn');
const kudosGiveSaveBtn   = document.getElementById('kudosGiveSaveBtn');
const kudosDeleteOverlay = document.getElementById('kudosDeleteOverlay');
const kudosDeleteClose   = document.getElementById('kudosDeleteClose');
const kudosDeleteMessage = document.getElementById('kudosDeleteMessage');
const kudosDeleteCancelBtn = document.getElementById('kudosDeleteCancelBtn');
const kudosDeleteApplyBtn  = document.getElementById('kudosDeleteApplyBtn');

const notesModalOverlay = document.getElementById('notesModalOverlay');
const notesModalClose   = document.getElementById('notesModalClose');
const notesModalTitle   = document.getElementById('notesModalTitle');
const notesModalSub     = document.getElementById('notesModalSub');
const notesModalList    = document.getElementById('notesModalList');
const notesAddBtn       = document.getElementById('notesAddBtn');
const noteEditOverlay   = document.getElementById('noteEditOverlay');
const noteEditTitle     = document.getElementById('noteEditTitle');
const noteEditClose     = document.getElementById('noteEditClose');
const noteEditId        = document.getElementById('noteEditId');
const noteFieldType     = document.getElementById('noteFieldType');
const noteFieldDate     = document.getElementById('noteFieldDate');
const noteFieldBody     = document.getElementById('noteFieldBody');
const noteFieldPrivate  = document.getElementById('noteFieldPrivate');
const noteEditError     = document.getElementById('noteEditError');
const noteEditCancelBtn = document.getElementById('noteEditCancelBtn');
const noteEditSaveBtn   = document.getElementById('noteEditSaveBtn');
const noteDeleteOverlay = document.getElementById('noteDeleteOverlay');
const noteDeleteClose   = document.getElementById('noteDeleteClose');
const noteDeleteMessage = document.getElementById('noteDeleteMessage');
const noteDeleteCancelBtn = document.getElementById('noteDeleteCancelBtn');
const noteDeleteApplyBtn  = document.getElementById('noteDeleteApplyBtn');

const jobHistoryEditOverlay = document.getElementById('jobHistoryEditOverlay');
const jobHistoryEditTitle   = document.getElementById('jobHistoryEditTitle');
const jobHistoryEditClose   = document.getElementById('jobHistoryEditClose');
const jobHistoryEditId      = document.getElementById('jobHistoryEditId');
const jhFieldKind           = document.getElementById('jhFieldKind');
const jhFieldSummary        = document.getElementById('jhFieldSummary');
const jhFieldFrom           = document.getElementById('jhFieldFrom');
const jhFieldTo             = document.getElementById('jhFieldTo');
const jhFieldDate           = document.getElementById('jhFieldDate');
const jhFieldNotes          = document.getElementById('jhFieldNotes');
const jobHistoryEditError   = document.getElementById('jobHistoryEditError');
const jobHistoryEditCancelBtn = document.getElementById('jobHistoryEditCancelBtn');
const jobHistoryEditSaveBtn = document.getElementById('jobHistoryEditSaveBtn');
const jobHistoryDeleteOverlay = document.getElementById('jobHistoryDeleteOverlay');
const jobHistoryDeleteClose   = document.getElementById('jobHistoryDeleteClose');
const jobHistoryDeleteMessage = document.getElementById('jobHistoryDeleteMessage');
const jobHistoryDeleteCancelBtn = document.getElementById('jobHistoryDeleteCancelBtn');
const jobHistoryDeleteApplyBtn  = document.getElementById('jobHistoryDeleteApplyBtn');

const goalsCard          = document.getElementById('goalsCard');
const goalsSub           = document.getElementById('goalsSub');
const goalsList          = document.getElementById('goalsList');
const goalsAddBtn        = document.getElementById('goalsAddBtn');
const goalsViewAll       = document.getElementById('goalsViewAll');
const goalsScroll        = document.getElementById('goalsScroll');
const goalsModalOverlay  = document.getElementById('goalsModalOverlay');
const goalsModalClose    = document.getElementById('goalsModalClose');
const goalsModalSub      = document.getElementById('goalsModalSub');
const goalsModalAddBtn   = document.getElementById('goalsModalAddBtn');
const goalsModalList     = document.getElementById('goalsModalList');
const goalEditOverlay    = document.getElementById('goalEditOverlay');
const goalEditTitle      = document.getElementById('goalEditTitle');
const goalEditClose      = document.getElementById('goalEditClose');
const goalEditId         = document.getElementById('goalEditId');
const goalFieldOwner     = document.getElementById('goalFieldOwner');
const goalFieldTitle     = document.getElementById('goalFieldTitle');
const goalFieldDescription = document.getElementById('goalFieldDescription');
const goalFieldCategory  = document.getElementById('goalFieldCategory');
const goalFieldStatus    = document.getElementById('goalFieldStatus');
const goalFieldProgress  = document.getElementById('goalFieldProgress');
const goalFieldDue       = document.getElementById('goalFieldDue');
const goalEditError      = document.getElementById('goalEditError');
const goalEditCancelBtn  = document.getElementById('goalEditCancelBtn');
const goalEditSaveBtn    = document.getElementById('goalEditSaveBtn');
const goalDeleteOverlay  = document.getElementById('goalDeleteOverlay');
const goalDeleteClose    = document.getElementById('goalDeleteClose');
const goalDeleteMessage  = document.getElementById('goalDeleteMessage');
const goalDeleteCancelBtn = document.getElementById('goalDeleteCancelBtn');
const goalDeleteApplyBtn  = document.getElementById('goalDeleteApplyBtn');

const documentsModalOverlay = document.getElementById('documentsModalOverlay');
const documentsModalClose   = document.getElementById('documentsModalClose');
const documentsModalTitle   = document.getElementById('documentsModalTitle');
const documentsModalSub     = document.getElementById('documentsModalSub');
const documentsModalList    = document.getElementById('documentsModalList');
const documentsAddBtn       = document.getElementById('documentsAddBtn');
const documentsStorageBar   = document.getElementById('documentsStorageBar');
const documentUploadOverlay = document.getElementById('documentUploadOverlay');
const documentUploadTitle   = document.getElementById('documentUploadTitle');
const documentUploadClose   = document.getElementById('documentUploadClose');
const docFieldCategory      = document.getElementById('docFieldCategory');
const docFieldLabel         = document.getElementById('docFieldLabel');
const docUploadDrop         = document.getElementById('docUploadDrop');
const docFieldFile          = document.getElementById('docFieldFile');
const docUploadInner        = document.getElementById('docUploadInner');
const docUploadFile         = document.getElementById('docUploadFile');
const docUploadFilename     = document.getElementById('docUploadFilename');
const docUploadClear        = document.getElementById('docUploadClear');
const documentUploadError   = document.getElementById('documentUploadError');
const documentUploadCancelBtn = document.getElementById('documentUploadCancelBtn');
const documentUploadSaveBtn = document.getElementById('documentUploadSaveBtn');
const documentDeleteOverlay = document.getElementById('documentDeleteOverlay');
const documentDeleteClose   = document.getElementById('documentDeleteClose');
const documentDeleteMessage = document.getElementById('documentDeleteMessage');
const documentDeleteCancelBtn = document.getElementById('documentDeleteCancelBtn');
const documentDeleteApplyBtn  = document.getElementById('documentDeleteApplyBtn');

const confettiCanvas = document.getElementById('confettiCanvas');

const cmdkTrigger = document.getElementById('cmdkTrigger');
const cmdkOverlay = document.getElementById('cmdkOverlay');
const cmdkInput   = document.getElementById('cmdkInput');
const cmdkResults = document.getElementById('cmdkResults');

const statusPopover       = document.getElementById('statusPopover');
const statusPopoverInner  = document.getElementById('statusPopoverInner');
const statusPopoverCaret  = document.getElementById('statusPopoverCaret');

const activityTrigger       = document.getElementById('activityTrigger');
const activityModalOverlay  = document.getElementById('activityModalOverlay');
const activityModalClose    = document.getElementById('activityModalClose');
const activityModalSub      = document.getElementById('activityModalSub');
const activityTabs          = document.getElementById('activityTabs');
const activitySearchInput   = document.getElementById('activitySearchInput');
const activityList          = document.getElementById('activityList');
const activityExportBtn     = document.getElementById('activityExportBtn');
const activityClearBtn      = document.getElementById('activityClearBtn');
const activityClearOverlay  = document.getElementById('activityClearOverlay');
const activityClearClose    = document.getElementById('activityClearClose');
const activityClearCancelBtn= document.getElementById('activityClearCancelBtn');
const activityClearApplyBtn = document.getElementById('activityClearApplyBtn');

const trashTrigger         = document.getElementById('trashTrigger');
const trashTriggerBadge    = document.getElementById('trashTriggerBadge');
const trashModalOverlay    = document.getElementById('trashModalOverlay');
const trashModalClose      = document.getElementById('trashModalClose');
const trashModalSub        = document.getElementById('trashModalSub');
const trashEmptyBtn        = document.getElementById('trashEmptyBtn');
const trashList            = document.getElementById('trashList');
const trashEmpty           = document.getElementById('trashEmpty');
const trashPurgeOverlay    = document.getElementById('trashPurgeOverlay');
const trashPurgeClose      = document.getElementById('trashPurgeClose');
const trashPurgeMessage    = document.getElementById('trashPurgeMessage');
const trashPurgeConfirm    = document.getElementById('trashPurgeConfirm');
const trashPurgeCancelBtn  = document.getElementById('trashPurgeCancelBtn');
const trashPurgeApplyBtn   = document.getElementById('trashPurgeApplyBtn');
const trashEmptyOverlay    = document.getElementById('trashEmptyOverlay');
const trashEmptyClose      = document.getElementById('trashEmptyClose');
const trashEmptyMessage    = document.getElementById('trashEmptyMessage');
const trashEmptyConfirm    = document.getElementById('trashEmptyConfirm');
const trashEmptyCancelBtn  = document.getElementById('trashEmptyCancelBtn');
const trashEmptyApplyBtn   = document.getElementById('trashEmptyApplyBtn');

// PWA refs (optional — safe if missing)
const pwaOfflineBar = document.getElementById('pwaOfflineBar');
const installAppBtn = document.getElementById('installAppBtn');

// ==================== STATE ====================
let employees = [];
let departments = [];
let titles = [];
let snapshots = [];
let holidays = [];
let activityLog = [];
let announcements = [];
let kudos = [];
let notes = [];
let jobHistory = [];
let goals = [];
let documents = [];
let onboardingTemplates = [];
let trashEntries = [];
let editingPhotoDataUrl = null;
let searchTerm = '';
let sortMode = 'name';
let activeDept = '';
let activeStatus = '';
let selectedIds = new Set();
let selectMode = false;
let protectMode = false;
let pendingDeleteAction = null;
let currentDetailId = null;
let currentSnapshotId = null;
let tickInterval = null;
const expandedOnboardingIds = new Set();

let pendingListRemoval = null;

let cmdkOpen = false;
let cmdkQuery = '';
let cmdkItems = [];
let cmdkActiveIndex = 0;

const collapsedOrgIds = new Set();
let orgInitialRender = true;
let orgZoom = 1;

let stripDragging = false;
let stripDragStartX = 0;
let stripDragStartScroll = 0;
let stripDragMoved = false;

let timeOffActiveTab = 'balances';

let pendingHolidayDelete = null;
let pendingAnnounceDelete = null;
let pendingKudosDelete = null;
let notesModalEmployeeId = null;
let noteEditingEmployeeId = null;

let jobHistoryEditingEmployeeId = null;
let pendingJobHistoryDelete = null;

let goalEditingId = null;
let pendingGoalDelete = null;

let documentsModalEmployeeId = null;
let documentPendingFile = null;
let pendingDocumentDelete = null;

let templateEditingItems = [];
let pendingTemplateDeleteId = null;

let activityActiveCat = 'all';
let activitySearchTerm = '';

let pendingTrashPurge = null;
let pendingTrashEmpty = false;

let editingTitleOriginalValue = '';
let editingDepartmentOriginalValue = '';

const birthdayConfettiFired = new Set();

let statusPopoverEmpId = null;
let statusPopoverAnchor = null;

// ==================== ACTIVITY LOG ====================
function loadActivity() {
    try {
        const raw = localStorage.getItem(ACTIVITY_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) { return []; }
}
function saveActivity() {
    try {
        if (activityLog.length > ACTIVITY_MAX) {
            activityLog = activityLog.slice(-ACTIVITY_MAX);
        }
        localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activityLog));
    } catch (e) {}
}
function logActivity(action, targetId, meta) {
    const entry = {
        id: 'act_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
        at: Date.now(),
        action: String(action || 'unknown'),
        targetId: targetId ? String(targetId) : null,
        meta: meta && typeof meta === 'object' ? meta : {}
    };
    activityLog.push(entry);
    saveActivity();
    if (activityModalOverlay && activityModalOverlay.classList.contains('active')) {
        renderActivityList();
        updateActivityModalSub();
    }
    return entry;
}

// ==================== DEMO LOCK HELPER ====================
function demoBlocked(actionLabel = 'This action') {
    if (!DEMO_MODE) return false;
    toast(`${actionLabel} is disabled in demo mode`, 'warning', 3000);
    return true;
}

// ==================== THEME ====================
function setTheme(theme, animate = false) {
    if (animate) {
        document.documentElement.classList.add('theme-transitioning');
        requestAnimationFrame(() => {
            document.documentElement.setAttribute('data-theme', theme);
        });
        clearTimeout(setTheme._timer);
        setTheme._timer = setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
        }, THEME_TRANSITION_MS);
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
}
themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
});

// ==================== PROTECT MODE ====================
function setProtectMode(on) {
    protectMode = on;
    protectToggle.classList.toggle('active', on);
    protectToggle.title = on ? 'Protect Mode ON — deletes are locked' : 'Protect Mode OFF — deletes allowed';
    protectBanner.style.display = on ? 'block' : 'none';
    try { localStorage.setItem(PROTECT_KEY, on ? '1' : '0'); } catch (e) {}
    render();
}
protectToggle.addEventListener('click', () => {
    if (demoBlocked('Protect Mode toggle')) return;
    const next = !protectMode;
    setProtectMode(next);
    toast(next ? 'Protect Mode ON — deletes are locked' : 'Protect Mode OFF — deletes allowed',
          next ? 'success' : 'warning', 3000);
});

// ==================== TOASTS ====================
function toast(message, type = 'info', duration = 3500) {
    const el = document.createElement('div');
    el.className = 'toast' + (type !== 'info' ? ' ' + type : '');
    const icon = type === 'error' ? '⚠️' : type === 'success' ? '🔒' : type === 'warning' ? '⚡' : 'ℹ️';
    el.innerHTML = `<span>${icon}</span><span>${escapeHtml(message)}</span>`;

    const existing = Array.from(toastContainer.children);
    if (existing.length >= TOAST_MAX_VISIBLE) {
        const oldest = existing[0];
        oldest.classList.add('leaving');
        setTimeout(() => oldest.remove(), 300);
    }

    toastContainer.appendChild(el);
    setTimeout(() => {
        el.classList.add('leaving');
        setTimeout(() => el.remove(), 300);
    }, duration);
}

// ==================== CONFETTI ====================
let confettiActive = false;
let confettiParticles = [];
let confettiRAF = null;
let confettiCtx = null;

function fireConfetti(durationMs = 2400) {
    if (!confettiCanvas) return;
    confettiCtx = confettiCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    confettiCanvas.width = window.innerWidth * dpr;
    confettiCanvas.height = window.innerHeight * dpr;
    confettiCanvas.style.width = window.innerWidth + 'px';
    confettiCanvas.style.height = window.innerHeight + 'px';
    confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    confettiCanvas.classList.add('active');
    confettiActive = true;
    confettiParticles = [];

    const colors = ['#6366f1', '#8b5cf6', '#22c55e', '#f97316', '#eab308', '#ec4899', '#38bdf8', '#f43f5e'];
    const W = window.innerWidth;
    const isLong = durationMs > 8000;
    const count = isLong ? Math.min(260, Math.round(W / 6)) : Math.min(180, Math.round(W / 8));

    const spawn = (n) => {
        for (let i = 0; i < n; i++) {
            confettiParticles.push({
                x: Math.random() * W,
                y: -20 - Math.random() * 200,
                vx: (Math.random() - 0.5) * 3,
                vy: 2 + Math.random() * 4,
                size: 6 + Math.random() * 8,
                color: colors[Math.floor(Math.random() * colors.length)],
                rot: Math.random() * Math.PI * 2,
                vr: (Math.random() - 0.5) * 0.3,
                life: 0,
                maxLife: 180 + Math.random() * 120
            });
        }
    };

    spawn(count);

    const start = performance.now();
    const spawnWindow = Math.min(durationMs * 0.7, 12000);
    let lastSpawn = 0;

    const tick = (now) => {
        if (!confettiActive) return;
        const elapsed = now - start;
        const H = window.innerHeight;
        const W2 = window.innerWidth;
        confettiCtx.clearRect(0, 0, W2, H);

        if (isLong && elapsed < spawnWindow && now - lastSpawn > 220) {
            spawn(Math.round(count * 0.12));
            lastSpawn = now;
        }

        confettiParticles = confettiParticles.filter(p => p.y < H + 60);

        const alphaMul = elapsed > durationMs - 3000
            ? Math.max(0, (durationMs - elapsed) / 3000)
            : 1;

        confettiParticles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.06;
            p.vx *= 0.995;
            p.rot += p.vr;
            p.life++;

            confettiCtx.save();
            confettiCtx.translate(p.x, p.y);
            confettiCtx.rotate(p.rot);
            confettiCtx.globalAlpha = Math.max(0, alphaMul);
            confettiCtx.fillStyle = p.color;
            confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
            confettiCtx.restore();
        });

        if (elapsed < durationMs) {
            confettiRAF = requestAnimationFrame(tick);
        } else {
            confettiStop();
        }
    };
    confettiRAF = requestAnimationFrame(tick);
}
function confettiStop() {
    confettiActive = false;
    if (confettiRAF) cancelAnimationFrame(confettiRAF);
    confettiRAF = null;
    if (confettiCtx) confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    if (confettiCanvas) confettiCanvas.classList.remove('active');
}

// ==================== CONFIRM DIALOG ====================
function openConfirm({ title, message, phrase, onConfirm }) {
    confirmTitle.textContent = title;
    confirmMessage.textContent = message;
    confirmPhraseLabel.textContent = phrase;
    confirmInput.value = '';
    confirmInput.placeholder = phrase;
    confirmApplyBtn.disabled = true;
    pendingDeleteAction = onConfirm;
    confirmOverlay.classList.add('active');
    setTimeout(() => confirmInput.focus(), 120);
}
function closeConfirm() {
    confirmOverlay.classList.remove('active');
    confirmInput.value = '';
    pendingDeleteAction = null;
}
confirmInput.addEventListener('input', () => {
    const expected = confirmPhraseLabel.textContent.trim();
    const typed = confirmInput.value.trim();
    confirmApplyBtn.disabled = typed !== expected;
});
confirmApplyBtn.addEventListener('click', () => {
    if (confirmApplyBtn.disabled) return;
    const action = pendingDeleteAction;
    closeConfirm();
    if (typeof action === 'function') action();
});
confirmClose.addEventListener('click', closeConfirm);
confirmCancelBtn.addEventListener('click', closeConfirm);
confirmOverlay.addEventListener('click', (e) => {
    if (e.target === confirmOverlay) closeConfirm();
});

// ==================== REMOVE TITLE / DEPARTMENT MODAL ====================
function openRemoveListModal(type, value) {
    if (demoBlocked('Removing titles/departments')) return;
    pendingListRemoval = { type, value };
    const isTitle = type === 'title';
    removeListTitle.textContent = isTitle ? 'Remove job title' : 'Remove department';
    removeListMessage.textContent = `Remove "${value}" from your list of ${isTitle ? 'job titles' : 'departments'}? Choose how:`;
    removeListOverlay.classList.add('active');
}
function closeRemoveListModal() {
    removeListOverlay.classList.remove('active');
    pendingListRemoval = null;
}
removeListClose.addEventListener('click', closeRemoveListModal);
removeListCancelBtn.addEventListener('click', closeRemoveListModal);
removeListOverlay.addEventListener('click', (e) => {
    if (e.target === removeListOverlay) closeRemoveListModal();
});
removeFromListOnlyBtn.addEventListener('click', () => {
    if (!pendingListRemoval) return;
    const { type, value } = pendingListRemoval;
    if (type === 'title') {
        titles = titles.filter(t => t !== value);
        saveArray(TITLES_KEY, titles);
        refreshTitleDropdown();
        if (fieldTitleSelect.value === value) fieldTitleSelect.value = '';
    } else {
        departments = departments.filter(d => d !== value);
        saveArray(DEPTS_KEY, departments);
        refreshDepartmentDropdown();
        refreshBulkDeptDropdown();
        if (fieldDepartmentSelect.value === value) fieldDepartmentSelect.value = '';
        if (bulkDeptSelect.value === value) bulkDeptSelect.value = '';
    }
    closeRemoveListModal();
    updateComboRemoveButtons();
    toast(`Removed "${value}" from the list`, 'success');
});
removeAndClearBtn.addEventListener('click', () => {
    if (!pendingListRemoval) return;
    const { type, value } = pendingListRemoval;
    const isTitle = type === 'title';
    const affected = employees.filter(e => (isTitle ? e.title : e.department) === value);
    closeRemoveListModal();
    openConfirm({
        title: 'Confirm removal',
        message: `This will remove "${value}" from your list AND clear it from ${affected.length} employee${affected.length !== 1 ? 's' : ''}. Those employees will show "Not provided". This cannot be undone.`,
        phrase: 'REMOVE',
        onConfirm: () => {
            if (isTitle) {
                titles = titles.filter(t => t !== value);
                saveArray(TITLES_KEY, titles);
                employees.forEach(e => { if (e.title === value) e.title = ''; });
                refreshTitleDropdown();
                if (fieldTitleSelect.value === value) fieldTitleSelect.value = '';
            } else {
                departments = departments.filter(d => d !== value);
                saveArray(DEPTS_KEY, departments);
                employees.forEach(e => { if (e.department === value) e.department = ''; });
                refreshDepartmentDropdown();
                refreshBulkDeptDropdown();
                if (fieldDepartmentSelect.value === value) fieldDepartmentSelect.value = '';
                if (bulkDeptSelect.value === value) bulkDeptSelect.value = '';
            }
            saveEmployees();
            render();
            updateComboRemoveButtons();
            toast(`Removed "${value}" and cleared it from ${affected.length} employee${affected.length !== 1 ? 's' : ''}`, 'success');
        }
    });
});

// ==================== COMBO EDIT (pencil) BUTTONS ====================
function injectComboEditButtons() {
    if (fieldTitleRemoveBtn && fieldTitleRemoveBtn.parentElement && !document.getElementById('fieldTitleEditBtn')) {
        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'combo-remove-btn';
        editBtn.id = 'fieldTitleEditBtn';
        editBtn.title = 'Rename this job title';
        editBtn.setAttribute('aria-label', 'Rename title');
        editBtn.style.display = 'none';
        editBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
        fieldTitleRemoveBtn.parentElement.insertBefore(editBtn, fieldTitleRemoveBtn);
        editBtn.addEventListener('click', () => startEditTitle());
    }
    if (fieldDepartmentRemoveBtn && fieldDepartmentRemoveBtn.parentElement && !document.getElementById('fieldDepartmentEditBtn')) {
        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'combo-remove-btn';
        editBtn.id = 'fieldDepartmentEditBtn';
        editBtn.title = 'Rename this department';
        editBtn.setAttribute('aria-label', 'Rename department');
        editBtn.style.display = 'none';
        editBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
        fieldDepartmentRemoveBtn.parentElement.insertBefore(editBtn, fieldDepartmentRemoveBtn);
        editBtn.addEventListener('click', () => startEditDepartment());
    }
}

function startEditTitle() {
    if (demoBlocked('Renaming job titles')) return;
    const current = fieldTitleSelect.value;
    if (!current || current === '__add_new__') return;
    editingTitleOriginalValue = current;

    const comboWrap = fieldTitleSelect.closest('.combo-wrap');
    if (!comboWrap) return;

    const comboRow = comboWrap.querySelector('.combo-row');
    if (comboRow) comboRow.style.display = 'none';
    if (fieldTitleNew) { fieldTitleNew.style.display = 'none'; fieldTitleNew.value = ''; }

    const existing = comboWrap.querySelector('.combo-edit-row');
    if (existing) existing.remove();

    const editRow = document.createElement('div');
    editRow.className = 'combo-row combo-edit-row';
    editRow.style.marginTop = '0';
    editRow.innerHTML = `
        <input type="text" class="new-input" id="fieldTitleEditInput" value="${escapeHtml(current)}" placeholder="Rename title…" style="display:block; flex:1;">
        <button type="button" class="combo-remove-btn" id="fieldTitleEditSave" title="Save" aria-label="Save" style="border-color: var(--accent-border); color: var(--accent-text);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
        <button type="button" class="combo-remove-btn" id="fieldTitleEditCancel" title="Cancel" aria-label="Cancel">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
    `;
    comboWrap.appendChild(editRow);

    const input = editRow.querySelector('#fieldTitleEditInput');
    const saveBtn = editRow.querySelector('#fieldTitleEditSave');
    const cancelBtn = editRow.querySelector('#fieldTitleEditCancel');

    setTimeout(() => { input.focus(); input.select(); }, 50);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); saveEditedTitle(); }
        else if (e.key === 'Escape') { e.preventDefault(); cancelEditTitle(); }
    });
    saveBtn.addEventListener('click', saveEditedTitle);
    cancelBtn.addEventListener('click', cancelEditTitle);
}

function saveEditedTitle() {
    const input = document.getElementById('fieldTitleEditInput');
    if (!input) return;
    const newValue = input.value.trim();
    const oldValue = editingTitleOriginalValue;
    if (!newValue) { toast('Title cannot be empty', 'warning'); input.focus(); return; }
    if (newValue === oldValue) { cancelEditTitle(); return; }
    const dup = titles.find(t => t.toLowerCase() === newValue.toLowerCase() && t !== oldValue);
    if (dup) {
        toast(`A title with that name already exists: "${dup}"`, 'warning', 3500);
        input.focus();
        return;
    }
    titles = titles.map(t => t === oldValue ? newValue : t);
    titles.sort((a, b) => a.localeCompare(b));
    saveArray(TITLES_KEY, titles);
    let affected = 0;
    employees.forEach(e => { if (e.title === oldValue) { e.title = newValue; affected++; } });
    if (affected > 0) saveEmployees();
    logActivity('title.rename', null, { label: `"${oldValue}" → "${newValue}"`, affected });
    cancelEditTitle();
    refreshTitleDropdown();
    fieldTitleSelect.value = newValue;
    updateComboRemoveButtons();
    render();
    if (currentDetailId) {
        const emp = employees.find(e => e.id === currentDetailId);
        if (emp) renderDetailPanel(emp);
    }
    toast(`Renamed "${oldValue}" → "${newValue}"${affected > 0 ? ` · updated ${affected} employee${affected !== 1 ? 's' : ''}` : ''}`, 'success', 3500);
}

function cancelEditTitle() {
    const comboWrap = fieldTitleSelect.closest('.combo-wrap');
    if (!comboWrap) return;
    const editRow = comboWrap.querySelector('.combo-edit-row');
    if (editRow) editRow.remove();
    const comboRow = comboWrap.querySelector('.combo-row');
    if (comboRow) comboRow.style.display = '';
    editingTitleOriginalValue = '';
    updateComboRemoveButtons();
}

function startEditDepartment() {
    if (demoBlocked('Renaming departments')) return;
    const current = fieldDepartmentSelect.value;
    if (!current || current === '__add_new__') return;
    editingDepartmentOriginalValue = current;

    const comboWrap = fieldDepartmentSelect.closest('.combo-wrap');
    if (!comboWrap) return;

    const comboRow = comboWrap.querySelector('.combo-row');
    if (comboRow) comboRow.style.display = 'none';
    if (fieldDepartmentNew) { fieldDepartmentNew.style.display = 'none'; fieldDepartmentNew.value = ''; }

    const existing = comboWrap.querySelector('.combo-edit-row');
    if (existing) existing.remove();

    const editRow = document.createElement('div');
    editRow.className = 'combo-row combo-edit-row';
    editRow.innerHTML = `
        <input type="text" class="new-input" id="fieldDepartmentEditInput" value="${escapeHtml(current)}" placeholder="Rename department…" style="display:block; flex:1;">
        <button type="button" class="combo-remove-btn" id="fieldDepartmentEditSave" title="Save" aria-label="Save" style="border-color: var(--accent-border); color: var(--accent-text);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
        <button type="button" class="combo-remove-btn" id="fieldDepartmentEditCancel" title="Cancel" aria-label="Cancel">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
    `;
    comboWrap.appendChild(editRow);

    const input = editRow.querySelector('#fieldDepartmentEditInput');
    const saveBtn = editRow.querySelector('#fieldDepartmentEditSave');
    const cancelBtn = editRow.querySelector('#fieldDepartmentEditCancel');

    setTimeout(() => { input.focus(); input.select(); }, 50);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); saveEditedDepartment(); }
        else if (e.key === 'Escape') { e.preventDefault(); cancelEditDepartment(); }
    });
    saveBtn.addEventListener('click', saveEditedDepartment);
    cancelBtn.addEventListener('click', cancelEditDepartment);
}

function saveEditedDepartment() {
    const input = document.getElementById('fieldDepartmentEditInput');
    if (!input) return;
    const newValue = input.value.trim();
    const oldValue = editingDepartmentOriginalValue;
    if (!newValue) { toast('Department cannot be empty', 'warning'); input.focus(); return; }
    if (newValue === oldValue) { cancelEditDepartment(); return; }
    const dup = departments.find(d => d.toLowerCase() === newValue.toLowerCase() && d !== oldValue);
    if (dup) {
        toast(`A department with that name already exists: "${dup}"`, 'warning', 3500);
        input.focus();
        return;
    }
    departments = departments.map(d => d === oldValue ? newValue : d);
    departments.sort((a, b) => a.localeCompare(b));
    saveArray(DEPTS_KEY, departments);
    let affected = 0;
    employees.forEach(e => { if (e.department === oldValue) { e.department = newValue; affected++; } });
    if (affected > 0) saveEmployees();
    logActivity('department.rename', null, { label: `"${oldValue}" → "${newValue}"`, affected });
    cancelEditDepartment();
    refreshDepartmentDropdown();
    refreshBulkDeptDropdown();
    fieldDepartmentSelect.value = newValue;
    updateComboRemoveButtons();
    render();
    if (currentDetailId) {
        const emp = employees.find(e => e.id === currentDetailId);
        if (emp) renderDetailPanel(emp);
    }
    toast(`Renamed "${oldValue}" → "${newValue}"${affected > 0 ? ` · updated ${affected} employee${affected !== 1 ? 's' : ''}` : ''}`, 'success', 3500);
}

function cancelEditDepartment() {
    const comboWrap = fieldDepartmentSelect.closest('.combo-wrap');
    if (!comboWrap) return;
    const editRow = comboWrap.querySelector('.combo-edit-row');
    if (editRow) editRow.remove();
    const comboRow = comboWrap.querySelector('.combo-row');
    if (comboRow) comboRow.style.display = '';
    editingDepartmentOriginalValue = '';
    updateComboRemoveButtons();
}

function updateComboRemoveButtons() {
    const titleEditBtn = document.getElementById('fieldTitleEditBtn');
    if (fieldTitleRemoveBtn) {
        const v = fieldTitleSelect.value;
        const show = (v && v !== '__add_new__') ? 'flex' : 'none';
        fieldTitleRemoveBtn.style.display = show;
    }
    if (titleEditBtn) {
        const v = fieldTitleSelect.value;
        const show = (v && v !== '__add_new__') ? 'flex' : 'none';
        titleEditBtn.style.display = show;
    }
    const deptEditBtn = document.getElementById('fieldDepartmentEditBtn');
    if (fieldDepartmentRemoveBtn) {
        const v = fieldDepartmentSelect.value;
        const show = (v && v !== '__add_new__') ? 'flex' : 'none';
        fieldDepartmentRemoveBtn.style.display = show;
    }
    if (deptEditBtn) {
        const v = fieldDepartmentSelect.value;
        const show = (v && v !== '__add_new__') ? 'flex' : 'none';
        deptEditBtn.style.display = show;
    }
    if (bulkDeptRemoveBtn) {
        const v = bulkDeptSelect.value;
        bulkDeptRemoveBtn.style.display = (v && v !== '__add_new__') ? 'flex' : 'none';
    }
}

fieldTitleRemoveBtn.addEventListener('click', () => {
    const v = fieldTitleSelect.value;
    if (!v || v === '__add_new__') return;
    openRemoveListModal('title', v);
});
fieldDepartmentRemoveBtn.addEventListener('click', () => {
    const v = fieldDepartmentSelect.value;
    if (!v || v === '__add_new__') return;
    openRemoveListModal('department', v);
});
bulkDeptRemoveBtn.addEventListener('click', () => {
    const v = bulkDeptSelect.value;
    if (!v || v === '__add_new__') return;
    openRemoveListModal('department', v);
});

// ==================== STORAGE ====================
function loadArray(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback.slice();
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : fallback.slice();
    } catch (e) { return fallback.slice(); }
}
function saveArray(key, arr) {
    try { localStorage.setItem(key, JSON.stringify(arr)); } catch (e) {}
}
function defaultTimeOff() {
    return { allowance: DEFAULT_TIMEOFF_ALLOWANCE, requests: [] };
}
function defaultEmergency() {
    return { name: '', relation: '', phone: '', email: '' };
}
function normalizeEmergency(raw) {
    if (!raw || typeof raw !== 'object') return defaultEmergency();
    return {
        name: typeof raw.name === 'string' ? raw.name : '',
        relation: typeof raw.relation === 'string' ? raw.relation : '',
        phone: typeof raw.phone === 'string' ? raw.phone : '',
        email: typeof raw.email === 'string' ? raw.email : ''
    };
}
function hasEmergencyInfo(em) {
    if (!em) return false;
    return !!(em.name || em.relation || em.phone || em.email);
}
function loadEmployees() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.map(e => {
            const migratedLog = Array.isArray(e.timeLog)
                ? e.timeLog.map(s => ({ ...s, status: s.status || 'production' }))
                : [];
            let migratedActive = null;
            if (e.activeSession && typeof e.activeSession.start === 'number') {
                migratedActive = {
                    start: e.activeSession.start,
                    status: e.activeSession.status || 'production'
                };
            }
            const timeOff = e.timeOff && typeof e.timeOff === 'object'
                ? {
                    allowance: typeof e.timeOff.allowance === 'number' ? e.timeOff.allowance : DEFAULT_TIMEOFF_ALLOWANCE,
                    requests: Array.isArray(e.timeOff.requests) ? e.timeOff.requests : []
                  }
                : defaultTimeOff();
            let onboarding = null;
            if (e.onboarding && typeof e.onboarding === 'object') {
                onboarding = {
                    startedAt: typeof e.onboarding.startedAt === 'number' ? e.onboarding.startedAt : Date.now(),
                    targetDate: typeof e.onboarding.targetDate === 'string' ? e.onboarding.targetDate : '',
                    items: Array.isArray(e.onboarding.items)
                        ? e.onboarding.items.map(i => ({
                            id: i.id || ('ob_' + Math.random().toString(36).slice(2, 9)),
                            label: String(i.label || ''),
                            done: !!i.done,
                            doneAt: i.doneAt || null
                          })).filter(i => i.label)
                        : []
                };
                if (onboarding.items.length === 0) onboarding = null;
            }
            return {
                ...e,
                status: e.status || DEFAULT_STATUS,
                timeLog: migratedLog,
                activeSession: migratedActive,
                probationEnd: e.probationEnd || '',
                pay: e.pay && typeof e.pay === 'object' ? e.pay : null,
                onboarding: onboarding,
                managerId: e.managerId || null,
                timeOff: timeOff,
                emergency: normalizeEmergency(e.emergency)
            };
        });
    } catch (e) { return []; }
}
function saveEmployees() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(employees)); }
    catch (e) { toast('Could not save — storage full or blocked.', 'error'); }
}
function loadSnapshots() { return loadArray(SNAPSHOTS_KEY, []); }
function saveSnapshots() { saveArray(SNAPSHOTS_KEY, snapshots); }
function addToList(list, value) {
    const clean = value.trim();
    if (!clean) return list;
    const exists = list.some(x => x.toLowerCase() === clean.toLowerCase());
    if (exists) return list;
    return [...list, clean].sort((a, b) => a.localeCompare(b));
}

// ==================== TRASH STORAGE ====================
function loadTrash() {
    try {
        const raw = localStorage.getItem(TRASH_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter(t => t && typeof t === 'object' && t.id && t.entityType && t.snapshot);
    } catch (e) { return []; }
}
function saveTrash() {
    try {
        if (trashEntries.length > TRASH_MAX) {
            trashEntries = trashEntries
                .slice()
                .sort((a, b) => (b.deletedAt || 0) - (a.deletedAt || 0))
                .slice(0, TRASH_MAX);
        }
        localStorage.setItem(TRASH_KEY, JSON.stringify(trashEntries));
    } catch (e) { toast('Could not save trash — storage full.', 'error'); }
}
function uidTrash() {
    return 'trash_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function purgeExpiredTrash() {
    const now = Date.now();
    const before = trashEntries.length;
    trashEntries = trashEntries.filter(t => (t.purgeAt || 0) > now);
    const removed = before - trashEntries.length;
    if (removed > 0) {
        saveTrash();
        return removed;
    }
    return 0;
}
function trashEntity(entityType, snapshot, label, subLabel, relatedSnapshots) {
    if (!entityType || !snapshot) return null;
    const now = Date.now();
    const entry = {
        id: uidTrash(),
        entityType: String(entityType),
        label: String(label || 'Untitled'),
        subLabel: typeof subLabel === 'string' ? subLabel : '',
        snapshot: snapshot,
        relatedSnapshots: relatedSnapshots && typeof relatedSnapshots === 'object' ? relatedSnapshots : null,
        deletedAt: now,
        purgeAt: now + TRASH_TTL_MS
    };
    trashEntries.unshift(entry);
    saveTrash();
    updateTrashBadge();
    return entry;
}
function daysUntilTrashPurge(entry) {
    if (!entry || !entry.purgeAt) return 0;
    const ms = entry.purgeAt - Date.now();
    return Math.max(0, Math.ceil(ms / 86400000));
}
function trashEntryIcon(entityType) {
    switch (entityType) {
        case 'employee':     return '👤';
        case 'jobhistory':   return '🏷️';
        case 'goal':         return '🎯';
        case 'document':     return '📄';
        case 'announcement': return '📢';
        case 'holiday':      return '📅';
        case 'timeoff':      return '🌴';
        default:             return '📦';
    }
}
function trashEntryLabel(entityType) {
    switch (entityType) {
        case 'employee':     return 'Employee';
        case 'jobhistory':   return 'Job history';
        case 'goal':         return 'Goal';
        case 'document':     return 'Document';
        case 'announcement': return 'Announcement';
        case 'holiday':      return 'Holiday';
        case 'timeoff':      return 'Time off request';
        default:             return 'Item';
    }
}
function trashParentMissing(entry) {
    if (!entry) return false;
    const t = entry.entityType;
    if (t === 'employee') return false;
    const empId = entry.snapshot && entry.snapshot.employeeId;
    if (!empId) return false;
    return !employees.some(e => e.id === empId);
}
function findTrash(id) {
    return trashEntries.find(t => t.id === id) || null;
}

function restoreFromTrash(id) {
    if (demoBlocked('Restoring items')) return;
    const entry = findTrash(id);
    if (!entry) return;

    if (trashParentMissing(entry)) {
        toast('Cannot restore — the employee this belongs to is also deleted.', 'warning', 4000);
        return;
    }

    switch (entry.entityType) {
        case 'employee': {
            const emp = entry.snapshot;
            if (!emp || !emp.id) return;
            if (employees.some(e => e.id === emp.id)) {
                toast('That employee already exists.', 'warning');
                return;
            }
            employees.push(emp);
            saveEmployees();
            const rel = entry.relatedSnapshots || {};
            if (Array.isArray(rel.jobHistory)) {
                rel.jobHistory.forEach(h => {
                    if (!jobHistory.some(x => x.id === h.id)) jobHistory.push(h);
                });
                saveJobHistory();
            }
            if (Array.isArray(rel.goals)) {
                rel.goals.forEach(g => {
                    if (!goals.some(x => x.id === g.id)) goals.push(g);
                });
                saveGoals();
            }
            if (Array.isArray(rel.documents)) {
                rel.documents.forEach(d => {
                    if (!documents.some(x => x.id === d.id)) documents.push(d);
                });
                saveDocuments();
            }
            const timeoffCount = Array.isArray(rel.timeOffRequests) ? rel.timeOffRequests.length : 0;
            logActivity('employee.restore', emp.id, { label: emp.name });
            render();
            toast(`Restored ${emp.name}${timeoffCount > 0 ? ` + ${timeoffCount} time off request${timeoffCount === 1 ? '' : 's'}` : ''}`, 'success', 3200);
            break;
        }
        case 'jobhistory': {
            const h = entry.snapshot;
            if (!h || !h.id) return;
            if (jobHistory.some(x => x.id === h.id)) { toast('Already exists', 'warning'); return; }
            jobHistory.push(h);
            saveJobHistory();
            logActivity('jobhistory.restore', h.id, { label: h.summary || '' });
            if (currentDetailId === h.employeeId) {
                const emp = findEmployee(h.employeeId);
                if (emp) renderDetailPanel(emp);
            }
            toast(`Restored "${h.summary || 'entry'}"`, 'success');
            break;
        }
        case 'goal': {
            const g = entry.snapshot;
            if (!g || !g.id) return;
            if (goals.some(x => x.id === g.id)) { toast('Already exists', 'warning'); return; }
            goals.push(g);
            saveGoals();
            logActivity('goal.restore', g.id, { label: g.title || '' });
            renderGoals();
            if (goalsModalOverlay && goalsModalOverlay.classList.contains('active')) renderGoalsModal();
            toast(`Restored "${g.title || 'goal'}"`, 'success');
            break;
        }
        case 'document': {
            const d = entry.snapshot;
            if (!d || !d.id) return;
            if (documents.some(x => x.id === d.id)) { toast('Already exists', 'warning'); return; }
            documents.push(d);
            saveDocuments();
            logActivity('document.restore', d.id, { label: d.name || '' });
            if (documentsModalOverlay && documentsModalOverlay.classList.contains('active')) renderDocumentsModal();
            if (currentDetailId === d.employeeId) {
                const emp = findEmployee(d.employeeId);
                if (emp) renderDetailPanel(emp);
            }
            toast(`Restored "${d.label || d.name || 'document'}"`, 'success');
            break;
        }
        case 'announcement': {
            const a = entry.snapshot;
            if (!a || !a.id) return;
            if (announcements.some(x => x.id === a.id)) { toast('Already exists', 'warning'); return; }
            announcements.push(a);
            saveAnnouncements();
            logActivity('announce.restore', a.id, { label: a.title || '' });
            renderAnnouncements();
            if (announceModalOverlay && announceModalOverlay.classList.contains('active')) renderAnnounceModal();
            toast(`Restored "${a.title || 'announcement'}"`, 'success');
            break;
        }
        case 'holiday': {
            const h = entry.snapshot;
            if (!h || !h.id) return;
            if (holidays.some(x => x.id === h.id)) { toast('Already exists', 'warning'); return; }
            holidays.push(h);
            saveHolidays();
            logActivity('holiday.restore', h.id, { label: h.name || '' });
            renderHolidays();
            if (holidayModalOverlay && holidayModalOverlay.classList.contains('active')) renderHolidayModal();
            toast(`Restored "${h.name || 'holiday'}"`, 'success');
            break;
        }
        case 'timeoff': {
            const r = entry.snapshot;
            if (!r || !r.id || !r.employeeId) return;
            const emp = findEmployee(r.employeeId);
            if (!emp) { toast('Cannot restore — employee missing.', 'warning'); return; }
            if (!emp.timeOff) emp.timeOff = defaultTimeOff();
            if (!Array.isArray(emp.timeOff.requests)) emp.timeOff.requests = [];
            if (emp.timeOff.requests.some(x => x.id === r.id)) { toast('Already exists', 'warning'); return; }
            emp.timeOff.requests.push(r);
            saveEmployees();
            logActivity('timeoff.restore', r.id, { label: `${emp.name} · ${r.type}` });
            renderTimeOff();
            if (timeOffModalOverlay && timeOffModalOverlay.classList.contains('active')) renderTimeOffModal();
            toast(`Restored time off for ${emp.name}`, 'success');
            break;
        }
        default:
            return;
    }

    trashEntries = trashEntries.filter(t => t.id !== id);
    saveTrash();
    updateTrashBadge();
    if (trashModalOverlay && trashModalOverlay.classList.contains('active')) renderTrashModal();
}

function purgeFromTrash(id) {
    const entry = findTrash(id);
    if (!entry) return;
    const label = entry.label;
    trashEntries = trashEntries.filter(t => t.id !== id);
    saveTrash();
    updateTrashBadge();
    logActivity('trash.purge', id, { label, entityType: entry.entityType });
    if (trashModalOverlay && trashModalOverlay.classList.contains('active')) renderTrashModal();
    toast(`Permanently deleted "${label}"`, 'info', 2500);
}

function emptyTrash() {
    const count = trashEntries.length;
    trashEntries = [];
    saveTrash();
    updateTrashBadge();
    logActivity('trash.empty', null, { count });
    if (trashModalOverlay && trashModalOverlay.classList.contains('active')) renderTrashModal();
    toast(`Emptied trash · ${count} item${count === 1 ? '' : 's'} purged`, 'success', 3000);
}

// ==================== TRASH UI ====================
function updateTrashBadge() {
    if (!trashTriggerBadge) return;
    const n = trashEntries.length;
    if (n > 0) {
        trashTriggerBadge.textContent = n > 99 ? '99+' : String(n);
        trashTriggerBadge.style.display = 'inline-flex';
    } else {
        trashTriggerBadge.style.display = 'none';
    }
}
function renderTrashModal() {
    if (!trashList) return;
    const total = trashEntries.length;
    if (trashModalSub) {
        trashModalSub.textContent = total === 0
            ? 'Deleted items — restore within 30 days'
            : `${total} item${total === 1 ? '' : 's'} · restore within 30 days`;
    }
    if (trashEmptyBtn) {
        trashEmptyBtn.disabled = total === 0;
        trashEmptyBtn.style.opacity = total === 0 ? '0.5' : '';
        trashEmptyBtn.style.pointerEvents = total === 0 ? 'none' : '';
    }
    if (total === 0) {
        trashList.innerHTML = '';
        if (trashEmpty) trashEmpty.style.display = 'block';
        return;
    }
    if (trashEmpty) trashEmpty.style.display = 'none';
    const sorted = trashEntries.slice().sort((a, b) => (b.deletedAt || 0) - (a.deletedAt || 0));
    trashList.innerHTML = sorted.map(entry => {
        const days = daysUntilTrashPurge(entry);
        const daysClass = days <= 2 ? 'urgent' : days <= 7 ? 'soon' : '';
        const daysLabel = days <= 0 ? 'Expiring today' : days === 1 ? '1 day left' : `${days} days left`;
        const icon = trashEntryIcon(entry.entityType);
        const typeLabel = trashEntryLabel(entry.entityType);
        const relTime = relativeTime(entry.deletedAt);
        const subHtml = entry.subLabel
            ? `<div class="trash-row-sub">${escapeHtml(entry.subLabel)}</div>`
            : '';
        return `
            <div class="trash-row" data-trash-id="${entry.id}">
                <div class="trash-row-icon" data-entity="${entry.entityType}">${icon}</div>
                <div class="trash-row-body">
                    <div class="trash-row-label">${escapeHtml(entry.label)}</div>
                    ${subHtml}
                    <div class="trash-row-meta">${escapeHtml(typeLabel)} · deleted ${escapeHtml(relTime)}</div>
                </div>
                <span class="trash-row-days ${daysClass}">${escapeHtml(daysLabel)}</span>
                <div class="trash-row-actions">
                    <button class="trash-action-btn restore" type="button" data-trash-restore="${entry.id}" title="Restore" aria-label="Restore">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>
                    </button>
                    <button class="trash-action-btn purge" type="button" data-trash-purge="${entry.id}" title="Delete forever" aria-label="Delete forever">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    trashList.querySelectorAll('[data-trash-restore]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            restoreFromTrash(btn.dataset.trashRestore);
        });
    });
    trashList.querySelectorAll('[data-trash-purge]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            askTrashPurge(btn.dataset.trashPurge);
        });
    });
}
function openTrashModal() {
    renderTrashModal();
    trashModalOverlay.classList.add('active');
}
function closeTrashModal() {
    trashModalOverlay.classList.remove('active');
}
function askTrashPurge(id) {
    if (demoBlocked('Permanent delete')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const entry = findTrash(id);
    if (!entry) return;
    pendingTrashPurge = id;
    if (trashPurgeMessage) {
        trashPurgeMessage.textContent = `Permanently delete "${entry.label}"? This cannot be undone.`;
    }
    if (trashPurgeConfirm) trashPurgeConfirm.value = '';
    if (trashPurgeApplyBtn) trashPurgeApplyBtn.disabled = true;
    trashPurgeOverlay.classList.add('active');
    setTimeout(() => trashPurgeConfirm && trashPurgeConfirm.focus(), 120);
}
function closeTrashPurge() {
    trashPurgeOverlay.classList.remove('active');
    pendingTrashPurge = null;
    if (trashPurgeConfirm) trashPurgeConfirm.value = '';
    if (trashPurgeApplyBtn) trashPurgeApplyBtn.disabled = true;
}
function askTrashEmpty() {
    if (demoBlocked('Emptying trash')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to empty trash', 'warning'); return; }
    if (trashEntries.length === 0) { toast('Trash is already empty', 'info'); return; }
    pendingTrashEmpty = true;
    if (trashEmptyMessage) {
        trashEmptyMessage.textContent = `Permanently delete all ${trashEntries.length} item${trashEntries.length === 1 ? '' : 's'} in trash? This cannot be undone.`;
    }
    if (trashEmptyConfirm) trashEmptyConfirm.value = '';
    if (trashEmptyApplyBtn) trashEmptyApplyBtn.disabled = true;
    trashEmptyOverlay.classList.add('active');
    setTimeout(() => trashEmptyConfirm && trashEmptyConfirm.focus(), 120);
}
function closeTrashEmpty() {
    trashEmptyOverlay.classList.remove('active');
    pendingTrashEmpty = false;
    if (trashEmptyConfirm) trashEmptyConfirm.value = '';
    if (trashEmptyApplyBtn) trashEmptyApplyBtn.disabled = true;
}
if (trashTrigger) trashTrigger.addEventListener('click', openTrashModal);
if (trashModalClose) trashModalClose.addEventListener('click', closeTrashModal);
if (trashModalOverlay) trashModalOverlay.addEventListener('click', (e) => {
    if (e.target === trashModalOverlay) closeTrashModal();
});
if (trashEmptyBtn) trashEmptyBtn.addEventListener('click', askTrashEmpty);
if (trashPurgeConfirm) {
    trashPurgeConfirm.addEventListener('input', () => {
        const typed = trashPurgeConfirm.value.trim().toUpperCase();
        if (trashPurgeApplyBtn) trashPurgeApplyBtn.disabled = typed !== 'DELETE';
    });
}
if (trashPurgeClose) trashPurgeClose.addEventListener('click', closeTrashPurge);
if (trashPurgeCancelBtn) trashPurgeCancelBtn.addEventListener('click', closeTrashPurge);
if (trashPurgeOverlay) trashPurgeOverlay.addEventListener('click', (e) => {
    if (e.target === trashPurgeOverlay) closeTrashPurge();
});
if (trashPurgeApplyBtn) trashPurgeApplyBtn.addEventListener('click', () => {
    if (trashPurgeApplyBtn.disabled) return;
    if (!pendingTrashPurge) return;
    const id = pendingTrashPurge;
    closeTrashPurge();
    purgeFromTrash(id);
});
if (trashEmptyConfirm) {
    trashEmptyConfirm.addEventListener('input', () => {
        const typed = trashEmptyConfirm.value.trim().toUpperCase();
        if (trashEmptyApplyBtn) trashEmptyApplyBtn.disabled = typed !== 'EMPTY';
    });
}
if (trashEmptyClose) trashEmptyClose.addEventListener('click', closeTrashEmpty);
if (trashEmptyCancelBtn) trashEmptyCancelBtn.addEventListener('click', closeTrashEmpty);
if (trashEmptyOverlay) trashEmptyOverlay.addEventListener('click', (e) => {
    if (e.target === trashEmptyOverlay) closeTrashEmpty();
});
if (trashEmptyApplyBtn) trashEmptyApplyBtn.addEventListener('click', () => {
    if (trashEmptyApplyBtn.disabled) return;
    if (!pendingTrashEmpty) return;
    closeTrashEmpty();
    emptyTrash();
});

// ==================== ANNOUNCEMENTS ====================
function loadAnnouncements() {
    try {
        const raw = localStorage.getItem(ANNOUNCEMENTS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(a => a && typeof a === 'object' && a.title && a.body)
            .map(a => ({
                id: a.id || uidAnnounce(),
                title: String(a.title),
                body: String(a.body),
                authorId: a.authorId ? String(a.authorId) : null,
                authorName: a.authorName ? String(a.authorName) : '',
                pinned: !!a.pinned,
                createdAt: typeof a.createdAt === 'number' ? a.createdAt : Date.now(),
                updatedAt: typeof a.updatedAt === 'number' ? a.updatedAt : (typeof a.createdAt === 'number' ? a.createdAt : Date.now())
            }));
    } catch (e) { return []; }
}
function saveAnnouncements() {
    try { localStorage.setItem(ANNOUNCEMENTS_KEY, JSON.stringify(announcements)); }
    catch (e) { toast('Could not save announcements.', 'error'); }
}
function uidAnnounce() {
    return 'ann_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function sortedAnnouncements() {
    return announcements.slice().sort((a, b) => {
        if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
        return (b.createdAt || 0) - (a.createdAt || 0);
    });
}

// ==================== KUDOS ====================
function loadKudos() {
    try {
        const raw = localStorage.getItem(KUDOS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(k => k && typeof k === 'object' && k.toId && k.message)
            .map(k => ({
                id: k.id || uidKudos(),
                fromId: k.fromId ? String(k.fromId) : null,
                fromName: k.fromName ? String(k.fromName) : '',
                toId: String(k.toId),
                toName: k.toName ? String(k.toName) : '',
                message: String(k.message),
                badge: typeof k.badge === 'string' ? k.badge : '',
                createdAt: typeof k.createdAt === 'number' ? k.createdAt : Date.now()
            }));
    } catch (e) { return []; }
}
function saveKudos() {
    try { localStorage.setItem(KUDOS_KEY, JSON.stringify(kudos)); }
    catch (e) { toast('Could not save kudos.', 'error'); }
}
function uidKudos() {
    return 'kudos_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function sortedKudos() {
    return kudos.slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}
function kudosForEmployee(empId) {
    return kudos.filter(k => k.toId === empId);
}
function kudosBadgeInfo(key) {
    return KUDOS_BADGES[key] || KUDOS_BADGES[''];
}

// ==================== NOTES ====================
function loadNotes() {
    try {
        const raw = localStorage.getItem(NOTES_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(n => n && typeof n === 'object' && n.employeeId && n.body)
            .map(n => ({
                id: n.id || uidNote(),
                employeeId: String(n.employeeId),
                type: NOTE_TYPES.some(t => t.key === n.type) ? n.type : 'note',
                date: typeof n.date === 'string' ? n.date : new Date().toISOString().slice(0, 10),
                body: String(n.body),
                private: !!n.private,
                createdAt: typeof n.createdAt === 'number' ? n.createdAt : Date.now(),
                updatedAt: typeof n.updatedAt === 'number' ? n.updatedAt : (typeof n.createdAt === 'number' ? n.createdAt : Date.now())
            }));
    } catch (e) { return []; }
}
function saveNotes() {
    try { localStorage.setItem(NOTES_KEY, JSON.stringify(notes)); }
    catch (e) { toast('Could not save notes.', 'error'); }
}
function uidNote() {
    return 'note_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function notesForEmployee(empId) {
    return notes
        .filter(n => n.employeeId === empId)
        .sort((a, b) => {
            const ad = a.date || '';
            const bd = b.date || '';
            if (ad !== bd) return bd.localeCompare(ad);
            return (b.createdAt || 0) - (a.createdAt || 0);
        });
}
function noteTypeLabel(key) {
    const t = NOTE_TYPES.find(x => x.key === key);
    return t ? t.label : key;
}

// ==================== JOB HISTORY ====================
function loadJobHistory() {
    try {
        const raw = localStorage.getItem(JOB_HISTORY_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(h => h && typeof h === 'object' && h.employeeId && h.summary)
            .map(h => ({
                id: h.id || uidJobHistory(),
                employeeId: String(h.employeeId),
                kind: JOB_HISTORY_KINDS.some(k => k.key === h.kind) ? h.kind : 'other',
                summary: String(h.summary),
                from: typeof h.from === 'string' ? h.from : '',
                to: typeof h.to === 'string' ? h.to : '',
                date: typeof h.date === 'string' ? h.date : new Date().toISOString().slice(0, 10),
                notes: typeof h.notes === 'string' ? h.notes : '',
                createdAt: typeof h.createdAt === 'number' ? h.createdAt : Date.now()
            }));
    } catch (e) { return []; }
}
function saveJobHistory() {
    try { localStorage.setItem(JOB_HISTORY_KEY, JSON.stringify(jobHistory)); }
    catch (e) { toast('Could not save job history.', 'error'); }
}
function uidJobHistory() {
    return 'jh_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function jobHistoryForEmployee(empId) {
    return jobHistory
        .filter(h => h.employeeId === empId)
        .sort((a, b) => {
            const ad = a.date || '';
            const bd = b.date || '';
            if (ad !== bd) return bd.localeCompare(ad);
            return (b.createdAt || 0) - (a.createdAt || 0);
        });
}
function jobHistoryKindInfo(key) {
    return JOB_HISTORY_KINDS.find(k => k.key === key) || JOB_HISTORY_KINDS[JOB_HISTORY_KINDS.length - 1];
}

// ==================== GOALS ====================
function loadGoals() {
    try {
        const raw = localStorage.getItem(GOALS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(g => g && typeof g === 'object' && g.ownerId && g.title)
            .map(g => ({
                id: g.id || uidGoal(),
                ownerId: String(g.ownerId),
                title: String(g.title),
                description: typeof g.description === 'string' ? g.description : '',
                category: GOAL_CATEGORIES.some(c => c.key === g.category) ? g.category : 'objective',
                status: GOAL_STATUSES.some(s => s.key === g.status) ? g.status : 'not-started',
                progress: Math.max(0, Math.min(100, typeof g.progress === 'number' ? g.progress : 0)),
                dueDate: typeof g.dueDate === 'string' ? g.dueDate : '',
                createdAt: typeof g.createdAt === 'number' ? g.createdAt : Date.now(),
                updatedAt: typeof g.updatedAt === 'number' ? g.updatedAt : (typeof g.createdAt === 'number' ? g.createdAt : Date.now())
            }));
    } catch (e) { return []; }
}
function saveGoals() {
    try { localStorage.setItem(GOALS_KEY, JSON.stringify(goals)); }
    catch (e) { toast('Could not save goals.', 'error'); }
}
function uidGoal() {
    return 'goal_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function sortedGoals() {
    const statusOrder = { 'at-risk': 0, 'in-progress': 1, 'not-started': 2, 'done': 3 };
    return goals.slice().sort((a, b) => {
        const so = (statusOrder[a.status] || 9) - (statusOrder[b.status] || 9);
        if (so !== 0) return so;
        const ad = a.dueDate || '9999-12-31';
        const bd = b.dueDate || '9999-12-31';
        if (ad !== bd) return ad.localeCompare(bd);
        return (b.createdAt || 0) - (a.createdAt || 0);
    });
}
function goalsForEmployee(empId) {
    return sortedGoals().filter(g => g.ownerId === empId);
}
function goalCategoryLabel(key) {
    const c = GOAL_CATEGORIES.find(x => x.key === key);
    return c ? c.label : key;
}
function goalStatusLabel(key) {
    const s = GOAL_STATUSES.find(x => x.key === key);
    return s ? s.label : key;
}

// ==================== DOCUMENTS ====================
function loadDocuments() {
    try {
        const raw = localStorage.getItem(DOCUMENTS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(d => d && typeof d === 'object' && d.employeeId && d.name && d.dataUrl)
            .map(d => ({
                id: d.id || uidDocument(),
                employeeId: String(d.employeeId),
                name: String(d.name),
                label: typeof d.label === 'string' ? d.label : '',
                mime: typeof d.mime === 'string' ? d.mime : 'application/octet-stream',
                size: typeof d.size === 'number' ? d.size : 0,
                category: DOC_CATEGORIES.some(c => c.key === d.category) ? d.category : 'other',
                dataUrl: String(d.dataUrl),
                uploadedAt: typeof d.uploadedAt === 'number' ? d.uploadedAt : Date.now()
            }));
    } catch (e) { return []; }
}
function saveDocuments() {
    try { localStorage.setItem(DOCUMENTS_KEY, JSON.stringify(documents)); }
    catch (e) { toast('Could not save documents — storage full.', 'error'); }
}
function uidDocument() {
    return 'doc_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function documentsForEmployee(empId) {
    return documents
        .filter(d => d.employeeId === empId)
        .sort((a, b) => (b.uploadedAt || 0) - (a.uploadedAt || 0));
}
function documentsTotalBytes() {
    return documents.reduce((sum, d) => sum + (d.size || 0), 0);
}
function documentsTotalBytesForEmployee(empId) {
    return documentsForEmployee(empId).reduce((sum, d) => sum + (d.size || 0), 0);
}
function formatBytes(bytes) {
    if (!bytes || bytes < 0) return '0 B';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}
function docCategoryInfo(key) {
    return DOC_CATEGORIES.find(c => c.key === key) || DOC_CATEGORIES[DOC_CATEGORIES.length - 1];
}
function documentStorageLevel() {
    const total = documentsTotalBytes();
    const pct = total / DOC_MAX_TOTAL_BYTES;
    if (pct >= 0.9) return 'danger';
    if (pct >= 0.7) return 'warn';
    return 'ok';
}

// ==================== ONBOARDING TEMPLATES ====================
function uidTemplate() {
    return 'tpl_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function defaultOnboardingTemplate() {
    return {
        id: 'tpl_default',
        name: 'Default',
        items: ONBOARDING_DEFAULT_ITEMS.map(label => ({ label })),
        createdAt: Date.now(),
        isDefault: true
    };
}
function loadOnboardingTemplates() {
    try {
        const raw = localStorage.getItem(ONBOARDING_TEMPLATES_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(t => t && typeof t === 'object' && t.name && Array.isArray(t.items))
            .map(t => ({
                id: t.id || uidTemplate(),
                name: String(t.name),
                items: t.items
                    .filter(i => i && typeof i === 'object' && i.label)
                    .map(i => ({ label: String(i.label) })),
                createdAt: typeof t.createdAt === 'number' ? t.createdAt : Date.now(),
                isDefault: !!t.isDefault
            }));
    } catch (e) { return []; }
}
function saveOnboardingTemplates() {
    try { localStorage.setItem(ONBOARDING_TEMPLATES_KEY, JSON.stringify(onboardingTemplates)); }
    catch (e) { toast('Could not save templates.', 'error'); }
}
function seedOnboardingTemplatesIfEmpty() {
    if (onboardingTemplates.length > 0) return;
    onboardingTemplates = [defaultOnboardingTemplate()];
    saveOnboardingTemplates();
}
function getTemplateById(id) {
    return onboardingTemplates.find(t => t.id === id) || null;
}
function renderOnboardingTemplateChips() {
    if (!onboardingTemplatesChips) return;
    if (onboardingTemplates.length === 0) {
        onboardingTemplatesChips.innerHTML = `<span style="font-size:0.78rem;color:var(--text-muted);font-style:italic;">No templates yet</span>`;
        return;
    }
    onboardingTemplatesChips.innerHTML = onboardingTemplates.map(t => `
        <button class="onboarding-template-chip" data-template-id="${t.id}" type="button" title="${escapeHtml(t.name)} · ${t.items.length} item${t.items.length === 1 ? '' : 's'}">
            <span>${escapeHtml(t.name)}</span>
            <span class="onboarding-template-chip-count">${t.items.length}</span>
        </button>
    `).join('');
    onboardingTemplatesChips.querySelectorAll('.onboarding-template-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            openOnboardingTemplateEditModal(chip.dataset.templateId);
        });
    });
}
function renderTemplateItemsList() {
    if (!onboardingTemplateItemsList) return;
    if (templateEditingItems.length === 0) {
        onboardingTemplateItemsList.innerHTML = `<div class="template-items-empty">No items yet — add one below.</div>`;
        return;
    }
    onboardingTemplateItemsList.innerHTML = templateEditingItems.map((item, idx) => `
        <div class="template-item-row" data-idx="${idx}">
            <input type="text" value="${escapeHtml(item.label)}" data-idx="${idx}" placeholder="Item label">
            <button type="button" class="template-item-remove" data-idx="${idx}" title="Remove item" aria-label="Remove item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
        </div>
    `).join('');
    onboardingTemplateItemsList.querySelectorAll('input[data-idx]').forEach(input => {
        input.addEventListener('input', () => {
            const idx = parseInt(input.dataset.idx, 10);
            if (!isNaN(idx) && templateEditingItems[idx]) {
                templateEditingItems[idx].label = input.value;
            }
        });
    });
    onboardingTemplateItemsList.querySelectorAll('.template-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx, 10);
            if (!isNaN(idx)) {
                templateEditingItems.splice(idx, 1);
                renderTemplateItemsList();
            }
        });
    });
}
function openOnboardingTemplateEditModal(templateId) {
    if (templateId) {
        const t = getTemplateById(templateId);
        if (!t) return;
        onboardingTemplateEditTitle.textContent = 'Edit Template';
        onboardingTemplateEditId.value = t.id;
        onboardingTemplateFieldName.value = t.name;
        templateEditingItems = t.items.map(i => ({ label: i.label }));
        if (onboardingTemplateDeleteBtn) {
            onboardingTemplateDeleteBtn.style.display = t.isDefault ? 'none' : 'inline-flex';
        }
    } else {
        onboardingTemplateEditTitle.textContent = 'New Template';
        onboardingTemplateEditId.value = '';
        onboardingTemplateFieldName.value = '';
        templateEditingItems = [];
        if (onboardingTemplateDeleteBtn) onboardingTemplateDeleteBtn.style.display = 'none';
    }
    if (onboardingTemplateEditError) {
        onboardingTemplateEditError.style.display = 'none';
        onboardingTemplateEditError.textContent = '';
    }
    renderTemplateItemsList();
    onboardingTemplateEditOverlay.classList.add('active');
    setTimeout(() => onboardingTemplateFieldName.focus(), 100);
}
function closeOnboardingTemplateEditModal() {
    onboardingTemplateEditOverlay.classList.remove('active');
    templateEditingItems = [];
}
function saveOnboardingTemplateFromModal() {
    const name = onboardingTemplateFieldName.value.trim();
    if (!name) {
        onboardingTemplateEditError.textContent = 'Please enter a template name.';
        onboardingTemplateEditError.style.display = 'block';
        return;
    }
    const cleanItems = templateEditingItems
        .map(i => ({ label: String(i.label || '').trim() }))
        .filter(i => i.label.length > 0);
    if (cleanItems.length === 0) {
        onboardingTemplateEditError.textContent = 'Please add at least one item.';
        onboardingTemplateEditError.style.display = 'block';
        return;
    }
    const id = onboardingTemplateEditId.value;
    if (id) {
        const idx = onboardingTemplates.findIndex(t => t.id === id);
        if (idx > -1) {
            onboardingTemplates[idx] = { ...onboardingTemplates[idx], name, items: cleanItems };
            saveOnboardingTemplates();
            logActivity('onboarding.template.edit', id, { label: name });
            toast('Template updated', 'success');
        }
    } else {
        onboardingTemplates.push({
            id: uidTemplate(),
            name,
            items: cleanItems,
            createdAt: Date.now()
        });
        saveOnboardingTemplates();
        logActivity('onboarding.template.add', null, { label: name });
        toast('Template created', 'success');
    }
    closeOnboardingTemplateEditModal();
    renderOnboardingTemplateChips();
    renderOnboardingModal();
}
function askDeleteOnboardingTemplate() {
    const id = onboardingTemplateEditId.value;
    if (!id) return;
    const t = getTemplateById(id);
    if (!t) return;
    if (t.isDefault) {
        toast('The default template cannot be deleted', 'warning');
        return;
    }
    pendingTemplateDeleteId = id;
    onboardingTemplateDeleteMessage.textContent = `Delete "${t.name}"? Existing employee checklists are not affected. This cannot be undone.`;
    onboardingTemplateDeleteOverlay.classList.add('active');
}
function closeDeleteOnboardingTemplate() {
    onboardingTemplateDeleteOverlay.classList.remove('active');
    pendingTemplateDeleteId = null;
}
function confirmDeleteOnboardingTemplate() {
    if (!pendingTemplateDeleteId) return;
    const id = pendingTemplateDeleteId;
    const t = getTemplateById(id);
    onboardingTemplates = onboardingTemplates.filter(x => x.id !== id);
    saveOnboardingTemplates();
    logActivity('onboarding.template.delete', id, { label: t ? t.name : '' });
    closeDeleteOnboardingTemplate();
    closeOnboardingTemplateEditModal();
    renderOnboardingTemplateChips();
    toast('Template deleted', 'success');
}
function applyTemplateToEmployee(empId, templateId) {
    if (demoBlocked('Applying templates')) return;
    const emp = findEmployee(empId);
    const tpl = getTemplateById(templateId);
    if (!emp || !tpl) return;
    openConfirm({
        title: 'Apply template',
        message: `Replace ${emp.name}'s current checklist with "${tpl.name}" (${tpl.items.length} items)? The current checklist will be overwritten.`,
        phrase: 'APPLY',
        onConfirm: () => {
            emp.onboarding = {
                startedAt: Date.now(),
                targetDate: (emp.onboarding && emp.onboarding.targetDate) || '',
                items: tpl.items.map(i => ({
                    id: 'ob_' + Math.random().toString(36).slice(2, 9),
                    label: i.label,
                    done: false,
                    doneAt: null
                }))
            };
            saveEmployees();
            logActivity('onboarding.apply', empId, { label: `${emp.name} · ${tpl.name}` });
            renderOnboarding();
            renderOnboardingModal();
            if (currentDetailId === empId) renderDetailPanel(emp);
            toast(`Applied "${tpl.name}" to ${emp.name}`, 'success', 3000);
        }
    });
}
function saveChecklistAsTemplate(empId) {
    if (demoBlocked('Creating templates')) return;
    const emp = findEmployee(empId);
    if (!emp || !emp.onboarding || !Array.isArray(emp.onboarding.items) || emp.onboarding.items.length === 0) {
        toast('No checklist to save', 'warning');
        return;
    }
    onboardingTemplateEditTitle.textContent = 'New Template';
    onboardingTemplateEditId.value = '';
    onboardingTemplateFieldName.value = `${emp.name}'s checklist`;
    templateEditingItems = emp.onboarding.items.map(i => ({ label: i.label }));
    if (onboardingTemplateDeleteBtn) onboardingTemplateDeleteBtn.style.display = 'none';
    if (onboardingTemplateEditError) {
        onboardingTemplateEditError.style.display = 'none';
        onboardingTemplateEditError.textContent = '';
    }
    renderTemplateItemsList();
    onboardingTemplateEditOverlay.classList.add('active');
    setTimeout(() => {
        onboardingTemplateFieldName.focus();
        onboardingTemplateFieldName.select();
    }, 100);
}
function setOnboardingTargetDate(empId, dateStr) {
    const emp = findEmployee(empId);
    if (!emp || !emp.onboarding) return;
    emp.onboarding.targetDate = dateStr || '';
    saveEmployees();
    logActivity('onboarding.target', empId, { label: `${emp.name} · ${dateStr || 'cleared'}` });
    renderOnboarding();
    renderOnboardingModal();
    if (currentDetailId === empId) renderDetailPanel(emp);
}
function onboardingTargetStatus(targetDate) {
    if (!targetDate) return 'none';
    const today = startOfDay(new Date()).getTime();
    const t = new Date(targetDate + 'T00:00:00').getTime();
    if (isNaN(t)) return 'none';
    const days = Math.round((t - today) / 86400000);
    if (days < 0) return 'overdue';
    if (days <= 7) return 'soon';
    return 'normal';
}
if (onboardingNewTemplateBtn) {
    onboardingNewTemplateBtn.addEventListener('click', () => {
        openOnboardingTemplateEditModal();
    });
}
if (onboardingTemplateEditClose) {
    onboardingTemplateEditClose.addEventListener('click', closeOnboardingTemplateEditModal);
}
if (onboardingTemplateEditCancelBtn) {
    onboardingTemplateEditCancelBtn.addEventListener('click', closeOnboardingTemplateEditModal);
}
if (onboardingTemplateEditOverlay) {
    onboardingTemplateEditOverlay.addEventListener('click', (e) => {
        if (e.target === onboardingTemplateEditOverlay) closeOnboardingTemplateEditModal();
    });
}
if (onboardingTemplateEditSaveBtn) {
    onboardingTemplateEditSaveBtn.addEventListener('click', saveOnboardingTemplateFromModal);
}
if (onboardingTemplateAddItemBtn) {
    onboardingTemplateAddItemBtn.addEventListener('click', () => {
        const v = onboardingTemplateNewItem.value.trim();
        if (!v) return;
        templateEditingItems.push({ label: v });
        onboardingTemplateNewItem.value = '';
        renderTemplateItemsList();
        onboardingTemplateNewItem.focus();
    });
}
if (onboardingTemplateNewItem) {
    onboardingTemplateNewItem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onboardingTemplateAddItemBtn.click();
        }
    });
}
if (onboardingTemplateDeleteBtn) {
    onboardingTemplateDeleteBtn.addEventListener('click', askDeleteOnboardingTemplate);
}
if (onboardingTemplateDeleteClose) {
    onboardingTemplateDeleteClose.addEventListener('click', closeDeleteOnboardingTemplate);
}
if (onboardingTemplateDeleteCancelBtn) {
    onboardingTemplateDeleteCancelBtn.addEventListener('click', closeDeleteOnboardingTemplate);
}
if (onboardingTemplateDeleteOverlay) {
    onboardingTemplateDeleteOverlay.addEventListener('click', (e) => {
        if (e.target === onboardingTemplateDeleteOverlay) closeDeleteOnboardingTemplate();
    });
}
if (onboardingTemplateDeleteApplyBtn) {
    onboardingTemplateDeleteApplyBtn.addEventListener('click', confirmDeleteOnboardingTemplate);
}

// ==================== DEMO SEED ====================
function seedDemoData() {
    if (!DEMO_MODE) return;
    if (localStorage.getItem(DEMO_SEEDED_KEY) === '1') return;
    if (employees.length > 0) return;

    const now = Date.now();
    const dayMs = 86400000;
    const sm = uid();
    const dd = uid();
    const tt = uid();

    employees = [
        {
            id: sm, createdAt: now - 30 * dayMs, status: 'production',
            activeSession: { start: now - 45 * 60000, status: 'production' },
            timeLog: [], pay: { rateType: 'hourly', rate: 25, taxPct: 16, pensionPct: 5, other: 0 },
            name: 'Sample Smith', nickname: 'Sam', title: 'Software Engineer', department: 'Engineering',
            managerId: null, startDate: new Date(now - 400 * dayMs).toISOString().slice(0,10),
            probationEnd: '', about: 'Demo profile — explore the app! This employee is not real.',
            birthday: '1995-06-12', pronouns: 'They/Them', marital: '', gender: '',
            location: 'Nairobi, Kenya', address: '', hobby: 'Cycling, coffee',
            email: 'sample.smith@example.com', phone: '+254 700 000 001', photo: '', onboarding: null,
            emergency: { name: 'Pat Smith', relation: 'Sibling', phone: '+254 700 000 099', email: '' },
            timeOff: { allowance: 72, requests: [
                { id: 'req_demo_1', type: 'vacation',
                  startDate: new Date(now + 5 * dayMs).toISOString().slice(0,10),
                  endDate: new Date(now + 7 * dayMs).toISOString().slice(0,10),
                  hours: 24, reason: 'Long weekend away', status: 'pending',
                  requestedAt: now - 2 * dayMs, decidedAt: null, decidedBy: null, decisionNote: '' }
            ]}
        },
        {
            id: dd, createdAt: now - 20 * dayMs, status: 'break',
            activeSession: { start: now - 15 * 60000, status: 'break' },
            timeLog: [], pay: { rateType: 'hourly', rate: 32, taxPct: 16, pensionPct: 5, other: 0 },
            name: 'Demo Daniels', nickname: '', title: 'Product Designer', department: 'Design',
            managerId: sm, startDate: new Date(now - 120 * dayMs).toISOString().slice(0,10),
            probationEnd: new Date(now + 15 * dayMs).toISOString().slice(0,10),
            about: 'Another sample profile — feels free to poke around.',
            birthday: '1992-11-03', pronouns: 'She/Her', marital: '', gender: '',
            location: 'Lagos, Nigeria', address: '', hobby: 'Photography',
            email: 'demo.daniels@example.com', phone: '+234 800 000 002', photo: '', onboarding: null,
            emergency: { name: '', relation: '', phone: '', email: '' },
            timeOff: { allowance: 72, requests: [] }
        },
        {
            id: tt, createdAt: now - 10 * dayMs, status: 'off-shift',
            activeSession: { start: now - 30 * 60000, status: 'off-shift' },
            timeLog: [], pay: { rateType: 'monthly', rate: 4500, taxPct: 18, pensionPct: 6, other: 0 },
            name: 'Test Thompson', nickname: 'Tee', title: 'Operations Lead', department: 'Operations',
            managerId: sm, startDate: new Date(now - 800 * dayMs).toISOString().slice(0,10),
            probationEnd: '', about: 'Third sample profile for testing.',
            birthday: '1988-02-28', pronouns: 'He/Him', marital: '', gender: '',
            location: 'London, UK', address: '', hobby: 'Running marathons',
            email: 'test.thompson@example.com', phone: '+44 7700 000003', photo: '', onboarding: null,
            emergency: { name: '', relation: '', phone: '', email: '' },
            timeOff: { allowance: 72, requests: [] }
        }
    ];

    saveEmployees();
    try { localStorage.setItem(DEMO_SEEDED_KEY, '1'); } catch (e) {}
}

// ==================== HOLIDAYS ====================
function defaultHolidays() {
    const y = new Date().getFullYear();
    return [
        { id: 'h_newyear',  name: 'New Year\'s Day',   date: `${y}-01-01`, country: 'Global',  type: 'international', repeat: true },
        { id: 'h_goodfri',  name: 'Good Friday',       date: `${y}-04-18`, country: 'Global',  type: 'international', repeat: false },
        { id: 'h_labour',   name: 'Labour Day',        date: `${y}-05-01`, country: 'Global',  type: 'international', repeat: true },
        { id: 'h_christmas',name: 'Christmas Day',     date: `${y}-12-25`, country: 'Global',  type: 'international', repeat: true },
        { id: 'h_boxing',   name: 'Boxing Day',        date: `${y}-12-26`, country: 'Global',  type: 'international', repeat: true }
    ];
}
function loadHolidays() {
    try {
        const raw = localStorage.getItem(HOLIDAYS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter(h => h && typeof h === 'object' && h.name && h.date)
            .map(h => ({
                id: h.id || ('h_' + Math.random().toString(36).slice(2, 9)),
                name: String(h.name),
                date: String(h.date),
                country: h.country ? String(h.country) : '',
                type: ['national', 'international', 'company'].includes(h.type) ? h.type : 'national',
                repeat: !!h.repeat
            }));
    } catch (e) { return []; }
}
function saveHolidays() {
    try { localStorage.setItem(HOLIDAYS_KEY, JSON.stringify(holidays)); }
    catch (e) { toast('Could not save holidays.', 'error'); }
}
function seedHolidaysIfEmpty() {
    if (holidays.length > 0) return;
    if (localStorage.getItem(HOLIDAYS_SEEDED_KEY) === '1') return;
    holidays = defaultHolidays();
    saveHolidays();
    try { localStorage.setItem(HOLIDAYS_SEEDED_KEY, '1'); } catch (e) {}
}
function holidayNextOccurrence(h) {
    if (!h.date) return null;
    const parts = h.date.split('-').map(Number);
    if (parts.length < 3 || parts.some(isNaN)) return null;
    const [y, m, d] = parts;
    const today = startOfDay(new Date());
    let next = new Date(y, m - 1, d);
    next.setHours(0, 0, 0, 0);
    if (h.repeat) {
        const thisYear = today.getFullYear();
        next = new Date(thisYear, m - 1, d);
        next.setHours(0, 0, 0, 0);
        if (next.getTime() < today.getTime()) {
            next = new Date(thisYear + 1, m - 1, d);
            next.setHours(0, 0, 0, 0);
        }
    } else if (next.getTime() < today.getTime()) {
        return null;
    }
    return next;
}
function holidaysWithNext() {
    const rows = holidays.map(h => {
        const next = holidayNextOccurrence(h);
        return { h, next, days: next ? daysUntil(next) : Infinity };
    });
    rows.sort((a, b) => a.days - b.days);
    return rows;
}
function formatHolidayDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-').map(Number);
    if (parts.length < 3 || parts.some(isNaN)) return dateStr;
    const [y, m, d] = parts;
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}
function holidayDateBadgeParts(dateStr) {
    if (!dateStr) return { day: '?', month: '' };
    const parts = dateStr.split('-').map(Number);
    if (parts.length < 3 || parts.some(isNaN)) return { day: '?', month: '' };
    const [y, m, d] = parts;
    const date = new Date(y, m - 1, d);
    return {
        day: String(date.getDate()),
        month: date.toLocaleDateString(undefined, { month: 'short' })
    };
}
function holidaysTypeLabel(t) {
    if (t === 'international') return 'International';
    if (t === 'company') return 'Company';
    return 'National';
}

// ==================== HELPERS ====================
function initials(name) {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function uid() {
    return 'emp_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function uidReq() {
    return 'req_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function uidHoliday() {
    return 'h_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
function hueFromString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash |= 0;
    }
    return AVATAR_HUES[Math.abs(hash) % AVATAR_HUES.length];
}
function relativeTime(timestamp) {
    if (!timestamp) return '';
    const diff = Date.now() - timestamp;
    const sec = Math.floor(diff / 1000);
    if (sec < 60) return 'just now';
    const min = Math.floor(sec / 60);
    if (min < 60) return `${min} min ago`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr} hr${hr !== 1 ? 's' : ''} ago`;
    const days = Math.floor(hr / 24);
    if (days < 7) return `${days} day${days !== 1 ? 's' : ''} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 5) return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;
    const years = Math.floor(days / 365);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
}
function relativeFromDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) return dateStr;
    return relativeTime(d.getTime());
}
function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
        const d = new Date(dateStr + 'T00:00:00');
        if (isNaN(d.getTime())) return dateStr;
        return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch (e) { return dateStr; }
}
function smartDateHTML(dateStr, opts) {
    const opts2 = opts || {};
    const prefix = opts2.prefix || '';
    if (!dateStr) {
        return opts2.showEmpty ? `<span class="not-provided">${NOT_PROVIDED_TEXT}</span>` : '';
    }
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) return escapeHtml(dateStr);
    const exact = d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    const rel = relativeTime(d.getTime());
    return `<span title="${escapeHtml(exact)}">${escapeHtml(prefix)}${escapeHtml(rel)} <span class="smart-date-exact">(${escapeHtml(d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }))})</span></span>`;
}
function valueOrNotProvided(v) {
    if (v === undefined || v === null || String(v).trim() === '') {
        return `<span class="info-value not-provided">${NOT_PROVIDED_TEXT}</span>`;
    }
    return `<span class="info-value">${escapeHtml(v)}</span>`;
}
function avatarInlineStyle(name) {
    const hue = hueFromString(name || '');
    return `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
}
function findEmployee(id) {
    return employees.find(e => e.id === id) || null;
}

// ==================== TIME UTILITIES ====================
function startOfDay(d) { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; }
function startOfWeek(d) {
    const x = startOfDay(d);
    const day = x.getDay();
    const diff = (day === 0 ? 6 : day - 1);
    x.setDate(x.getDate() - diff);
    return x;
}
function formatHMS(ms) {
    if (!ms || ms < 0) ms = 0;
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
function formatHM(ms) {
    if (!ms || ms < 0) ms = 0;
    const totalMin = Math.floor(ms / 60000);
    const h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    if (h === 0 && m === 0) return '0m';
    if (h === 0) return `${m}m`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}m`;
}
function formatHours(h) {
    if (!h || h < 0) h = 0;
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    if (hh === 0 && mm === 0) return '0h';
    if (hh === 0) return `${mm}h`;
    if (mm === 0) return `${hh}h`;
    return `${hh}h ${mm}m`;
}
function formatDecimalHours(ms) {
    if (!ms || ms < 0) return '0.0h';
    return (ms / 3600000).toFixed(1) + 'h';
}
function formatClockTime(ts) {
    const d = new Date(ts);
    return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}
function formatMoney(n) {
    if (isNaN(n) || n === null || n === undefined) n = 0;
    return '$' + n.toFixed(2);
}
function sessionEnd(session) { return session.end || Date.now(); }
function sumSessionsOfStatus(sessions, statusKey, rangeStart, rangeEnd) {
    if (!Array.isArray(sessions)) return 0;
    let total = 0;
    sessions.forEach(s => {
        if ((s.status || 'production') !== statusKey) return;
        const sStart = s.start;
        const sEnd = sessionEnd(s);
        const overlapStart = Math.max(sStart, rangeStart);
        const overlapEnd = Math.min(sEnd, rangeEnd);
        if (overlapEnd > overlapStart) total += (overlapEnd - overlapStart);
    });
    return total;
}
function sumWorkSessionsInRange(sessions, rangeStart, rangeEnd) {
    let total = 0;
    PRODUCING_STATUSES.forEach(st => {
        total += sumSessionsOfStatus(sessions, st, rangeStart, rangeEnd);
    });
    return total;
}
function getAllTimeWorkTotal(sessions) {
    if (!Array.isArray(sessions)) return 0;
    let total = 0;
    sessions.forEach(s => {
        if (!PRODUCING_STATUSES.includes(s.status || 'production')) return;
        total += (sessionEnd(s) - s.start);
    });
    return total;
}
function isProducing(emp) {
    return emp.activeSession && typeof emp.activeSession.start === 'number';
}
function getTodayMsForStatus(emp, statusKey) {
    const now = Date.now();
    const todayStart = startOfDay(new Date()).getTime();
    let total = sumSessionsOfStatus(emp.timeLog || [], statusKey, todayStart, now);
    if (isProducing(emp) && emp.activeSession.status === statusKey) {
        total += Math.max(0, now - Math.max(emp.activeSession.start, todayStart));
    }
    return total;
}
function getTodayMs(emp) {
    let total = 0;
    PRODUCING_STATUSES.forEach(st => { total += getTodayMsForStatus(emp, st); });
    return total;
}
function getMsInRange(emp, start, end) {
    const now = Date.now();
    let total = sumWorkSessionsInRange(emp.timeLog || [], start, end);
    if (isProducing(emp)) {
        total += Math.max(0, Math.min(end, now) - Math.max(emp.activeSession.start, start));
    }
    return total;
}
function daysUntil(date) {
    const today = startOfDay(new Date()).getTime();
    return Math.round((date.getTime() - today) / 86400000);
}

// ==================== STATUS POPOVER ====================
function openStatusPopover(empId, anchorEl) {
    const emp = findEmployee(empId);
    if (!emp) return;
    if (!statusPopover || !statusPopoverInner) return;

    const currentStatus = emp.status || DEFAULT_STATUS;

    statusPopoverInner.innerHTML = STATUSES.map(s => `
        <button class="status-popover-chip ${s.key === currentStatus ? 'active' : ''}" data-status="${s.key}" data-emp="${empId}" type="button" role="menuitem">
            <span class="sp-dot"></span>
            <span>${escapeHtml(s.label)}</span>
        </button>
    `).join('');

    statusPopover.style.display = 'block';
    statusPopover.classList.add('open');

    const rect = anchorEl.getBoundingClientRect();
    const popRect = statusPopover.getBoundingClientRect();
    const vw = window.innerWidth;

    let placeAbove = true;
    let top = rect.top - popRect.height - 12;
    if (top < 8) {
        placeAbove = false;
        top = rect.bottom + 12;
    }
    let left = rect.left + (rect.width / 2) - (popRect.width / 2);
    const margin = 12;
    if (left < margin) left = margin;
    if (left + popRect.width > vw - margin) left = vw - popRect.width - margin;

    statusPopover.style.top = `${top}px`;
    statusPopover.style.left = `${left}px`;

    const anchorCenterX = rect.left + rect.width / 2;
    const caretLeft = anchorCenterX - left;
    if (statusPopoverCaret) {
        statusPopoverCaret.style.left = `${Math.max(14, Math.min(popRect.width - 14, caretLeft))}px`;
        statusPopoverCaret.style.marginLeft = '-6px';
    }

    if (placeAbove) statusPopover.classList.remove('caret-on-top');
    else statusPopover.classList.add('caret-on-top');

    statusPopoverEmpId = empId;
    statusPopoverAnchor = anchorEl;

    statusPopoverInner.querySelectorAll('.status-popover-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = chip.dataset.emp;
            const status = chip.dataset.status;
            closeStatusPopover();
            if (id && status) setEmployeeStatus(id, status);
        });
    });

    anchorEl.setAttribute('aria-expanded', 'true');
}
function closeStatusPopover() {
    if (!statusPopover) return;
    statusPopover.classList.remove('open');
    statusPopover.style.display = 'none';
    if (statusPopoverAnchor) {
        statusPopoverAnchor.setAttribute('aria-expanded', 'false');
    }
    statusPopoverEmpId = null;
    statusPopoverAnchor = null;
}
document.addEventListener('click', (e) => {
    if (!statusPopoverEmpId) return;
    if (statusPopover && statusPopover.contains(e.target)) return;
    closeStatusPopover();
});
window.addEventListener('scroll', () => {
    if (statusPopoverEmpId) closeStatusPopover();
}, { passive: true });
window.addEventListener('resize', () => {
    if (statusPopoverEmpId) closeStatusPopover();
});

// ==================== STATUS ====================
function getStatusDef(key) {
    return STATUSES.find(s => s.key === key) || STATUSES[0];
}
function setEmployeeStatus(id, statusKey) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;
    const newDef = getStatusDef(statusKey);
    const prevStatus = emp.status || DEFAULT_STATUS;

    if (emp.activeSession && typeof emp.activeSession.start === 'number') {
        emp.timeLog = Array.isArray(emp.timeLog) ? emp.timeLog : [];
        emp.timeLog.push({
            status: emp.activeSession.status || 'production',
            start: emp.activeSession.start,
            end: Date.now()
        });
        emp.activeSession = null;
    }

    emp.activeSession = { start: Date.now(), status: statusKey };
    emp.status = statusKey;
    saveEmployees();

    if (prevStatus !== statusKey) {
        logActivity('employee.status', id, { label: emp.name, from: prevStatus, to: statusKey });
    }

    const cardEl = employeeGrid.querySelector(`.card[data-id="${id}"]`);
    if (cardEl) {
        const dotEl = cardEl.querySelector('.card-status-dot');
        const labelEl = cardEl.querySelector('.card-status-label');
        if (dotEl) dotEl.dataset.status = statusKey;
        if (labelEl) {
            labelEl.dataset.status = statusKey;
            labelEl.textContent = newDef.label;
        }
        refreshCardTimerBadge(cardEl, emp);
    }
    if (detailPanel.classList.contains('active') && currentDetailId === id) {
        renderDetailPanel(emp);
    }
    updateStatusCounts();
    updateStats(getVisible().length);
    renderTimesheet();
    renderPay();
    renderOrgChartPreview();
    renderTimeOff();
    updateNavStatusPill();
    if (orgModalOverlay.classList.contains('active')) renderOrgChartModal();
    if (timesheetModalOverlay.classList.contains('active')) renderTimesheetModal();
    if (timeOffModalOverlay.classList.contains('active')) renderTimeOffModal();
    if (activeStatus && statusKey !== activeStatus) render();
    if (statusPopoverEmpId === id) closeStatusPopover();

    toast(`${emp.name} → ${newDef.label}`, 'info', 2000);
}
function refreshCardTimerBadge(cardEl, emp) {
    const statusLine = cardEl.querySelector('.card-status-line');
    if (!statusLine) return;
    const existing = statusLine.querySelector('.card-timer-inline');
    const shouldShow = isProducing(emp) && PRODUCING_STATUSES.includes(emp.activeSession.status);
    if (shouldShow && !existing) {
        const badge = document.createElement('span');
        badge.className = 'card-timer-inline';
        badge.dataset.timerId = emp.id;
        badge.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span class="timer-value">${formatHMS(Date.now() - emp.activeSession.start)}</span>
        `;
        statusLine.appendChild(badge);
    } else if (!shouldShow && existing) {
        existing.remove();
    }
}
function updateStatusCounts() {
    const counts = { 'off-shift': 0, 'break': 0, 'production': 0, 'overtime': 0 };
    employees.forEach(e => {
        const s = e.status || DEFAULT_STATUS;
        if (counts[s] !== undefined) counts[s]++;
    });
    countOff.textContent = counts['off-shift'];
    countBreak.textContent = counts['break'];
    countProd.textContent = counts['production'];
    countOT.textContent = counts['overtime'];
    updateNavStatusPill();
}

// ==================== BIRTHDAY HELPERS ====================
function isBirthdayToday(emp) {
    if (!emp || !emp.birthday) return false;
    const parts = String(emp.birthday).split('-').map(Number);
    if (parts.length < 3 || parts.some(isNaN)) return false;
    const [, month, day] = parts;
    const today = new Date();
    return month === (today.getMonth() + 1) && day === today.getDate();
}
function maybeBirthdayConfetti(emp) {
    if (!isBirthdayToday(emp)) return;
    if (birthdayConfettiFired.has(emp.id)) return;
    birthdayConfettiFired.add(emp.id);
    fireConfetti(BIRTHDAY_CONFETTI_MS);
    setTimeout(() => {
        toast(`🎂 It's ${emp.name}'s birthday today!`, 'success', 5000);
    }, 300);
}

// ==================== NAV STATUS PILL ====================
function updateNavStatusPill() {
    if (!navStatusPill || !navStatusText) return;
    let producing = 0;
    let breakCount = 0;
    employees.forEach(e => {
        const s = e.status || DEFAULT_STATUS;
        if (PRODUCING_STATUSES.includes(s)) producing++;
        else if (s === 'break') breakCount++;
    });

    if (producing > 0) {
        navStatusPill.classList.add('live');
        navStatusPill.classList.remove('busy');
        navStatusText.textContent = `${producing} working now`;
    } else if (breakCount > 0) {
        navStatusPill.classList.add('busy');
        navStatusPill.classList.remove('live');
        navStatusText.textContent = `${breakCount} on break`;
    } else {
        navStatusPill.classList.remove('live', 'busy');
        navStatusText.textContent = employees.length === 0 ? 'No one yet' : 'No one online';
    }
}

// ==================== LIVE TICK ====================
function startTick() {
    if (tickInterval) clearInterval(tickInterval);
    tickInterval = setInterval(() => {
        employeeGrid.querySelectorAll('.card-timer-inline').forEach(badge => {
            const empId = badge.dataset.timerId;
            const emp = employees.find(e => e.id === empId);
            if (!emp || !isProducing(emp) || !PRODUCING_STATUSES.includes(emp.activeSession.status)) {
                badge.remove(); return;
            }
            const valEl = badge.querySelector('.timer-value');
            if (valEl) valEl.textContent = formatHMS(Date.now() - emp.activeSession.start);
        });
        const liveTimer = detailBody.querySelector('.detail-live-timer .timer-value');
        if (liveTimer && currentDetailId) {
            const emp = employees.find(e => e.id === currentDetailId);
            if (emp && isProducing(emp) && PRODUCING_STATUSES.includes(emp.activeSession.status)) {
                liveTimer.textContent = formatHMS(Date.now() - emp.activeSession.start);
            }
        }
        detailBody.querySelectorAll('.session-row.live .session-duration').forEach(el => {
            const startTs = parseInt(el.dataset.liveStart, 10);
            if (!isNaN(startTs)) {
                el.textContent = formatHM(Date.now() - startTs);
            }
        });
        if (currentDetailId) {
            const emp = employees.find(e => e.id === currentDetailId);
            if (emp && isProducing(emp) && TRACKED_STATUSES.includes(emp.activeSession.status)) {
                const box = detailBody.querySelector(`.status-stat-box[data-status="${emp.activeSession.status}"] .status-stat-value`);
                if (box) {
                    box.textContent = formatHM(getTodayMsForStatus(emp, emp.activeSession.status));
                }
            }
        }
        if (Date.now() % 30000 < 1000) {
            renderTimesheet();
            if (timesheetModalOverlay.classList.contains('active')) renderTimesheetModal();
            renderPay();
        }
    }, 1000);
}

// ==================== STATUS PILL FILTER ====================
statusStrip.querySelectorAll('.status-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        const key = pill.dataset.status;
        activeStatus = (activeStatus === key) ? '' : key;
        render();
    });
});
function updateStatusPillsActive() {
    statusStrip.querySelectorAll('.status-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.status === activeStatus);
    });
}

// ==================== SORT ====================
function sortEmployees(arr) {
    const copy = arr.slice();
    switch (sortMode) {
        case 'name': return copy.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        case 'name-desc': return copy.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
        case 'department':
            return copy.sort((a, b) => {
                const d = (a.department || '').localeCompare(b.department || '');
                if (d !== 0) return d;
                return (a.name || '').localeCompare(b.name || '');
            });
        case 'date-new': return copy.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        case 'date-old': return copy.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
        case 'start-new': return copy.sort((a, b) => (b.startDate || '').localeCompare(a.startDate || ''));
        case 'start-old': return copy.sort((a, b) => (a.startDate || '').localeCompare(b.startDate || ''));
        default: return copy;
    }
}
sortSelect.addEventListener('change', () => {
    sortMode = sortSelect.value;
    try { localStorage.setItem(SORT_KEY, sortMode); } catch (e) {}
    render();
});

// ==================== DROPDOWNS ====================
function populateDropdown(selectEl, list, placeholder) {
    const prev = selectEl.value;
    selectEl.innerHTML = '';
    const ph = document.createElement('option');
    ph.value = '';
    ph.textContent = placeholder;
    selectEl.appendChild(ph);
    list.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item;
        opt.textContent = item;
        selectEl.appendChild(opt);
    });
    const addNew = document.createElement('option');
    addNew.value = '__add_new__';
    addNew.textContent = '➕ Add new…';
    selectEl.appendChild(addNew);
    if (prev && prev !== '__add_new__' && list.includes(prev)) {
        selectEl.value = prev;
    }
}
function refreshTitleDropdown() { populateDropdown(fieldTitleSelect, titles, 'Select a title…'); updateComboRemoveButtons(); }
function refreshDepartmentDropdown() { populateDropdown(fieldDepartmentSelect, departments, 'Select…'); updateComboRemoveButtons(); }
function refreshBulkDeptDropdown() { populateDropdown(bulkDeptSelect, departments, 'Select…'); updateComboRemoveButtons(); }
function refreshPayEmployeeDropdown() {
    const prev = payEmployeeSelect.value;
    payEmployeeSelect.innerHTML = '<option value="">— Choose employee —</option>';
    const sorted = employees.slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    sorted.forEach(emp => {
        const opt = document.createElement('option');
        opt.value = emp.id;
        opt.textContent = emp.name;
        payEmployeeSelect.appendChild(opt);
    });
    if (prev && employees.find(e => e.id === prev)) {
        payEmployeeSelect.value = prev;
    }
}
function refreshTimeOffEmployeeDropdown() {
    if (!toEmployeeSelect) return;
    const prev = toEmployeeSelect.value;
    toEmployeeSelect.innerHTML = '<option value="">— Choose employee —</option>';
    const sorted = employees.slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    sorted.forEach(emp => {
        const opt = document.createElement('option');
        opt.value = emp.id;
        opt.textContent = emp.name;
        toEmployeeSelect.appendChild(opt);
    });
    if (prev && employees.find(e => e.id === prev)) {
        toEmployeeSelect.value = prev;
    }
}
function refreshManagerDropdown(excludeId) {
    if (!fieldManagerSelect) return;
    const prev = fieldManagerSelect.value;
    fieldManagerSelect.innerHTML = '';
    const none = document.createElement('option');
    none.value = '';
    none.textContent = 'No manager / top of chart';
    fieldManagerSelect.appendChild(none);

    const blocked = new Set();
    if (excludeId) {
        blocked.add(excludeId);
        collectDescendants(excludeId, blocked);
    }

    const sorted = employees
        .filter(e => !blocked.has(e.id))
        .sort((a, b) => (a.name || '').localeCompare(b.name || ''));

    sorted.forEach(emp => {
        const opt = document.createElement('option');
        opt.value = emp.id;
        opt.textContent = emp.name + (emp.title ? ` — ${emp.title}` : '');
        fieldManagerSelect.appendChild(opt);
    });
    if (prev && employees.find(e => e.id === prev) && !blocked.has(prev)) {
        fieldManagerSelect.value = prev;
    }
}
function collectDescendants(id, set) {
    employees.forEach(e => {
        if (e.managerId === id && !set.has(e.id)) {
            set.add(e.id);
            collectDescendants(e.id, set);
        }
    });
}
function handleComboChange(selectEl, newInputEl) {
    if (selectEl.value === '__add_new__') {
        newInputEl.style.display = 'block';
        newInputEl.value = '';
        setTimeout(() => newInputEl.focus(), 50);
    } else {
        newInputEl.style.display = 'none';
        newInputEl.value = '';
    }
    updateComboRemoveButtons();
}
fieldTitleSelect.addEventListener('change', () => handleComboChange(fieldTitleSelect, fieldTitleNew));
fieldDepartmentSelect.addEventListener('change', () => handleComboChange(fieldDepartmentSelect, fieldDepartmentNew));
bulkDeptSelect.addEventListener('change', () => handleComboChange(bulkDeptSelect, bulkDeptNew));

// ==================== STATS ====================
function updateStats(visibleCount) {
    statTotal.textContent = employees.length;
    statVisible.textContent = visibleCount !== undefined ? visibleCount : employees.length;
    const depts = new Set(employees.map(e => e.department).filter(Boolean));
    statDepts.textContent = depts.size;
}

// ==================== FILTERING ====================
function getFilteredByDept() {
    if (!activeDept) return employees.slice();
    return employees.filter(e => e.department === activeDept);
}
function getFilteredByStatus(arr) {
    if (!activeStatus) return arr;
    return arr.filter(e => (e.status || DEFAULT_STATUS) === activeStatus);
}
function getVisible() {
    let arr = getFilteredByDept();
    arr = getFilteredByStatus(arr);
    if (searchTerm) {
        const q = searchTerm.toLowerCase();
        arr = arr.filter(e =>
            (e.name || '').toLowerCase().includes(q) ||
            (e.nickname || '').toLowerCase().includes(q) ||
            (e.title || '').toLowerCase().includes(q) ||
            (e.department || '').toLowerCase().includes(q) ||
            (e.email || '').toLowerCase().includes(q) ||
            (e.location || '').toLowerCase().includes(q) ||
            (e.hobby || '').toLowerCase().includes(q)
        );
    }
    return sortEmployees(arr);
}
function hasActiveFilter() { return !!searchTerm || !!activeDept || !!activeStatus; }

// ==================== FILTER CHIPS ====================
function renderChips() {
    if (employees.length === 0) { filterChipsWrap.style.display = 'none'; return; }
    filterChipsWrap.style.display = 'flex';
    const counts = {};
    employees.forEach(e => {
        const d = e.department || '';
        if (d) counts[d] = (counts[d] || 0) + 1;
    });
    const deptNames = Object.keys(counts).sort((a, b) => a.localeCompare(b));
    const totalCount = employees.length;
    let html = `<button class="chip ${!activeDept ? 'active' : ''}" data-dept="" type="button">All <span class="chip-count">${totalCount}</span></button>`;
    deptNames.forEach(d => {
        html += `<button class="chip ${activeDept === d ? 'active' : ''}" data-dept="${escapeHtml(d)}" type="button">${escapeHtml(d)} <span class="chip-count">${counts[d]}</span></button>`;
    });
    filterChips.innerHTML = html;
    filterChips.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            activeDept = chip.dataset.dept;
            render();
        });
    });
    clearFiltersBtn.style.display = hasActiveFilter() ? 'inline-flex' : 'none';
}

// ==================== RECENTLY ADDED ====================
function renderRecent() {
    if (employees.length === 0) { recentStrip.style.display = 'none'; return; }
    const recent = employees.slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).slice(0, 3);
    if (recent.length === 0) { recentStrip.style.display = 'none'; return; }
    recentList.innerHTML = recent.map(emp => {
        const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="">` : `<span>${escapeHtml(initials(emp.name))}</span>`;
        return `<button class="recent-chip" data-id="${emp.id}" type="button"><span class="recent-chip-avatar">${avatarContent}</span><span>${escapeHtml(emp.name)}</span></button>`;
    }).join('');
    recentList.querySelectorAll('.recent-chip').forEach(chip => {
        chip.addEventListener('click', () => openDetailPanel(chip.dataset.id));
    });
    recentStrip.style.display = 'block';
}

// ==================== ANNOUNCEMENTS RENDER ====================
function renderAnnouncements() {
    if (!announceStrip) return;
    const all = sortedAnnouncements();
    const pinned = all.find(a => a.pinned);

    if (announceStripCount) {
        announceStripCount.textContent = String(all.length);
        announceStripCount.classList.toggle('zero', all.length === 0);
    }

    if (announceStripPinned) {
        if (pinned) {
            announceStripPinned.style.display = 'inline';
            announceStripPinned.innerHTML = `· <strong>📌 ${escapeHtml(pinned.title)}</strong>`;
        } else if (all.length > 0) {
            announceStripPinned.style.display = 'inline';
            announceStripPinned.innerHTML = `· <strong>${escapeHtml(all[0].title)}</strong>`;
        } else {
            announceStripPinned.style.display = 'none';
            announceStripPinned.innerHTML = '';
        }
    }

    if (announceModalOverlay && announceModalOverlay.classList.contains('active')) {
        renderAnnounceModal();
    }
}
function announcementRowHTML(a, opts) {
    const opts2 = opts || {};
    const showActions = opts2.showActions !== false;
    const authorEmp = a.authorId ? findEmployee(a.authorId) : null;
    const authorName = authorEmp ? authorEmp.name : (a.authorName || 'Anonymous');
    const avatarStyle = avatarInlineStyle(authorName);
    const avatarContent = authorEmp && authorEmp.photo
        ? `<img src="${authorEmp.photo}" alt="">`
        : `<span>${escapeHtml(initials(authorName))}</span>`;
    const pinnedBadge = a.pinned ? `<span class="announce-pin-badge">📌 Pinned</span>` : '';
    const actions = showActions ? `
        <div class="announce-actions">
            <button class="announce-icon-btn edit" data-announce-edit="${a.id}" title="Edit" aria-label="Edit" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="announce-icon-btn delete" data-announce-delete="${a.id}" title="Delete" aria-label="Delete" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
        </div>
    ` : '';
    return `
        <div class="announce-row ${a.pinned ? 'pinned' : ''}" data-announce-id="${a.id}">
            <div class="announce-avatar" style="${avatarStyle}">${avatarContent}</div>
            <div class="announce-body">
                <div class="announce-row-title">${escapeHtml(a.title)} ${pinnedBadge}</div>
                <div class="announce-meta">${escapeHtml(authorName)} · ${escapeHtml(relativeTime(a.createdAt))}${a.updatedAt > a.createdAt ? ' · edited' : ''}</div>
                <div class="announce-text">${escapeHtml(a.body)}</div>
            </div>
            ${actions}
        </div>
    `;
}
function wireAnnouncementActions(container) {
    container.querySelectorAll('[data-announce-edit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openAnnounceEditModal(btn.dataset.announceEdit);
        });
    });
    container.querySelectorAll('[data-announce-delete]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            askDeleteAnnouncement(btn.dataset.announceDelete);
        });
    });
}
function openAnnounceModal() {
    renderAnnounceModal();
    announceModalOverlay.classList.add('active');
}
function closeAnnounceModal() {
    announceModalOverlay.classList.remove('active');
}
function renderAnnounceModal() {
    if (!announceModalList) return;
    const all = sortedAnnouncements();
    if (announceModalSub) {
        announceModalSub.textContent = `${all.length} ${all.length === 1 ? 'post' : 'posts'}${all.some(a => a.pinned) ? ' · some pinned' : ''}`;
    }
    if (all.length === 0) {
        announceModalList.innerHTML = `<div class="announce-empty">No announcements yet. Click "+ Post" to create one.</div>`;
        return;
    }
    announceModalList.innerHTML = all.map(a => announcementRowHTML(a, { showActions: true })).join('');
    wireAnnouncementActions(announceModalList);
}
function refreshAnnounceAuthorDropdown(selectedId) {
    if (!announceFieldAuthor) return;
    announceFieldAuthor.innerHTML = '<option value="">— Anonymous / HR —</option>';
    const sorted = employees.slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    sorted.forEach(emp => {
        const opt = document.createElement('option');
        opt.value = emp.id;
        opt.textContent = emp.name;
        announceFieldAuthor.appendChild(opt);
    });
    if (selectedId && employees.find(e => e.id === selectedId)) {
        announceFieldAuthor.value = selectedId;
    }
}
function openAnnounceEditModal(id) {
    if (demoBlocked('Editing announcements')) return;
    if (id) {
        const a = announcements.find(x => x.id === id);
        if (!a) return;
        announceEditTitle.textContent = 'Edit Announcement';
        announceEditId.value = a.id;
        announceFieldTitle.value = a.title;
        announceFieldBody.value = a.body;
        announceFieldPinned.checked = !!a.pinned;
        refreshAnnounceAuthorDropdown(a.authorId);
    } else {
        announceEditTitle.textContent = 'New Announcement';
        announceEditId.value = '';
        announceFieldTitle.value = '';
        announceFieldBody.value = '';
        announceFieldPinned.checked = false;
        refreshAnnounceAuthorDropdown(null);
    }
    announceEditError.style.display = 'none';
    announceEditOverlay.classList.add('active');
    setTimeout(() => announceFieldTitle.focus(), 100);
}
function closeAnnounceEditModal() {
    announceEditOverlay.classList.remove('active');
}
function saveAnnouncementFromModal() {
    const title = announceFieldTitle.value.trim();
    const body = announceFieldBody.value.trim();
    const authorId = announceFieldAuthor.value || null;
    const pinned = !!announceFieldPinned.checked;
    if (!title) {
        announceEditError.textContent = 'Please enter a title.';
        announceEditError.style.display = 'block';
        return;
    }
    if (!body) {
        announceEditError.textContent = 'Please enter a message.';
        announceEditError.style.display = 'block';
        return;
    }
    const authorEmp = authorId ? findEmployee(authorId) : null;
    const authorName = authorEmp ? authorEmp.name : '';
    const id = announceEditId.value;
    const now = Date.now();
    if (id) {
        const idx = announcements.findIndex(x => x.id === id);
        if (idx > -1) {
            announcements[idx] = {
                ...announcements[idx],
                title, body, authorId, authorName, pinned,
                updatedAt: now
            };
            saveAnnouncements();
            logActivity('announce.edit', id, { label: title });
            toast('Announcement updated', 'success');
        }
    } else {
        const newA = {
            id: uidAnnounce(),
            title, body, authorId, authorName, pinned,
            createdAt: now,
            updatedAt: now
        };
        announcements.unshift(newA);
        saveAnnouncements();
        logActivity('announce.add', newA.id, { label: title });
        toast('Announcement posted', 'success');
    }
    closeAnnounceEditModal();
    renderAnnouncements();
}
function askDeleteAnnouncement(id) {
    if (demoBlocked('Deleting announcements')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const a = announcements.find(x => x.id === id);
    if (!a) return;
    pendingAnnounceDelete = id;
    announceDeleteMessage.textContent = `Move "${a.title}" to Trash? You can restore it within 30 days.`;
    announceDeleteOverlay.classList.add('active');
}
function closeAnnounceDelete() {
    announceDeleteOverlay.classList.remove('active');
    pendingAnnounceDelete = null;
}
function confirmAnnouncementDelete() {
    if (!pendingAnnounceDelete) return;
    const id = pendingAnnounceDelete;
    const a = announcements.find(x => x.id === id);
    if (!a) { closeAnnounceDelete(); return; }
    const snapshot = JSON.parse(JSON.stringify(a));
    announcements = announcements.filter(x => x.id !== id);
    saveAnnouncements();
    trashEntity('announcement', snapshot, a.title, a.authorName || 'Company feed');
    logActivity('announce.delete', id, { label: a.title });
    closeAnnounceDelete();
    renderAnnouncements();
    toast(`Moved "${a.title}" to Trash`, 'success');
}

if (announceStrip) {
    announceStrip.addEventListener('click', openAnnounceModal);
}
if (announceModalClose) announceModalClose.addEventListener('click', closeAnnounceModal);
if (announceModalOverlay) announceModalOverlay.addEventListener('click', (e) => {
    if (e.target === announceModalOverlay) closeAnnounceModal();
});
if (announceModalAddBtn) announceModalAddBtn.addEventListener('click', () => openAnnounceEditModal());
if (announceEditClose) announceEditClose.addEventListener('click', closeAnnounceEditModal);
if (announceEditCancelBtn) announceEditCancelBtn.addEventListener('click', closeAnnounceEditModal);
if (announceEditOverlay) announceEditOverlay.addEventListener('click', (e) => {
    if (e.target === announceEditOverlay) closeAnnounceEditModal();
});
if (announceEditSaveBtn) announceEditSaveBtn.addEventListener('click', saveAnnouncementFromModal);
if (announceDeleteClose) announceDeleteClose.addEventListener('click', closeAnnounceDelete);
if (announceDeleteCancelBtn) announceDeleteCancelBtn.addEventListener('click', closeAnnounceDelete);
if (announceDeleteOverlay) announceDeleteOverlay.addEventListener('click', (e) => {
    if (e.target === announceDeleteOverlay) closeAnnounceDelete();
});
if (announceDeleteApplyBtn) announceDeleteApplyBtn.addEventListener('click', confirmAnnouncementDelete);

// ==================== KUDOS RENDER ====================
function kudosItemHTML(k, opts) {
    const opts2 = opts || {};
    const isModal = !!opts2.modal;
    const fromEmp = k.fromId ? findEmployee(k.fromId) : null;
    const toEmp = findEmployee(k.toId);
    const fromName = fromEmp ? fromEmp.name : (k.fromName || 'Someone');
    const toName = toEmp ? toEmp.name : (k.toName || 'Someone');
    const badge = kudosBadgeInfo(k.badge);
    const badgeHtml = k.badge ? `<span class="kudos-badge" title="${escapeHtml(badge.label)}">${badge.emoji}</span>` : '';
    const avatarContent = toEmp && toEmp.photo
        ? `<img src="${toEmp.photo}" alt="">`
        : `<span>${escapeHtml(initials(toName))}</span>`;
    const wrapperClass = isModal ? 'kudos-modal-item' : 'kudos-item';
    const actionsCell = isModal ? `
        <div class="kudos-modal-actions-cell">
            <button class="announce-icon-btn delete" data-kudos-delete="${k.id}" title="Delete" aria-label="Delete" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
        </div>
    ` : '';
    return `
        <div class="${wrapperClass}" data-kudos-id="${k.id}" data-to-id="${k.toId}">
            <div class="kudos-avatar" style="${avatarInlineStyle(toName)}">${avatarContent}</div>
            <div class="kudos-body">
                <div class="kudos-line">${badgeHtml}<strong>${escapeHtml(fromName)}</strong><span class="kudos-arrow">→</span><strong>${escapeHtml(toName)}</strong></div>
                <div class="kudos-message">${escapeHtml(k.message)}</div>
                <div class="kudos-time">${escapeHtml(relativeTime(k.createdAt))}</div>
            </div>
            ${actionsCell}
        </div>
    `;
}
function wireKudosActions(container) {
    container.querySelectorAll('[data-kudos-delete]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            askDeleteKudos(btn.dataset.kudosDelete);
        });
    });
    container.querySelectorAll('.kudos-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            const toId = item.dataset.toId;
            if (toId) openDetailPanel(toId);
        });
    });
}
function renderKudos() {
    if (!kudosList) return;
    const all = sortedKudos();
    if (all.length === 0) {
        kudosList.innerHTML = `<div class="kudos-empty">No kudos yet. Click "+ Give" to celebrate a teammate.</div>`;
        if (kudosSub) kudosSub.textContent = 'Nice things people said about each other.';
        return;
    }
    const top = all.slice(0, KUDOS_PREVIEW_COUNT);
    kudosList.innerHTML = top.map(k => kudosItemHTML(k)).join('');
    if (kudosSub) {
        kudosSub.textContent = `${all.length} ${all.length === 1 ? 'note' : 'notes'} of appreciation`;
    }
    wireKudosActions(kudosList);
}
function openKudosModal() {
    renderKudosModal();
    kudosModalOverlay.classList.add('active');
}
function closeKudosModal() {
    kudosModalOverlay.classList.remove('active');
}
function renderKudosModal() {
    if (!kudosModalList) return;
    const all = sortedKudos();
    if (kudosModalSub) {
        kudosModalSub.textContent = `${all.length} kudos in the wall`;
    }
    if (all.length === 0) {
        kudosModalList.innerHTML = `<div class="kudos-empty">No kudos yet. Click "+ Give Kudos" to start.</div>`;
        return;
    }
    kudosModalList.innerHTML = all.map(k => kudosItemHTML(k, { modal: true })).join('');
    wireKudosActions(kudosModalList);
}
function refreshKudosDropdowns(preselectFromId) {
    if (!kudosFieldFrom || !kudosFieldTo) return;
    const prevTo = kudosFieldTo.value;
    kudosFieldFrom.innerHTML = '<option value="">— Choose colleague —</option>';
    kudosFieldTo.innerHTML = '<option value="">— Choose colleague —</option>';
    const sorted = employees.slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    sorted.forEach(emp => {
        const opt1 = document.createElement('option');
        opt1.value = emp.id;
        opt1.textContent = emp.name;
        kudosFieldFrom.appendChild(opt1);
        const opt2 = document.createElement('option');
        opt2.value = emp.id;
        opt2.textContent = emp.name;
        kudosFieldTo.appendChild(opt2);
    });
    if (preselectFromId && employees.find(e => e.id === preselectFromId)) {
        kudosFieldFrom.value = preselectFromId;
    }
    if (prevTo && employees.find(e => e.id === prevTo)) {
        kudosFieldTo.value = prevTo;
    }
}
function openKudosGiveModal(fromId, toId) {
    if (demoBlocked('Giving kudos')) return;
    refreshKudosDropdowns(fromId);
    if (toId && employees.find(e => e.id === toId)) kudosFieldTo.value = toId;
    kudosFieldMessage.value = '';
    kudosFieldBadge.value = '';
    kudosGiveError.style.display = 'none';
    kudosGiveOverlay.classList.add('active');
    setTimeout(() => kudosFieldFrom.focus(), 100);
}
function closeKudosGiveModal() {
    kudosGiveOverlay.classList.remove('active');
}
function saveKudosFromModal() {
    const fromId = kudosFieldFrom.value || null;
    const toId = kudosFieldTo.value || null;
    const message = kudosFieldMessage.value.trim();
    const badge = kudosFieldBadge.value || '';
    if (!fromId) {
        kudosGiveError.textContent = 'Please choose who this is from.';
        kudosGiveError.style.display = 'block';
        return;
    }
    if (!toId) {
        kudosGiveError.textContent = 'Please choose who this is for.';
        kudosGiveError.style.display = 'block';
        return;
    }
    if (fromId === toId) {
        kudosGiveError.textContent = 'You can\'t give kudos to yourself.';
        kudosGiveError.style.display = 'block';
        return;
    }
    if (!message) {
        kudosGiveError.textContent = 'Please write a short message.';
        kudosGiveError.style.display = 'block';
        return;
    }
    const fromEmp = findEmployee(fromId);
    const toEmp = findEmployee(toId);
    if (!fromEmp || !toEmp) return;
    const newK = {
        id: uidKudos(),
        fromId, fromName: fromEmp.name,
        toId, toName: toEmp.name,
        message, badge,
        createdAt: Date.now()
    };
    kudos.unshift(newK);
    saveKudos();
    logActivity('kudos.give', newK.id, { label: `${fromEmp.name} → ${toEmp.name}` });
    closeKudosGiveModal();
    renderKudos();
    if (kudosModalOverlay.classList.contains('active')) renderKudosModal();
    if (currentDetailId === toId) renderDetailPanel(toEmp);
    toast(`Kudos sent to ${toEmp.name} ${badge ? kudosBadgeInfo(badge).emoji : ''}`, 'success', 3000);
}
function askDeleteKudos(id) {
    if (demoBlocked('Deleting kudos')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const k = kudos.find(x => x.id === id);
    if (!k) return;
    pendingKudosDelete = id;
    const toEmp = findEmployee(k.toId);
    kudosDeleteMessage.textContent = `Delete this kudos for ${toEmp ? toEmp.name : 'someone'}? This cannot be undone.`;
    kudosDeleteOverlay.classList.add('active');
}
function closeKudosDelete() {
    kudosDeleteOverlay.classList.remove('active');
    pendingKudosDelete = null;
}
function confirmKudosDelete() {
    if (!pendingKudosDelete) return;
    const id = pendingKudosDelete;
    const k = kudos.find(x => x.id === id);
    kudos = kudos.filter(x => x.id !== id);
    saveKudos();
    logActivity('kudos.delete', id, { label: k ? `${k.fromName} → ${k.toName}` : '' });
    closeKudosDelete();
    renderKudos();
    if (kudosModalOverlay.classList.contains('active')) renderKudosModal();
    if (currentDetailId && k && currentDetailId === k.toId) {
        const emp = findEmployee(k.toId);
        if (emp) renderDetailPanel(emp);
    }
    toast('Kudos removed', 'success');
}

if (kudosCard) {
    kudosCard.addEventListener('click', (e) => {
        if (e.target.closest('#kudosGiveBtn')) return;
        if (e.target.closest('.kudos-item')) return;
        openKudosModal();
    });
    kudosCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.closest('#kudosGiveBtn')) return;
            e.preventDefault();
            openKudosModal();
        }
    });
}
if (kudosGiveBtn) {
    kudosGiveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openKudosGiveModal();
    });
}
if (kudosViewAll) {
    kudosViewAll.addEventListener('click', (e) => {
        e.stopPropagation();
        openKudosModal();
    });
}
if (kudosModalClose) kudosModalClose.addEventListener('click', closeKudosModal);
if (kudosModalOverlay) kudosModalOverlay.addEventListener('click', (e) => {
    if (e.target === kudosModalOverlay) closeKudosModal();
});
if (kudosModalGiveBtn) {
    kudosModalGiveBtn.addEventListener('click', () => {
        closeKudosModal();
        openKudosGiveModal();
    });
}
if (kudosGiveClose) kudosGiveClose.addEventListener('click', closeKudosGiveModal);
if (kudosGiveCancelBtn) kudosGiveCancelBtn.addEventListener('click', closeKudosGiveModal);
if (kudosGiveOverlay) kudosGiveOverlay.addEventListener('click', (e) => {
    if (e.target === kudosGiveOverlay) closeKudosGiveModal();
});
if (kudosGiveSaveBtn) kudosGiveSaveBtn.addEventListener('click', saveKudosFromModal);
if (kudosDeleteClose) kudosDeleteClose.addEventListener('click', closeKudosDelete);
if (kudosDeleteCancelBtn) kudosDeleteCancelBtn.addEventListener('click', closeKudosDelete);
if (kudosDeleteOverlay) kudosDeleteOverlay.addEventListener('click', (e) => {
    if (e.target === kudosDeleteOverlay) closeKudosDelete();
});
if (kudosDeleteApplyBtn) kudosDeleteApplyBtn.addEventListener('click', confirmKudosDelete);

// ==================== NOTES RENDER ====================
function noteCardHTML(n, opts) {
    const opts2 = opts || {};
    const showActions = opts2.showActions !== false;
    const actions = showActions ? `
        <div class="note-actions">
            <button class="note-icon-btn edit" data-note-edit="${n.id}" title="Edit" aria-label="Edit" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="note-icon-btn delete" data-note-delete="${n.id}" title="Delete" aria-label="Delete" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
        </div>
    ` : '';
    return `
        <div class="note-modal-card" data-type="${n.type}" data-note-id="${n.id}">
            <div class="note-head">
                <span class="note-type">${escapeHtml(noteTypeLabel(n.type))}</span>
                <span class="note-date">${escapeHtml(formatDate(n.date))}</span>
                ${n.private ? `<span class="note-private-badge">🔒 Private</span>` : ''}
            </div>
            <div class="note-body">${escapeHtml(n.body)}</div>
            ${actions}
        </div>
    `;
}
function wireNoteActions(container) {
    container.querySelectorAll('[data-note-edit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openNoteEditModal(btn.dataset.noteEdit);
        });
    });
    container.querySelectorAll('[data-note-delete]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            askDeleteNote(btn.dataset.noteDelete);
        });
    });
}
function openNotesModal(empId) {
    const emp = findEmployee(empId);
    if (!emp) return;
    notesModalEmployeeId = empId;
    renderNotesModal();
    notesModalOverlay.classList.add('active');
}
function closeNotesModal() {
    notesModalOverlay.classList.remove('active');
    notesModalEmployeeId = null;
}
function renderNotesModal() {
    if (!notesModalList) return;
    const empId = notesModalEmployeeId;
    const emp = empId ? findEmployee(empId) : null;
    if (!emp) {
        notesModalTitle.textContent = 'Notes & 1-on-1s';
        notesModalSub.textContent = '—';
        notesModalList.innerHTML = `<div class="notes-empty">No employee selected.</div>`;
        return;
    }
    notesModalTitle.textContent = `Notes · ${emp.name}`;
    const list = notesForEmployee(empId);
    notesModalSub.textContent = `${list.length} ${list.length === 1 ? 'note' : 'notes'} · 1-on-1s, feedback, warnings`;
    if (list.length === 0) {
        notesModalList.innerHTML = `<div class="notes-empty">No notes yet. Click "+ Add Note" to start.</div>`;
        return;
    }
    notesModalList.innerHTML = list.map(n => noteCardHTML(n, { showActions: true })).join('');
    wireNoteActions(notesModalList);
}
function openNoteEditModal(id) {
    if (demoBlocked('Editing notes')) return;
    const empId = notesModalEmployeeId || currentDetailId;
    if (!empId) return;
    noteEditingEmployeeId = empId;
    if (id) {
        const n = notes.find(x => x.id === id);
        if (!n) return;
        noteEditTitle.textContent = 'Edit Note';
        noteEditId.value = n.id;
        noteFieldType.value = n.type;
        noteFieldDate.value = n.date;
        noteFieldBody.value = n.body;
        noteFieldPrivate.checked = !!n.private;
    } else {
        noteEditTitle.textContent = 'New Note';
        noteEditId.value = '';
        noteFieldType.value = 'note';
        noteFieldDate.value = new Date().toISOString().slice(0, 10);
        noteFieldBody.value = '';
        noteFieldPrivate.checked = false;
    }
    noteEditError.style.display = 'none';
    noteEditOverlay.classList.add('active');
    setTimeout(() => noteFieldBody.focus(), 100);
}
function closeNoteEditModal() {
    noteEditOverlay.classList.remove('active');
}
function saveNoteFromModal() {
    const empId = noteEditingEmployeeId;
    if (!empId) return;
    const type = noteFieldType.value;
    const date = noteFieldDate.value || new Date().toISOString().slice(0, 10);
    const body = noteFieldBody.value.trim();
    const isPrivate = !!noteFieldPrivate.checked;
    if (!body) {
        noteEditError.textContent = 'Please write something.';
        noteEditError.style.display = 'block';
        return;
    }
    const id = noteEditId.value;
    const now = Date.now();
    if (id) {
        const idx = notes.findIndex(x => x.id === id);
        if (idx > -1) {
            notes[idx] = { ...notes[idx], type, date, body, private: isPrivate, updatedAt: now };
            saveNotes();
            logActivity('note.edit', id, { label: `${findEmployee(empId)?.name || ''} — ${noteTypeLabel(type)}` });
            toast('Note updated', 'success');
        }
    } else {
        const newN = {
            id: uidNote(),
            employeeId: empId,
            type, date, body,
            private: isPrivate,
            createdAt: now, updatedAt: now
        };
        notes.unshift(newN);
        saveNotes();
        logActivity('note.add', newN.id, { label: `${findEmployee(empId)?.name || ''} — ${noteTypeLabel(type)}` });
        toast('Note added', 'success');
    }
    closeNoteEditModal();
    if (notesModalOverlay.classList.contains('active')) renderNotesModal();
    if (currentDetailId === empId) {
        const emp = findEmployee(empId);
        if (emp) renderDetailPanel(emp);
    }
}
let pendingNoteDeleteId = null;
function askDeleteNote(id) {
    if (demoBlocked('Deleting notes')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    pendingNoteDeleteId = id;
    noteDeleteMessage.textContent = 'Delete this note? This cannot be undone.';
    noteDeleteOverlay.classList.add('active');
}
function closeNoteDelete() {
    noteDeleteOverlay.classList.remove('active');
    pendingNoteDeleteId = null;
}
function confirmNoteDelete() {
    if (!pendingNoteDeleteId) return;
    const id = pendingNoteDeleteId;
    const n = notes.find(x => x.id === id);
    notes = notes.filter(x => x.id !== id);
    saveNotes();
    logActivity('note.delete', id, { label: n ? `${findEmployee(n.employeeId)?.name || ''} — ${noteTypeLabel(n.type)}` : '' });
    closeNoteDelete();
    if (notesModalOverlay.classList.contains('active')) renderNotesModal();
    if (n && currentDetailId === n.employeeId) {
        const emp = findEmployee(n.employeeId);
        if (emp) renderDetailPanel(emp);
    }
    toast('Note removed', 'success');
}

if (notesAddBtn) {
    notesAddBtn.addEventListener('click', () => {
        if (!notesModalEmployeeId && currentDetailId) {
            notesModalEmployeeId = currentDetailId;
        }
        openNoteEditModal();
    });
}
if (notesModalClose) notesModalClose.addEventListener('click', closeNotesModal);
if (notesModalOverlay) notesModalOverlay.addEventListener('click', (e) => {
    if (e.target === notesModalOverlay) closeNotesModal();
});
if (noteEditClose) noteEditClose.addEventListener('click', closeNoteEditModal);
if (noteEditCancelBtn) noteEditCancelBtn.addEventListener('click', closeNoteEditModal);
if (noteEditOverlay) noteEditOverlay.addEventListener('click', (e) => {
    if (e.target === noteEditOverlay) closeNoteEditModal();
});
if (noteEditSaveBtn) noteEditSaveBtn.addEventListener('click', saveNoteFromModal);
if (noteDeleteClose) noteDeleteClose.addEventListener('click', closeNoteDelete);
if (noteDeleteCancelBtn) noteDeleteCancelBtn.addEventListener('click', closeNoteDelete);
if (noteDeleteOverlay) noteDeleteOverlay.addEventListener('click', (e) => {
    if (e.target === noteDeleteOverlay) closeNoteDelete();
});
if (noteDeleteApplyBtn) noteDeleteApplyBtn.addEventListener('click', confirmNoteDelete);

// ==================== JOB HISTORY RENDER ====================
function jobHistoryItemHTML(h, opts) {
    const opts2 = opts || {};
    const showActions = opts2.showActions !== false;
    const kind = jobHistoryKindInfo(h.kind);
    const changeLine = (h.from || h.to)
        ? `<div class="job-history-change"><strong>${escapeHtml(h.from || '—')}</strong> → <strong>${escapeHtml(h.to || '—')}</strong></div>`
        : '';
    return `
        <div class="job-history-item">
            <div class="job-history-dot" data-kind="${h.kind}">${kind.icon}</div>
            <div class="job-history-body">
                <div class="job-history-summary">${escapeHtml(h.summary)}</div>
                ${changeLine}
                ${h.notes ? `<div class="job-history-notes">${escapeHtml(h.notes)}</div>` : ''}
            </div>
            <div class="job-history-date">${escapeHtml(formatDate(h.date))}</div>
        </div>
    `;
}
function wireJobHistoryActions(container) {
    container.querySelectorAll('[data-jh-edit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openJobHistoryEditModal(btn.dataset.jhEdit);
        });
    });
    container.querySelectorAll('[data-jh-delete]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            askDeleteJobHistory(btn.dataset.jhDelete);
        });
    });
}
function openJobHistoryEditModal(id) {
    if (demoBlocked('Editing job history')) return;
    const empId = currentDetailId;
    if (!empId) return;
    jobHistoryEditingEmployeeId = empId;
    if (id) {
        const h = jobHistory.find(x => x.id === id);
        if (!h) return;
        jobHistoryEditTitle.textContent = 'Edit Job History Entry';
        jobHistoryEditId.value = h.id;
        jhFieldKind.value = h.kind;
        jhFieldSummary.value = h.summary;
        jhFieldFrom.value = h.from || '';
        jhFieldTo.value = h.to || '';
        jhFieldDate.value = h.date || new Date().toISOString().slice(0, 10);
        jhFieldNotes.value = h.notes || '';
    } else {
        jobHistoryEditTitle.textContent = 'Add Job History Entry';
        jobHistoryEditId.value = '';
        jhFieldKind.value = 'title';
        jhFieldSummary.value = '';
        jhFieldFrom.value = '';
        jhFieldTo.value = '';
        jhFieldDate.value = new Date().toISOString().slice(0, 10);
        jhFieldNotes.value = '';
    }
    jobHistoryEditError.style.display = 'none';
    jobHistoryEditOverlay.classList.add('active');
    setTimeout(() => jhFieldSummary.focus(), 100);
}
function closeJobHistoryEditModal() {
    jobHistoryEditOverlay.classList.remove('active');
}
function saveJobHistoryFromModal() {
    const empId = jobHistoryEditingEmployeeId;
    if (!empId) return;
    const kind = jhFieldKind.value;
    const summary = jhFieldSummary.value.trim();
    const from = jhFieldFrom.value.trim();
    const to = jhFieldTo.value.trim();
    const date = jhFieldDate.value || new Date().toISOString().slice(0, 10);
    const notesVal = jhFieldNotes.value.trim();
    if (!summary) {
        jobHistoryEditError.textContent = 'Please add a short summary.';
        jobHistoryEditError.style.display = 'block';
        return;
    }
    const id = jobHistoryEditId.value;
    if (id) {
        const idx = jobHistory.findIndex(x => x.id === id);
        if (idx > -1) {
            jobHistory[idx] = { ...jobHistory[idx], kind, summary, from, to, date, notes: notesVal };
            saveJobHistory();
            logActivity('jobhistory.edit', id, { label: summary });
            toast('Job history updated', 'success');
        }
    } else {
        const newH = {
            id: uidJobHistory(),
            employeeId: empId,
            kind, summary, from, to, date,
            notes: notesVal,
            createdAt: Date.now()
        };
        jobHistory.push(newH);
        saveJobHistory();
        logActivity('jobhistory.add', newH.id, { label: summary });
        toast('Job history added', 'success');
    }
    closeJobHistoryEditModal();
    if (currentDetailId === empId) {
        const emp = findEmployee(empId);
        if (emp) renderDetailPanel(emp);
    }
}
function askDeleteJobHistory(id) {
    if (demoBlocked('Deleting job history')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const h = jobHistory.find(x => x.id === id);
    if (!h) return;
    pendingJobHistoryDelete = id;
    jobHistoryDeleteMessage.textContent = `Move "${h.summary}" to Trash? You can restore it within 30 days.`;
    jobHistoryDeleteOverlay.classList.add('active');
}
function closeJobHistoryDelete() {
    jobHistoryDeleteOverlay.classList.remove('active');
    pendingJobHistoryDelete = null;
}
function confirmJobHistoryDelete() {
    if (!pendingJobHistoryDelete) return;
    const id = pendingJobHistoryDelete;
    const h = jobHistory.find(x => x.id === id);
    if (!h) { closeJobHistoryDelete(); return; }
    const snapshot = JSON.parse(JSON.stringify(h));
    jobHistory = jobHistory.filter(x => x.id !== id);
    saveJobHistory();
    const emp = findEmployee(h.employeeId);
    trashEntity('jobhistory', snapshot, h.summary, emp ? emp.name : '', null);
    logActivity('jobhistory.delete', id, { label: h.summary });
    closeJobHistoryDelete();
    if (currentDetailId === h.employeeId) {
        if (emp) renderDetailPanel(emp);
    }
    toast(`Moved "${h.summary}" to Trash`, 'success');
}

if (jobHistoryEditClose) jobHistoryEditClose.addEventListener('click', closeJobHistoryEditModal);
if (jobHistoryEditCancelBtn) jobHistoryEditCancelBtn.addEventListener('click', closeJobHistoryEditModal);
if (jobHistoryEditOverlay) jobHistoryEditOverlay.addEventListener('click', (e) => {
    if (e.target === jobHistoryEditOverlay) closeJobHistoryEditModal();
});
if (jobHistoryEditSaveBtn) jobHistoryEditSaveBtn.addEventListener('click', saveJobHistoryFromModal);
if (jobHistoryDeleteClose) jobHistoryDeleteClose.addEventListener('click', closeJobHistoryDelete);
if (jobHistoryDeleteCancelBtn) jobHistoryDeleteCancelBtn.addEventListener('click', closeJobHistoryDelete);
if (jobHistoryDeleteOverlay) jobHistoryDeleteOverlay.addEventListener('click', (e) => {
    if (e.target === jobHistoryDeleteOverlay) closeJobHistoryDelete();
});
if (jobHistoryDeleteApplyBtn) jobHistoryDeleteApplyBtn.addEventListener('click', confirmJobHistoryDelete);

// ==================== GOALS RENDER ====================
function goalRowHTML(g, opts) {
    const opts2 = opts || {};
    const isModal = !!opts2.modal;
    const owner = findEmployee(g.ownerId);
    const ownerName = owner ? owner.name : 'Unknown';
    const catLabel = goalCategoryLabel(g.category);
    const statLabel = goalStatusLabel(g.status);
    const dueLabel = g.dueDate ? formatDate(g.dueDate) : '';
    const ownerAvatar = owner
        ? (owner.photo ? `<img src="${owner.photo}" alt="">` : `<span>${escapeHtml(initials(ownerName))}</span>`)
        : `<span>?</span>`;
    const actionsCell = isModal ? `
        <div class="goal-modal-actions-cell">
            <button class="note-icon-btn edit" data-goal-edit="${g.id}" title="Edit" aria-label="Edit" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="note-icon-btn delete" data-goal-delete="${g.id}" title="Delete" aria-label="Delete" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
        </div>
    ` : '';
    if (isModal) {
        return `
            <div class="goal-modal-row" data-goal-id="${g.id}" data-owner-id="${g.ownerId}">
                <div>
                    <div class="goal-top">
                        <div class="goal-owner-avatar" style="${avatarInlineStyle(ownerName)}">${ownerAvatar}</div>
                        <span class="goal-owner-name">${escapeHtml(ownerName)}</span>
                    </div>
                    <div class="goal-title">${escapeHtml(g.title)}</div>
                    ${g.description ? `<div class="job-history-notes">${escapeHtml(g.description)}</div>` : ''}
                    <div class="goal-progress-wrap">
                        <div class="goal-progress-bar"><div class="goal-progress-fill" data-status="${g.status}" style="width: ${g.progress}%"></div></div>
                        <span class="goal-progress-pct">${g.progress}%</span>
                    </div>
                    <div class="goal-meta">
                        <span class="goal-status" data-status="${g.status}">${escapeHtml(statLabel)}</span>
                        <span class="goal-due">${escapeHtml(catLabel)}${dueLabel ? ` · due ${escapeHtml(dueLabel)}` : ''}</span>
                    </div>
                </div>
                ${actionsCell}
            </div>
        `;
    }
    return `
        <div class="goal-row" data-goal-id="${g.id}" data-owner-id="${g.ownerId}">
            <div class="goal-top">
                <div class="goal-owner-avatar" style="${avatarInlineStyle(ownerName)}">${ownerAvatar}</div>
                <span class="goal-owner-name">${escapeHtml(ownerName)}</span>
            </div>
            <div class="goal-title">${escapeHtml(g.title)}</div>
            <div class="goal-progress-wrap">
                <div class="goal-progress-bar"><div class="goal-progress-fill" data-status="${g.status}" style="width: ${g.progress}%"></div></div>
                <span class="goal-progress-pct">${g.progress}%</span>
            </div>
            <div class="goal-meta">
                <span class="goal-status" data-status="${g.status}">${escapeHtml(statLabel)}</span>
                ${dueLabel ? `<span class="goal-due">due ${escapeHtml(dueLabel)}</span>` : ''}
            </div>
        </div>
    `;
}
function wireGoalActions(container) {
    container.querySelectorAll('[data-goal-edit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openGoalEditModal(btn.dataset.goalEdit);
        });
    });
    container.querySelectorAll('[data-goal-delete]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            askDeleteGoal(btn.dataset.goalDelete);
        });
    });
    container.querySelectorAll('.goal-row, .goal-modal-row').forEach(row => {
        row.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            const ownerId = row.dataset.ownerId;
            if (ownerId) {
                if (goalsModalOverlay.classList.contains('active')) closeGoalsModal();
                openDetailPanel(ownerId);
            }
        });
    });
}
function renderGoals() {
    if (!goalsList) return;
    const all = sortedGoals();
    if (all.length === 0) {
        goalsList.innerHTML = `<div class="goal-empty">No goals yet. Click "+ Goal" to set one.</div>`;
        if (goalsSub) goalsSub.textContent = 'What everyone is working toward.';
        return;
    }
    const top = all.slice(0, GOALS_PREVIEW_COUNT);
    goalsList.innerHTML = top.map(g => goalRowHTML(g)).join('');
    if (goalsSub) {
        const done = all.filter(g => g.status === 'done').length;
        const risky = all.filter(g => g.status === 'at-risk').length;
        goalsSub.textContent = `${all.length} ${all.length === 1 ? 'goal' : 'goals'} · ${done} done${risky > 0 ? ` · ${risky} at risk` : ''}`;
    }
    wireGoalActions(goalsList);
}
function openGoalsModal() {
    renderGoalsModal();
    goalsModalOverlay.classList.add('active');
}
function closeGoalsModal() {
    goalsModalOverlay.classList.remove('active');
}
function renderGoalsModal() {
    if (!goalsModalList) return;
    const all = sortedGoals();
    if (goalsModalSub) {
        goalsModalSub.textContent = `${all.length} ${all.length === 1 ? 'goal' : 'goals'} · across ${new Set(all.map(g => g.ownerId)).size} owner(s)`;
    }
    if (all.length === 0) {
        goalsModalList.innerHTML = `<div class="goal-empty">No goals yet. Click "+ Goal" to create one.</div>`;
        return;
    }
    goalsModalList.innerHTML = all.map(g => goalRowHTML(g, { modal: true })).join('');
    wireGoalActions(goalsModalList);
}
function refreshGoalOwnerDropdown(preselectId) {
    if (!goalFieldOwner) return;
    goalFieldOwner.innerHTML = '<option value="">— Choose employee —</option>';
    const sorted = employees.slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    sorted.forEach(emp => {
        const opt = document.createElement('option');
        opt.value = emp.id;
        opt.textContent = emp.name;
        goalFieldOwner.appendChild(opt);
    });
    if (preselectId && employees.find(e => e.id === preselectId)) {
        goalFieldOwner.value = preselectId;
    }
}
function openGoalEditModal(id) {
    if (demoBlocked('Editing goals')) return;
    if (id) {
        const g = goals.find(x => x.id === id);
        if (!g) return;
        goalEditTitle.textContent = 'Edit Goal';
        goalEditId.value = g.id;
        goalEditingId = g.id;
        refreshGoalOwnerDropdown(g.ownerId);
        goalFieldTitle.value = g.title;
        goalFieldDescription.value = g.description || '';
        goalFieldCategory.value = g.category;
        goalFieldStatus.value = g.status;
        goalFieldProgress.value = g.progress;
        goalFieldDue.value = g.dueDate || '';
    } else {
        goalEditTitle.textContent = 'New Goal';
        goalEditId.value = '';
        goalEditingId = null;
        refreshGoalOwnerDropdown(currentDetailId || null);
        goalFieldTitle.value = '';
        goalFieldDescription.value = '';
        goalFieldCategory.value = 'objective';
        goalFieldStatus.value = 'not-started';
        goalFieldProgress.value = 0;
        goalFieldDue.value = '';
    }
    goalEditError.style.display = 'none';
    goalEditOverlay.classList.add('active');
    setTimeout(() => goalFieldTitle.focus(), 100);
}
function closeGoalEditModal() {
    goalEditOverlay.classList.remove('active');
}
function saveGoalFromModal() {
    const ownerId = goalFieldOwner.value || null;
    const title = goalFieldTitle.value.trim();
    const description = goalFieldDescription.value.trim();
    const category = goalFieldCategory.value;
    const status = goalFieldStatus.value;
    const progress = Math.max(0, Math.min(100, parseInt(goalFieldProgress.value, 10) || 0));
    const dueDate = goalFieldDue.value || '';
    if (!ownerId) {
        goalEditError.textContent = 'Please pick an owner.';
        goalEditError.style.display = 'block';
        return;
    }
    if (!title) {
        goalEditError.textContent = 'Please give the goal a title.';
        goalEditError.style.display = 'block';
        return;
    }
    const id = goalEditId.value;
    const now = Date.now();
    if (id) {
        const idx = goals.findIndex(x => x.id === id);
        if (idx > -1) {
            goals[idx] = { ...goals[idx], ownerId, title, description, category, status, progress, dueDate, updatedAt: now };
            saveGoals();
            logActivity('goal.edit', id, { label: title });
            toast('Goal updated', 'success');
        }
    } else {
        const newG = {
            id: uidGoal(),
            ownerId, title, description, category, status, progress, dueDate,
            createdAt: now, updatedAt: now
        };
        goals.unshift(newG);
        saveGoals();
        logActivity('goal.add', newG.id, { label: title });
        toast('Goal added', 'success');
    }
    closeGoalEditModal();
    renderGoals();
    if (goalsModalOverlay.classList.contains('active')) renderGoalsModal();
    if (currentDetailId && ownerId === currentDetailId) {
        const emp = findEmployee(ownerId);
        if (emp) renderDetailPanel(emp);
    }
}
function askDeleteGoal(id) {
    if (demoBlocked('Deleting goals')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const g = goals.find(x => x.id === id);
    if (!g) return;
    pendingGoalDelete = id;
    goalDeleteMessage.textContent = `Move "${g.title}" to Trash? You can restore it within 30 days.`;
    goalDeleteOverlay.classList.add('active');
}
function closeGoalDelete() {
    goalDeleteOverlay.classList.remove('active');
    pendingGoalDelete = null;
}
function confirmGoalDelete() {
    if (!pendingGoalDelete) return;
    const id = pendingGoalDelete;
    const g = goals.find(x => x.id === id);
    if (!g) { closeGoalDelete(); return; }
    const snapshot = JSON.parse(JSON.stringify(g));
    goals = goals.filter(x => x.id !== id);
    saveGoals();
    const owner = findEmployee(g.ownerId);
    trashEntity('goal', snapshot, g.title, owner ? owner.name : '', null);
    logActivity('goal.delete', id, { label: g.title });
    closeGoalDelete();
    renderGoals();
    if (goalsModalOverlay.classList.contains('active')) renderGoalsModal();
    toast(`Moved "${g.title}" to Trash`, 'success');
}

if (goalsCard) {
    goalsCard.addEventListener('click', (e) => {
        if (e.target.closest('#goalsAddBtn')) return;
        if (e.target.closest('.goal-row')) return;
        openGoalsModal();
    });
    goalsCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.closest('#goalsAddBtn')) return;
            e.preventDefault();
            openGoalsModal();
        }
    });
}
if (goalsAddBtn) {
    goalsAddBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openGoalEditModal();
    });
}
if (goalsViewAll) {
    goalsViewAll.addEventListener('click', (e) => {
        e.stopPropagation();
        openGoalsModal();
    });
}
if (goalsModalClose) goalsModalClose.addEventListener('click', closeGoalsModal);
if (goalsModalOverlay) goalsModalOverlay.addEventListener('click', (e) => {
    if (e.target === goalsModalOverlay) closeGoalsModal();
});
if (goalsModalAddBtn) goalsModalAddBtn.addEventListener('click', () => openGoalEditModal());
if (goalEditClose) goalEditClose.addEventListener('click', closeGoalEditModal);
if (goalEditCancelBtn) goalEditCancelBtn.addEventListener('click', closeGoalEditModal);
if (goalEditOverlay) goalEditOverlay.addEventListener('click', (e) => {
    if (e.target === goalEditOverlay) closeGoalEditModal();
});
if (goalEditSaveBtn) goalEditSaveBtn.addEventListener('click', saveGoalFromModal);
if (goalDeleteClose) goalDeleteClose.addEventListener('click', closeGoalDelete);
if (goalDeleteCancelBtn) goalDeleteCancelBtn.addEventListener('click', closeGoalDelete);
if (goalDeleteOverlay) goalDeleteOverlay.addEventListener('click', (e) => {
    if (e.target === goalDeleteOverlay) closeGoalDelete();
});
if (goalDeleteApplyBtn) goalDeleteApplyBtn.addEventListener('click', confirmGoalDelete);

// ==================== DOCUMENTS RENDER ====================
function docItemHTML(d, opts) {
    const opts2 = opts || {};
    const showActions = opts2.showActions !== false;
    const cat = docCategoryInfo(d.category);
    const label = d.label || d.name;
    const actions = showActions ? `
        <div class="doc-actions">
            <button class="doc-icon-btn download" data-doc-download="${d.id}" title="Download" aria-label="Download" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </button>
            <button class="doc-icon-btn delete" data-doc-delete="${d.id}" title="Delete" aria-label="Delete" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
        </div>
    ` : '';
    return `
        <div class="doc-item">
            <div class="doc-icon" data-cat="${d.category}">${escapeHtml(cat.short)}</div>
            <div class="doc-info">
                <div class="doc-name">${escapeHtml(label)}</div>
                <div class="doc-meta">${escapeHtml(cat.label)} · ${escapeHtml(formatBytes(d.size))} · ${escapeHtml(relativeTime(d.uploadedAt))}</div>
            </div>
            ${actions}
        </div>
    `;
}
function wireDocumentActions(container) {
    container.querySelectorAll('[data-doc-download]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            downloadDocument(btn.dataset.docDownload);
        });
    });
    container.querySelectorAll('[data-doc-delete]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            askDeleteDocument(btn.dataset.docDelete);
        });
    });
}
function renderDocumentsStorageBar() {
    if (!documentsStorageBar) return;
    const total = documentsTotalBytes();
    const pct = Math.min(100, (total / DOC_MAX_TOTAL_BYTES) * 100);
    const level = documentStorageLevel();
    const cls = level === 'danger' ? 'documents-storage-bar danger' : (level === 'warn' ? 'documents-storage-bar warn' : 'documents-storage-bar');
    documentsStorageBar.className = cls;
    documentsStorageBar.innerHTML = `
        <span><strong>${escapeHtml(formatBytes(total))}</strong> of ${escapeHtml(formatBytes(DOC_MAX_TOTAL_BYTES))} used (${pct.toFixed(1)}%)</span>
        <span>${documents.length} file${documents.length === 1 ? '' : 's'} across all employees</span>
    `;
}
function openDocumentsModal(empId) {
    const emp = findEmployee(empId);
    if (!emp) return;
    documentsModalEmployeeId = empId;
    renderDocumentsModal();
    documentsModalOverlay.classList.add('active');
}
function closeDocumentsModal() {
    documentsModalOverlay.classList.remove('active');
    documentsModalEmployeeId = null;
}
function renderDocumentsModal() {
    if (!documentsModalList) return;
    const empId = documentsModalEmployeeId;
    const emp = empId ? findEmployee(empId) : null;
    if (!emp) {
        documentsModalTitle.textContent = 'Documents';
        documentsModalSub.textContent = '—';
        documentsModalList.innerHTML = `<div class="documents-empty">No employee selected.</div>`;
        if (documentsStorageBar) documentsStorageBar.innerHTML = '';
        return;
    }
    documentsModalTitle.textContent = `Documents · ${emp.name}`;
    const list = documentsForEmployee(empId);
    const empBytes = documentsTotalBytesForEmployee(empId);
    documentsModalSub.textContent = `${list.length} of ${DOC_MAX_FILES_PER_EMPLOYEE} file${DOC_MAX_FILES_PER_EMPLOYEE === 1 ? '' : 's'} · ${formatBytes(empBytes)}`;
    renderDocumentsStorageBar();
    if (list.length === 0) {
        documentsModalList.innerHTML = `<div class="documents-empty">No documents yet. Click "+ Upload" to add one.</div>`;
        return;
    }
    documentsModalList.innerHTML = list.map(d => docItemHTML(d, { showActions: true })).join('');
    wireDocumentActions(documentsModalList);
}
function downloadDocument(id) {
    const d = documents.find(x => x.id === id);
    if (!d) return;
    try {
        const a = document.createElement('a');
        a.href = d.dataUrl;
        a.download = d.name || 'document';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        toast('Download started', 'success', 2000);
    } catch (e) {
        toast('Could not download file', 'error');
    }
}
function resetDocumentUploadForm() {
    documentPendingFile = null;
    if (docFieldFile) docFieldFile.value = '';
    if (docFieldLabel) docFieldLabel.value = '';
    if (docFieldCategory) docFieldCategory.value = 'contract';
    if (docUploadInner) docUploadInner.style.display = 'flex';
    if (docUploadFile) docUploadFile.style.display = 'none';
    if (docUploadFilename) docUploadFilename.textContent = '';
    if (documentUploadError) {
        documentUploadError.style.display = 'none';
        documentUploadError.textContent = '';
    }
}
function openDocumentUploadModal() {
    if (demoBlocked('Uploading documents')) return;
    if (!documentsModalEmployeeId) return;
    resetDocumentUploadForm();
    documentUploadTitle.textContent = 'Upload Document';
    documentUploadOverlay.classList.add('active');
}
function closeDocumentUploadModal() {
    documentUploadOverlay.classList.remove('active');
}
function handleDocumentFile(file) {
    if (!file) return;
    if (file.size > DOC_MAX_FILE_BYTES) {
        documentUploadError.textContent = `File is ${formatBytes(file.size)} — max is ${formatBytes(DOC_MAX_FILE_BYTES)}.`;
        documentUploadError.style.display = 'block';
        return;
    }
    const empId = documentsModalEmployeeId;
    if (empId) {
        const count = documentsForEmployee(empId).length;
        if (count >= DOC_MAX_FILES_PER_EMPLOYEE) {
            documentUploadError.textContent = `Max ${DOC_MAX_FILES_PER_EMPLOYEE} files per employee reached.`;
            documentUploadError.style.display = 'block';
            return;
        }
    }
    const total = documentsTotalBytes();
    if (total + file.size > DOC_MAX_TOTAL_BYTES) {
        documentUploadError.textContent = `Not enough space — would exceed ${formatBytes(DOC_MAX_TOTAL_BYTES)} total.`;
        documentUploadError.style.display = 'block';
        return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
        documentPendingFile = {
            name: file.name,
            type: file.type || 'application/octet-stream',
            size: file.size,
            dataUrl: ev.target.result
        };
        if (docUploadInner) docUploadInner.style.display = 'none';
        if (docUploadFile) docUploadFile.style.display = 'flex';
        if (docUploadFilename) docUploadFilename.textContent = file.name;
        if (documentUploadError) documentUploadError.style.display = 'none';
        if (!docFieldLabel.value.trim()) {
            docFieldLabel.value = file.name.replace(/\.[^.]+$/, '');
        }
    };
    reader.onerror = () => {
        documentUploadError.textContent = 'Could not read the file.';
        documentUploadError.style.display = 'block';
    };
    reader.readAsDataURL(file);
}
function saveDocumentFromModal() {
    if (!documentPendingFile) {
        documentUploadError.textContent = 'Please choose a file.';
        documentUploadError.style.display = 'block';
        return;
    }
    const empId = documentsModalEmployeeId;
    if (!empId) return;
    const category = docFieldCategory.value || 'other';
    const label = docFieldLabel.value.trim();
    const newD = {
        id: uidDocument(),
        employeeId: empId,
        name: documentPendingFile.name,
        label: label,
        mime: documentPendingFile.type,
        size: documentPendingFile.size,
        category: category,
        dataUrl: documentPendingFile.dataUrl,
        uploadedAt: Date.now()
    };
    documents.push(newD);
    saveDocuments();
    logActivity('document.upload', newD.id, { label: `${newD.name} (${formatBytes(newD.size)})` });
    closeDocumentUploadModal();
    renderDocumentsModal();
    if (currentDetailId === empId) {
        const emp = findEmployee(empId);
        if (emp) renderDetailPanel(emp);
    }
    toast(`Uploaded ${newD.name}`, 'success', 3000);
}
function askDeleteDocument(id) {
    if (demoBlocked('Deleting documents')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const d = documents.find(x => x.id === id);
    if (!d) return;
    pendingDocumentDelete = id;
    documentDeleteMessage.textContent = `Move "${d.label || d.name}" to Trash? You can restore it within 30 days.`;
    documentDeleteOverlay.classList.add('active');
}
function closeDocumentDelete() {
    documentDeleteOverlay.classList.remove('active');
    pendingDocumentDelete = null;
}
function confirmDocumentDelete() {
    if (!pendingDocumentDelete) return;
    const id = pendingDocumentDelete;
    const d = documents.find(x => x.id === id);
    if (!d) { closeDocumentDelete(); return; }
    const snapshot = JSON.parse(JSON.stringify(d));
    documents = documents.filter(x => x.id !== id);
    saveDocuments();
    const emp = findEmployee(d.employeeId);
    trashEntity('document', snapshot, d.label || d.name, emp ? emp.name : '', null);
    logActivity('document.delete', id, { label: d.name });
    closeDocumentDelete();
    if (documentsModalOverlay.classList.contains('active')) renderDocumentsModal();
    if (currentDetailId === d.employeeId) {
        if (emp) renderDetailPanel(emp);
    }
    toast(`Moved "${d.label || d.name}" to Trash`, 'success');
}

if (documentsAddBtn) documentsAddBtn.addEventListener('click', openDocumentUploadModal);
if (documentsModalClose) documentsModalClose.addEventListener('click', closeDocumentsModal);
if (documentsModalOverlay) documentsModalOverlay.addEventListener('click', (e) => {
    if (e.target === documentsModalOverlay) closeDocumentsModal();
});
if (documentUploadClose) documentUploadClose.addEventListener('click', closeDocumentUploadModal);
if (documentUploadCancelBtn) documentUploadCancelBtn.addEventListener('click', closeDocumentUploadModal);
if (documentUploadOverlay) documentUploadOverlay.addEventListener('click', (e) => {
    if (e.target === documentUploadOverlay) closeDocumentUploadModal();
});
if (documentUploadSaveBtn) documentUploadSaveBtn.addEventListener('click', saveDocumentFromModal);
if (documentDeleteClose) documentDeleteClose.addEventListener('click', closeDocumentDelete);
if (documentDeleteCancelBtn) documentDeleteCancelBtn.addEventListener('click', closeDocumentDelete);
if (documentDeleteOverlay) documentDeleteOverlay.addEventListener('click', (e) => {
    if (e.target === documentDeleteOverlay) closeDocumentDelete();
});
if (documentDeleteApplyBtn) documentDeleteApplyBtn.addEventListener('click', confirmDocumentDelete);
if (docUploadDrop) {
    docUploadDrop.addEventListener('click', (e) => {
        if (e.target.closest('#docUploadClear')) return;
        if (docUploadFile && docUploadFile.style.display === 'flex') return;
        docFieldFile && docFieldFile.click();
    });
}
if (docFieldFile) {
    docFieldFile.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) handleDocumentFile(file);
    });
}
if (docUploadClear) {
    docUploadClear.addEventListener('click', (e) => {
        e.stopPropagation();
        resetDocumentUploadForm();
    });
}

// ==================== HOLIDAYS RENDER ====================
function renderHolidays() {
    if (!holidayList) return;
    const rows = holidaysWithNext();

    if (rows.length === 0) {
        holidayList.innerHTML = `<div class="holiday-empty">No holidays yet. Click "+ Add" to add your first one.</div>`;
        if (holidayCount) holidayCount.textContent = '0 upcoming';
        if (holidaySub) holidaySub.textContent = 'International, national, and company days off.';
        return;
    }

    const top = rows.slice(0, 5);
    holidayList.innerHTML = top.map(({ h, next, days }) => {
        const badge = holidayDateBadgeParts(h.date);
        const dateLabel = formatHolidayDate(h.date);
        const daysLabel = next
            ? (days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : `In ${days} days`)
            : 'Past';
        const daysClass = next
            ? (days === 0 ? 'today' : days <= 7 ? 'soon' : '')
            : '';
        return `
            <div class="holiday-row">
                <div class="holiday-date-badge">
                    <span class="holiday-date-day">${escapeHtml(badge.day)}</span>
                    <span class="holiday-date-month">${escapeHtml(badge.month)}</span>
                </div>
                <div class="holiday-info">
                    <div class="holiday-name">${escapeHtml(h.name)}</div>
                    <div class="holiday-country">${escapeHtml(h.country || holidaysTypeLabel(h.type))}${h.repeat ? ' · Repeats yearly' : ''}</div>
                </div>
                <div class="holiday-meta">
                    <span class="holiday-type-badge" data-type="${h.type}">${escapeHtml(holidaysTypeLabel(h.type))}</span>
                    <span class="holiday-date">${escapeHtml(dateLabel)}</span>
                    <span class="holiday-days-left ${daysClass}">${escapeHtml(daysLabel)}</span>
                </div>
            </div>
        `;
    }).join('');

    const upcoming = rows.filter(r => r.next).length;
    if (holidayCount) holidayCount.textContent = `${upcoming} upcoming`;
    if (holidaySub) holidaySub.textContent = `${holidays.length} total · ${upcoming} upcoming${holidays.length > top.length ? ' · click to see all' : ''}`;
}
function openHolidayModal() {
    renderHolidayModal();
    holidayModalOverlay.classList.add('active');
}
function closeHolidayModal() {
    holidayModalOverlay.classList.remove('active');
}
function renderHolidayModal() {
    if (!holidayModalList) return;
    const rows = holidaysWithNext();
    if (holidayModalSub) {
        const upcoming = rows.filter(r => r.next).length;
        holidayModalSub.textContent = `${holidays.length} total · ${upcoming} upcoming`;
    }
    if (rows.length === 0) {
        holidayModalList.innerHTML = `<div class="holiday-empty">No holidays yet. Click "+ Add Holiday" to create one.</div>`;
        return;
    }
    holidayModalList.innerHTML = rows.map(({ h, next, days }) => {
        const badge = holidayDateBadgeParts(h.date);
        const dateLabel = formatHolidayDate(h.date);
        const daysLabel = next
            ? (days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : `In ${days} days`)
            : 'Past';
        const daysClass = next ? (days === 0 ? 'today' : days <= 7 ? 'soon' : '') : '';
        return `
            <div class="holiday-modal-row" data-holiday-id="${h.id}">
                <div class="holiday-date-badge">
                    <span class="holiday-date-day">${escapeHtml(badge.day)}</span>
                    <span class="holiday-date-month">${escapeHtml(badge.month)}</span>
                </div>
                <div class="holiday-info">
                    <div class="holiday-name">${escapeHtml(h.name)}</div>
                    <div class="holiday-country">${escapeHtml(h.country || holidaysTypeLabel(h.type))}${h.repeat ? ' · Repeats yearly' : ''}</div>
                </div>
                <div class="holiday-meta">
                    <span class="holiday-type-badge" data-type="${h.type}">${escapeHtml(holidaysTypeLabel(h.type))}</span>
                    <span class="holiday-date">${escapeHtml(dateLabel)}</span>
                    <span class="holiday-days-left ${daysClass}">${escapeHtml(daysLabel)}</span>
                </div>
                <div class="holiday-modal-actions-cell">
                    <button class="holiday-modal-icon-btn edit" data-holiday-edit="${h.id}" title="Edit" aria-label="Edit" type="button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="holiday-modal-icon-btn delete" data-holiday-delete="${h.id}" title="Delete" aria-label="Delete" type="button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    holidayModalList.querySelectorAll('[data-holiday-edit]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openHolidayEditModal(btn.dataset.holidayEdit);
        });
    });
    holidayModalList.querySelectorAll('[data-holiday-delete]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            askDeleteHoliday(btn.dataset.holidayDelete);
        });
    });
}
function openHolidayEditModal(id) {
    if (demoBlocked('Editing holidays')) return;
    if (id) {
        const h = holidays.find(x => x.id === id);
        if (!h) return;
        holidayEditTitle.textContent = 'Edit Holiday';
        holidayEditId.value = h.id;
        holidayFieldName.value = h.name;
        holidayFieldDate.value = h.date;
        holidayFieldCountry.value = h.country || '';
        holidayFieldType.value = h.type || 'national';
        holidayFieldRepeat.checked = !!h.repeat;
    } else {
        holidayEditTitle.textContent = 'Add Holiday';
        holidayEditId.value = '';
        holidayFieldName.value = '';
        holidayFieldDate.value = '';
        holidayFieldCountry.value = '';
        holidayFieldType.value = 'national';
        holidayFieldRepeat.checked = true;
    }
    holidayEditError.style.display = 'none';
    holidayEditOverlay.classList.add('active');
    setTimeout(() => holidayFieldName.focus(), 100);
}
function closeHolidayEditModal() {
    holidayEditOverlay.classList.remove('active');
}
function saveHolidayFromModal() {
    const name = holidayFieldName.value.trim();
    const date = holidayFieldDate.value;
    const country = holidayFieldCountry.value.trim();
    const type = holidayFieldType.value;
    const repeat = !!holidayFieldRepeat.checked;
    if (!name) {
        holidayEditError.textContent = 'Please enter a name.';
        holidayEditError.style.display = 'block';
        return;
    }
    if (!date) {
        holidayEditError.textContent = 'Please pick a date.';
        holidayEditError.style.display = 'block';
        return;
    }
    const id = holidayEditId.value;
    if (id) {
        const idx = holidays.findIndex(x => x.id === id);
        if (idx > -1) {
            holidays[idx] = { ...holidays[idx], name, date, country, type, repeat };
            saveHolidays();
            toast('Holiday updated', 'success');
        }
    } else {
        holidays.push({ id: uidHoliday(), name, date, country, type, repeat });
        saveHolidays();
        toast('Holiday added', 'success');
    }
    closeHolidayEditModal();
    renderHolidays();
    if (holidayModalOverlay.classList.contains('active')) renderHolidayModal();
}
function askDeleteHoliday(id) {
    if (demoBlocked('Deleting holidays')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const h = holidays.find(x => x.id === id);
    if (!h) return;
    pendingHolidayDelete = id;
    holidayDeleteMessage.textContent = `Move "${h.name}" to Trash? You can restore it within 30 days.`;
    holidayDeleteOverlay.classList.add('active');
}
function closeHolidayDelete() {
    holidayDeleteOverlay.classList.remove('active');
    pendingHolidayDelete = null;
}
function confirmHolidayDelete() {
    if (!pendingHolidayDelete) return;
    const id = pendingHolidayDelete;
    const h = holidays.find(x => x.id === id);
    if (!h) { closeHolidayDelete(); return; }
    const snapshot = JSON.parse(JSON.stringify(h));
    holidays = holidays.filter(x => x.id !== id);
    saveHolidays();
    trashEntity('holiday', snapshot, h.name, h.country || holidaysTypeLabel(h.type), null);
    logActivity('holiday.delete', id, { label: h.name });
    closeHolidayDelete();
    renderHolidays();
    if (holidayModalOverlay.classList.contains('active')) renderHolidayModal();
    toast(`Moved "${h.name}" to Trash`, 'success');
}

if (holidayCard) {
    holidayCard.addEventListener('click', (e) => {
        if (e.target.closest('#holidayAddBtn')) return;
        openHolidayModal();
    });
    holidayCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.closest('#holidayAddBtn')) return;
            e.preventDefault();
            openHolidayModal();
        }
    });
}
if (holidayAddBtn) {
    holidayAddBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openHolidayEditModal();
    });
}
if (holidayModalClose) holidayModalClose.addEventListener('click', closeHolidayModal);
if (holidayModalOverlay) holidayModalOverlay.addEventListener('click', (e) => {
    if (e.target === holidayModalOverlay) closeHolidayModal();
});
if (holidayModalAddBtn) holidayModalAddBtn.addEventListener('click', () => openHolidayEditModal());
if (holidayEditClose) holidayEditClose.addEventListener('click', closeHolidayEditModal);
if (holidayEditCancelBtn) holidayEditCancelBtn.addEventListener('click', closeHolidayEditModal);
if (holidayEditOverlay) holidayEditOverlay.addEventListener('click', (e) => {
    if (e.target === holidayEditOverlay) closeHolidayEditModal();
});
if (holidayEditSaveBtn) holidayEditSaveBtn.addEventListener('click', saveHolidayFromModal);
if (holidayDeleteClose) holidayDeleteClose.addEventListener('click', closeHolidayDelete);
if (holidayDeleteCancelBtn) holidayDeleteCancelBtn.addEventListener('click', closeHolidayDelete);
if (holidayDeleteOverlay) holidayDeleteOverlay.addEventListener('click', (e) => {
    if (e.target === holidayDeleteOverlay) closeHolidayDelete();
});
if (holidayDeleteApplyBtn) holidayDeleteApplyBtn.addEventListener('click', confirmHolidayDelete);

// ==================== TIME OFF ====================
function timeOffBalanceFor(emp) {
    const allowance = (emp.timeOff && typeof emp.timeOff.allowance === 'number')
        ? emp.timeOff.allowance
        : DEFAULT_TIMEOFF_ALLOWANCE;
    const requests = (emp.timeOff && Array.isArray(emp.timeOff.requests)) ? emp.timeOff.requests : [];
    let used = 0;
    let pending = 0;
    requests.forEach(r => {
        const h = typeof r.hours === 'number' ? r.hours : 0;
        if (r.status === 'approved') used += h;
        else if (r.status === 'pending') pending += h;
    });
    const remaining = Math.max(0, allowance - used - pending);
    const remainingWithoutPending = Math.max(0, allowance - used);
    return { allowance, used, pending, remaining, remainingWithoutPending };
}
function workingDaysBetween(startStr, endStr) {
    if (!startStr || !endStr) return 0;
    const start = new Date(startStr + 'T00:00:00');
    const end = new Date(endStr + 'T00:00:00');
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
    if (end < start) return 0;
    let count = 0;
    const cursor = new Date(start);
    while (cursor <= end) {
        const day = cursor.getDay();
        if (day !== 0 && day !== 6) count++;
        cursor.setDate(cursor.getDate() + 1);
    }
    return count;
}
function timeOffHoursFor(startStr, endStr) {
    return workingDaysBetween(startStr, endStr) * HOURS_PER_DAY;
}
function timeOffTypeLabel(key) {
    const t = TIMEOFF_TYPES.find(x => x.key === key);
    return t ? t.label : key;
}
function allTimeOffRequests() {
    const rows = [];
    employees.forEach(emp => {
        const requests = (emp.timeOff && Array.isArray(emp.timeOff.requests)) ? emp.timeOff.requests : [];
        requests.forEach(r => rows.push({ emp, request: r }));
    });
    return rows;
}
function canCurrentUserApproveRequest(emp) {
    return !!emp.managerId;
}
function renderTimeOff() {
    if (!timeOffList) return;
    if (employees.length === 0) {
        timeOffList.innerHTML = `<div class="timeoff-empty">No employees yet — add someone to begin.</div>`;
        if (timeOffSub) timeOffSub.textContent = 'Snapshot of paid time off used and remaining.';
        updateTimeOffPendingBadge();
        return;
    }
    const sorted = employees.slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    let totalUsed = 0;
    let totalPending = 0;
    let totalRemaining = 0;
    const rowsHtml = sorted.map(emp => {
        const b = timeOffBalanceFor(emp);
        totalUsed += b.used;
        totalPending += b.pending;
        totalRemaining += b.remaining;
        const hue = hueFromString(emp.name || emp.id);
        const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
        const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="">` : `<span>${escapeHtml(initials(emp.name))}</span>`;
        const totalAllowance = b.allowance || 1;
        const usedPct = Math.min(100, (b.used / totalAllowance) * 100);
        const pendingPct = Math.min(100 - usedPct, (b.pending / totalAllowance) * 100);
        const remainingDanger = b.remaining <= 0;
        return `
            <div class="timeoff-row" data-emp-id="${emp.id}">
                <div class="timeoff-avatar" style="${avatarStyle}">${avatarContent}</div>
                <div class="timeoff-info">
                    <div class="timeoff-name">${escapeHtml(emp.name)}</div>
                    <div class="timeoff-bar-wrap">
                        <div class="timeoff-bar">
                            <div class="timeoff-bar-used" style="width: ${usedPct}%;"></div>
                            <div class="timeoff-bar-pending" style="width: ${pendingPct}%;"></div>
                        </div>
                    </div>
                </div>
                <div class="timeoff-numbers">
                    <span class="timeoff-used">${formatHours(b.used)} used${b.pending > 0 ? ` · ${formatHours(b.pending)} pending` : ''}</span>
                    <span class="timeoff-remaining ${remainingDanger ? 'danger' : ''}">${formatHours(b.remaining)} left</span>
                </div>
            </div>
        `;
    }).join('');
    const pendingCount = allTimeOffRequests().filter(r => r.request.status === 'pending').length;
    timeOffList.innerHTML = rowsHtml;
    if (timeOffSub) {
        timeOffSub.textContent = `${formatHours(totalUsed)} used · ${formatHours(totalRemaining)} remaining${pendingCount > 0 ? ` · ${pendingCount} pending` : ''}`;
    }
    timeOffList.querySelectorAll('.timeoff-row').forEach(row => {
        row.addEventListener('click', (e) => {
            e.stopPropagation();
            openDetailPanel(row.dataset.empId);
        });
    });
    updateTimeOffPendingBadge();
}
function updateTimeOffPendingBadge() {
    if (!timeOffPendingBadge) return;
    const n = allTimeOffRequests().filter(r => r.request.status === 'pending').length;
    timeOffPendingBadge.textContent = n;
    timeOffPendingBadge.style.display = n > 0 ? 'inline-flex' : 'none';
}
function openTimeOffModal(tab = 'balances') {
    timeOffActiveTab = tab;
    renderTimeOffModal();
    timeOffModalOverlay.classList.add('active');
}
function closeTimeOffModal() {
    timeOffModalOverlay.classList.remove('active');
}
function renderTimeOffModal() {
    if (!timeOffTabContent) return;
    timeOffTabs.querySelectorAll('.timeoff-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === timeOffActiveTab);
    });
    updateTimeOffPendingBadge();
    if (timeOffModalSub) {
        const pendingCount = allTimeOffRequests().filter(r => r.request.status === 'pending').length;
        timeOffModalSub.textContent = `${employees.length} ${employees.length === 1 ? 'person' : 'people'} · ${pendingCount} pending`;
    }
    if (timeOffActiveTab === 'balances') {
        timeOffTabContent.innerHTML = renderTimeOffBalancesTab();
    } else if (timeOffActiveTab === 'pending') {
        timeOffTabContent.innerHTML = renderTimeOffRequestsTab('pending');
    } else if (timeOffActiveTab === 'history') {
        timeOffTabContent.innerHTML = renderTimeOffRequestsTab('history');
    }
    wireTimeOffModalContent();
}
function renderTimeOffBalancesTab() {
    if (employees.length === 0) {
        return `<div class="timeoff-empty-modal">No employees yet.</div>`;
    }
    const sorted = employees.slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    return `<div class="timeoff-modal-list">${sorted.map(emp => {
        const b = timeOffBalanceFor(emp);
        const hue = hueFromString(emp.name || emp.id);
        const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
        const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="">` : `<span>${escapeHtml(initials(emp.name))}</span>`;
        const danger = b.remaining <= 0;
        return `
            <div class="timeoff-modal-row" data-emp-id="${emp.id}">
                <div class="timeoff-avatar" style="${avatarStyle}">${avatarContent}</div>
                <div>
                    <div class="timeoff-modal-name">${escapeHtml(emp.name)}</div>
                    <div class="timeoff-modal-sub">${escapeHtml(emp.title || '')} · allowance ${formatHours(b.allowance)}</div>
                </div>
                <div class="timeoff-modal-numbers">
                    <span class="timeoff-used">${formatHours(b.used)} used${b.pending > 0 ? ` · ${formatHours(b.pending)} pending` : ''}</span>
                    <span class="timeoff-remaining ${danger ? 'danger' : ''}">${formatHours(b.remaining)} remaining</span>
                </div>
            </div>
        `;
    }).join('')}</div>`;
}
function renderTimeOffRequestsTab(mode) {
    const rows = allTimeOffRequests()
        .filter(r => mode === 'pending' ? r.request.status === 'pending' : r.request.status !== 'pending')
        .sort((a, b) => (b.request.requestedAt || 0) - (a.request.requestedAt || 0));
    if (rows.length === 0) {
        return `<div class="timeoff-empty-modal">${mode === 'pending' ? 'No pending requests. Nice and tidy ✨' : 'No past requests yet.'}</div>`;
    }
    return `<div class="timeoff-modal-list">${rows.map(({ emp, request }) => renderTimeOffRequestCard(emp, request, mode)).join('')}</div>`;
}
function renderTimeOffRequestCard(emp, request, mode) {
    const hue = hueFromString(emp.name || emp.id);
    const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
    const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="">` : `<span>${escapeHtml(initials(emp.name))}</span>`;
    const manager = emp.managerId ? employees.find(x => x.id === emp.managerId) : null;
    const approverLabel = manager ? `Approver: ${manager.name}` : 'Top-level · auto-approved';
    const datesLabel = request.startDate === request.endDate
        ? formatDate(request.startDate)
        : `${formatDate(request.startDate)} → ${formatDate(request.endDate)}`;
    const canApprove = canCurrentUserApproveRequest(emp) && request.status === 'pending' && !DEMO_MODE;
    const approveBtn = canApprove
        ? `<div class="timeoff-approve-row">
              <button class="btn btn-primary btn-sm" data-approve="${request.id}" data-emp="${emp.id}" type="button">Approve</button>
              <button class="btn btn-ghost btn-sm" data-reject="${request.id}" data-emp="${emp.id}" type="button">Reject</button>
           </div>`
        : '';
    const decidedInfo = request.status !== 'pending' && request.decidedBy
        ? `<div class="timeoff-request-meta">${request.status === 'approved' ? 'Approved' : 'Rejected'} · ${escapeHtml(relativeTime(request.decidedAt))}</div>`
        : '';
    return `
        <div class="timeoff-request-card" data-req-id="${request.id}" data-emp-id="${emp.id}">
            <div class="timeoff-avatar" style="${avatarStyle}">${avatarContent}</div>
            <div class="timeoff-request-body">
                <div class="timeoff-request-name">${escapeHtml(emp.name)}</div>
                <div class="timeoff-request-detail">
                    <span class="timeoff-request-type" data-type="${request.type}">${escapeHtml(timeOffTypeLabel(request.type))}</span>
                    <span>${escapeHtml(datesLabel)}</span>
                    <span>·</span>
                    <span>${escapeHtml(approverLabel)}</span>
                </div>
                ${request.reason ? `<div class="timeoff-request-reason">${escapeHtml(request.reason)}</div>` : ''}
                <div class="timeoff-request-meta">Requested ${escapeHtml(relativeTime(request.requestedAt))}</div>
                ${decidedInfo}
                ${approveBtn}
            </div>
            <div class="timeoff-request-actions">
                <span class="timeoff-request-hours">${formatHours(request.hours)}</span>
                <span class="timeoff-request-status" data-status="${request.status}">${escapeHtml(request.status)}</span>
            </div>
        </div>
    `;
}
function wireTimeOffModalContent() {
    timeOffTabs.querySelectorAll('.timeoff-tab').forEach(t => {
        t.addEventListener('click', () => {
            timeOffActiveTab = t.dataset.tab;
            renderTimeOffModal();
        });
    });
    timeOffTabContent.querySelectorAll('[data-approve]').forEach(btn => {
        btn.addEventListener('click', () => decideRequest(btn.dataset.emp, btn.dataset.approve, 'approved'));
    });
    timeOffTabContent.querySelectorAll('[data-reject]').forEach(btn => {
        btn.addEventListener('click', () => decideRequest(btn.dataset.emp, btn.dataset.reject, 'rejected'));
    });
    timeOffTabContent.querySelectorAll('.timeoff-request-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('button, a')) return;
            const empId = card.dataset.empId;
            if (empId) {
                closeTimeOffModal();
                openDetailPanel(empId);
            }
        });
    });
    timeOffTabContent.querySelectorAll('.timeoff-modal-row').forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => {
            const empId = row.dataset.empId;
            if (empId) {
                closeTimeOffModal();
                openDetailPanel(empId);
            }
        });
    });
}
function decideRequest(empId, requestId, decision) {
    if (demoBlocked('Approving/rejecting time off')) return;
    const emp = employees.find(e => e.id === empId);
    if (!emp || !emp.timeOff) return;
    const request = emp.timeOff.requests.find(r => r.id === requestId);
    if (!request || request.status !== 'pending') return;
    request.status = decision;
    request.decidedAt = Date.now();
    request.decidedBy = 'manager';
    saveEmployees();
    renderTimeOff();
    renderTimeOffModal();
    if (currentDetailId === empId) renderDetailPanel(emp);
    toast(`${emp.name}'s ${request.type} request ${decision}`, decision === 'approved' ? 'success' : 'warning', 2500);
}
if (timeOffCard) {
    timeOffCard.addEventListener('click', (e) => {
        if (e.target.closest('#timeOffRequestBtn')) return;
        if (e.target.closest('.timeoff-row')) return;
        openTimeOffModal('balances');
    });
    timeOffCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.closest('#timeOffRequestBtn')) return;
            e.preventDefault();
            openTimeOffModal('balances');
        }
    });
}
if (timeOffViewAll) {
    timeOffViewAll.addEventListener('click', (e) => {
        e.stopPropagation();
        openTimeOffModal('balances');
    });
}
if (timeOffModalClose) timeOffModalClose.addEventListener('click', closeTimeOffModal);
if (timeOffModalOverlay) timeOffModalOverlay.addEventListener('click', (e) => {
    if (e.target === timeOffModalOverlay) closeTimeOffModal();
});
if (timeOffModalRequestBtn) {
    timeOffModalRequestBtn.addEventListener('click', () => {
        closeTimeOffModal();
        openTimeOffRequestModal();
    });
}
function openTimeOffRequestModal(preselectEmpId) {
    if (!timeOffRequestOverlay) return;
    if (demoBlocked('Requesting time off')) return;
    refreshTimeOffEmployeeDropdown();
    toEmployeeSelect.value = preselectEmpId || '';
    toType.value = 'vacation';
    toStartDate.value = '';
    toEndDate.value = '';
    toReason.value = '';
    timeOffFormError.style.display = 'none';
    timeOffPreview.classList.remove('visible', 'warning', 'danger');
    timeOffPreview.innerHTML = '';
    timeOffRequestOverlay.classList.add('active');
    setTimeout(() => toEmployeeSelect.focus(), 120);
}
function closeTimeOffRequestModal() {
    if (!timeOffRequestOverlay) return;
    timeOffRequestOverlay.classList.remove('active');
}
if (timeOffRequestBtn) {
    timeOffRequestBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openTimeOffRequestModal();
    });
}
if (timeOffRequestClose) timeOffRequestClose.addEventListener('click', closeTimeOffRequestModal);
if (timeOffCancelBtn) timeOffCancelBtn.addEventListener('click', closeTimeOffRequestModal);
if (timeOffRequestOverlay) timeOffRequestOverlay.addEventListener('click', (e) => {
    if (e.target === timeOffRequestOverlay) closeTimeOffRequestModal();
});
function updateTimeOffPreview() {
    if (!timeOffPreview) return;
    const empId = toEmployeeSelect.value;
    const startStr = toStartDate.value;
    const endStr = toEndDate.value;
    const type = toType.value;
    if (!empId || !startStr || !endStr) {
        timeOffPreview.classList.remove('visible', 'warning', 'danger');
        timeOffPreview.innerHTML = '';
        return;
    }
    const emp = employees.find(e => e.id === empId);
    if (!emp) return;
    if (new Date(endStr + 'T00:00:00') < new Date(startStr + 'T00:00:00')) {
        timeOffPreview.classList.add('visible', 'danger');
        timeOffPreview.classList.remove('warning');
        timeOffPreview.innerHTML = `<strong>End date is before start date.</strong>`;
        return;
    }
    const hours = timeOffHoursFor(startStr, endStr);
    const b = timeOffBalanceFor(emp);
    const remainingAfter = b.remaining - hours;
    const isUnpaid = type === 'unpaid';
    const overBudget = !isUnpaid && remainingAfter < 0;
    const tight = !isUnpaid && remainingAfter < HOURS_PER_DAY && remainingAfter >= 0;
    timeOffPreview.classList.add('visible');
    timeOffPreview.classList.toggle('warning', overBudget || tight);
    timeOffPreview.classList.toggle('danger', false);
    const typeLabel = timeOffTypeLabel(type);
    const dateLabel = startStr === endStr ? formatDate(startStr) : `${formatDate(startStr)} → ${formatDate(endStr)}`;
    let note = '';
    if (isUnpaid) {
        note = `<div style="margin-top:6px;">Unpaid leave — no balance deduction.</div>`;
    } else if (overBudget) {
        note = `<div style="margin-top:6px;"><strong>Over balance</strong> — this will be flagged for the approver.</div>`;
    } else if (tight) {
        note = `<div style="margin-top:6px;">This will just about use up the remaining balance.</div>`;
    }
    timeOffPreview.innerHTML = `
        <div class="preview-row"><span>${escapeHtml(typeLabel)}</span><span>${escapeHtml(dateLabel)}</span></div>
        <div class="preview-row"><span>Working days</span><span><strong>${workingDaysBetween(startStr, endStr)}</strong></span></div>
        <div class="preview-row"><span>Hours requested</span><span><strong>${formatHours(hours)}</strong></span></div>
        <div class="preview-row"><span>Balance</span><span>${formatHours(b.remaining)} → <strong>${formatHours(Math.max(0, remainingAfter))}</strong>${remainingAfter < 0 ? ` (short ${formatHours(-remainingAfter)})` : ''}</span></div>
        ${note}
    `;
}
if (toEmployeeSelect) toEmployeeSelect.addEventListener('change', updateTimeOffPreview);
if (toStartDate) toStartDate.addEventListener('input', updateTimeOffPreview);
if (toEndDate) toEndDate.addEventListener('input', updateTimeOffPreview);
if (toType) toType.addEventListener('change', updateTimeOffPreview);
if (timeOffSubmitBtn) {
    timeOffSubmitBtn.addEventListener('click', () => {
        const empId = toEmployeeSelect.value;
        const type = toType.value;
        const startStr = toStartDate.value;
        const endStr = toEndDate.value;
        const reason = toReason.value.trim();
        timeOffFormError.style.display = 'none';
        if (!empId) { timeOffFormError.textContent = 'Please choose an employee.'; timeOffFormError.style.display = 'block'; return; }
        if (!startStr || !endStr) { timeOffFormError.textContent = 'Please set start and end dates.'; timeOffFormError.style.display = 'block'; return; }
        if (new Date(endStr + 'T00:00:00') < new Date(startStr + 'T00:00:00')) {
            timeOffFormError.textContent = 'End date cannot be before start date.'; timeOffFormError.style.display = 'block'; return;
        }
        const hours = timeOffHoursFor(startStr, endStr);
        if (hours <= 0) {
            timeOffFormError.textContent = 'This date range has no working days.'; timeOffFormError.style.display = 'block'; return;
        }
        const emp = employees.find(e => e.id === empId);
        if (!emp) return;
        if (!emp.timeOff) emp.timeOff = defaultTimeOff();
        if (!Array.isArray(emp.timeOff.requests)) emp.timeOff.requests = [];
        const balance = timeOffBalanceFor(emp);
        const overBudget = type !== 'unpaid' && hours > balance.remaining;
        const hasManager = !!emp.managerId;
        const now = Date.now();
        const newRequest = {
            id: uidReq(),
            type: type,
            startDate: startStr,
            endDate: endStr,
            hours: hours,
            reason: reason,
            status: hasManager ? 'pending' : 'approved',
            requestedAt: now,
            decidedAt: hasManager ? null : now,
            decidedBy: hasManager ? null : 'auto',
            decisionNote: overBudget ? 'Auto-flagged: over balance' : ''
        };
        emp.timeOff.requests.push(newRequest);
        saveEmployees();
        logActivity('timeoff.request', empId, { label: emp.name, type: type, hours: hours, status: newRequest.status });
        closeTimeOffRequestModal();
        renderTimeOff();
        renderTimeOffModal();
        if (currentDetailId === empId) renderDetailPanel(emp);
        if (hasManager) {
            toast(`Request submitted for ${emp.name} — awaiting manager approval`, 'success', 3200);
        } else {
            toast(`Request auto-approved for ${emp.name} (no manager)`, 'success', 3200);
        }
    });
}

// ==================== ORG CHART ====================
function orgNodeStatusDot(emp, cls) {
    const s = emp.status || DEFAULT_STATUS;
    const hueMap = {
        'off-shift':  'var(--status-off)',
        'break':      'var(--status-break)',
        'production': 'var(--status-production)',
        'overtime':   'var(--status-overtime)'
    };
    return `<span class="${cls}" data-status="${s}" style="background: ${hueMap[s]}; color: ${hueMap[s]};"></span>`;
}
function renderOrgNode(emp) {
    const children = employees.filter(e => e.managerId === emp.id);
    const hasChildren = children.length > 0;
    const isCollapsed = collapsedOrgIds.has(emp.id);
    const hue = hueFromString(emp.name || emp.id);
    const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
    const avatarContent = emp.photo
        ? `<img src="${emp.photo}" alt="">`
        : `<span>${escapeHtml(initials(emp.name))}</span>`;
    const toggleHtml = hasChildren
        ? `<button class="org-toggle" data-toggle-org="${emp.id}" title="${isCollapsed ? 'Expand' : 'Collapse'}" aria-label="${isCollapsed ? 'Expand' : 'Collapse'}" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
           </button>`
        : `<span class="org-toggle-spacer"></span>`;
    const reportsBadge = hasChildren ? `<span class="org-node-reports">${children.length}</span>` : '';
    const childrenHtml = hasChildren
        ? `<div class="org-children">${children
              .sort((a,b) => (a.name || '').localeCompare(b.name || ''))
              .map(c => renderOrgNode(c))
              .join('')}</div>`
        : '';
    return `
        <div class="org-node-block ${isCollapsed ? '' : 'expanded'}" data-org-id="${emp.id}">
            <div class="org-row">
                ${toggleHtml}
                <div class="org-node" data-open-id="${emp.id}" title="Open ${escapeHtml(emp.name)}">
                    ${orgNodeStatusDot(emp, 'org-node-status')}
                    <div class="org-node-avatar" style="${avatarStyle}">${avatarContent}</div>
                    <div class="org-node-info">
                        <div class="org-node-name">${escapeHtml(emp.name)}</div>
                        <div class="org-node-title">${escapeHtml(emp.title || '')}</div>
                    </div>
                    ${reportsBadge}
                </div>
            </div>
            ${childrenHtml}
        </div>
    `;
}
function wireOrgChartInteractions(container, options) {
    if (!container) return;
    const { onToggle, onOpen } = options || {};
    container.querySelectorAll('[data-toggle-org]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.toggleOrg;
            if (collapsedOrgIds.has(id)) collapsedOrgIds.delete(id);
            else collapsedOrgIds.add(id);
            if (onToggle) onToggle();
        });
    });
    container.querySelectorAll('[data-open-id]').forEach(node => {
        node.addEventListener('click', () => {
            const id = node.dataset.openId;
            if (onOpen) onOpen(id);
        });
    });
}
function renderOrgChartPreview() {
    if (!orgChartPreview) return;
    if (employees.length === 0) {
        orgChartPreview.innerHTML = `<div class="org-preview-empty">No employees yet — add someone to begin.</div>`;
        if (orgChartSub) orgChartSub.textContent = 'Who reports to whom.';
        return;
    }
    const roots = employees
        .filter(e => !e.managerId || !employees.some(x => x.id === e.managerId))
        .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    if (roots.length === 0) {
        orgChartPreview.innerHTML = `<div class="org-preview-empty">No reporting structure yet.</div>`;
        return;
    }
    const rows = [];
    const visit = (emp, depth) => {
        if (depth > 3) return;
        const children = employees.filter(e => e.managerId === emp.id);
        const hue = hueFromString(emp.name || emp.id);
        const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
        const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="">` : `<span>${escapeHtml(initials(emp.name))}</span>`;
        rows.push(`
            <div class="org-preview-node" style="padding-left: ${depth * 16 + 6}px;">
                <div class="org-preview-avatar" style="${avatarStyle}">${avatarContent}</div>
                <span class="org-preview-name">${escapeHtml(emp.name)}</span>
                ${children.length > 0 ? `<span class="org-preview-count">${children.length}</span>` : ''}
            </div>
        `);
        children
            .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
            .forEach(c => visit(c, depth + 1));
    };
    roots.forEach(r => visit(r, 0));
    orgChartPreview.innerHTML = rows.join('');
    if (orgChartSub) {
        const totalReports = employees.filter(e => e.managerId).length;
        orgChartSub.textContent = `${employees.length} ${employees.length === 1 ? 'person' : 'people'} · ${reportsLineLabel(totalReports)}`;
    }
}
function reportsLineLabel(n) {
    if (n === 0) return 'no reporting lines yet';
    if (n === 1) return '1 reporting line';
    return `${n} reporting lines`;
}
function renderOrgChartModal() {
    if (!orgModalChart) return;
    if (employees.length === 0) {
        orgModalChart.innerHTML = `<div class="orgchart-empty">No employees yet — add someone to begin.</div>`;
        if (orgModalSub) orgModalSub.textContent = 'Reporting structure';
        applyOrgZoom();
        return;
    }
    const roots = employees
        .filter(e => !e.managerId || !employees.some(x => x.id === e.managerId))
        .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    if (roots.length === 0) {
        orgModalChart.innerHTML = `<div class="orgchart-empty">No reporting structure yet.</div>`;
        applyOrgZoom();
        return;
    }
    orgModalChart.innerHTML = roots.map(r => renderOrgNode(r)).join('');
    if (orgModalSub) {
        const totalReports = employees.filter(e => e.managerId).length;
        orgModalSub.textContent = `${employees.length} ${employees.length === 1 ? 'person' : 'people'} · ${reportsLineLabel(totalReports)}`;
    }
    wireOrgChartInteractions(orgModalChart, {
        onToggle: () => renderOrgChartModal(),
        onOpen: (id) => {
            closeOrgModal();
            openDetailPanel(id);
        }
    });
    applyOrgZoom();
    autoFitOrgZoom();
}
function applyOrgZoom() {
    if (!orgModalChart) return;
    orgModalChart.style.transform = `scale(${orgZoom})`;
    if (orgZoomLevel) orgZoomLevel.textContent = Math.round(orgZoom * 100) + '%';
}
function autoFitOrgZoom() {
    if (!orgModalChart || !orgModalScroll) return;
    orgModalChart.style.transform = 'scale(1)';
    const contentWidth = orgModalChart.scrollWidth;
    const containerWidth = orgModalScroll.clientWidth - 40;
    if (contentWidth > containerWidth && contentWidth > 0) {
        const fit = containerWidth / contentWidth;
        orgZoom = Math.max(ORG_ZOOM_MIN, Math.min(1, fit));
    } else {
        orgZoom = 1;
    }
    applyOrgZoom();
}
function openOrgModal() {
    orgZoom = 1;
    renderOrgChartModal();
    orgModalOverlay.classList.add('active');
}
function closeOrgModal() {
    orgModalOverlay.classList.remove('active');
}
if (orgChartCard) {
    orgChartCard.addEventListener('click', openOrgModal);
    orgChartCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOrgModal(); }
    });
}
if (orgModalClose) orgModalClose.addEventListener('click', closeOrgModal);
if (orgModalOverlay) orgModalOverlay.addEventListener('click', (e) => {
    if (e.target === orgModalOverlay) closeOrgModal();
});
if (orgModalExpandAllBtn) {
    orgModalExpandAllBtn.addEventListener('click', () => {
        collapsedOrgIds.clear();
        renderOrgChartModal();
    });
}
if (orgModalCollapseAllBtn) {
    orgModalCollapseAllBtn.addEventListener('click', () => {
        employees.forEach(e => {
            if (employees.some(c => c.managerId === e.id)) collapsedOrgIds.add(e.id);
        });
        renderOrgChartModal();
    });
}
if (orgZoomIn) orgZoomIn.addEventListener('click', () => {
    orgZoom = Math.min(ORG_ZOOM_MAX, +(orgZoom + ORG_ZOOM_STEP).toFixed(2));
    applyOrgZoom();
});
if (orgZoomOut) orgZoomOut.addEventListener('click', () => {
    orgZoom = Math.max(ORG_ZOOM_MIN, +(orgZoom - ORG_ZOOM_STEP).toFixed(2));
    applyOrgZoom();
});
if (orgZoomLevel) orgZoomLevel.addEventListener('click', () => {
    orgZoom = 1;
    applyOrgZoom();
});

// ==================== WIDGET STRIP ====================
function updateStripArrows() {
    if (!widgetStrip) return;
    const scrollLeft = widgetStrip.scrollLeft;
    const maxScroll = widgetStrip.scrollWidth - widgetStrip.clientWidth;
    const hasOverflow = maxScroll > 8;
    const atStart = scrollLeft <= 4;
    const atEnd = scrollLeft >= maxScroll - 4;
    if (!hasOverflow) {
        widgetStripLeft.classList.add('hidden');
        widgetStripRight.classList.add('hidden');
        return;
    }
    widgetStripLeft.classList.toggle('hidden', atStart);
    widgetStripRight.classList.toggle('hidden', atEnd);
}
if (widgetStripLeft) {
    widgetStripLeft.addEventListener('click', () => {
        const step = widgetStrip.clientWidth * 0.85;
        widgetStrip.scrollBy({ left: -step, behavior: 'smooth' });
    });
}
if (widgetStripRight) {
    widgetStripRight.addEventListener('click', () => {
        const step = widgetStrip.clientWidth * 0.85;
        widgetStrip.scrollBy({ left: step, behavior: 'smooth' });
    });
}
if (widgetStrip) {
    widgetStrip.addEventListener('scroll', updateStripArrows, { passive: true });
    window.addEventListener('resize', updateStripArrows);
    widgetStrip.addEventListener('mousedown', (e) => {
        if (e.target.closest('button, select, input, a, .timesheet-row, .org-preview-node, .timeoff-row, .holiday-row, .kudos-item, .goal-row')) return;
        stripDragging = true;
        stripDragMoved = false;
        stripDragStartX = e.pageX;
        stripDragStartScroll = widgetStrip.scrollLeft;
        widgetStrip.classList.add('dragging');
    });
    window.addEventListener('mousemove', (e) => {
        if (!stripDragging) return;
        const dx = e.pageX - stripDragStartX;
        if (Math.abs(dx) > 4) stripDragMoved = true;
        widgetStrip.scrollLeft = stripDragStartScroll - dx;
    });
    window.addEventListener('mouseup', () => {
        if (!stripDragging) return;
        stripDragging = false;
        widgetStrip.classList.remove('dragging');
    });
    widgetStrip.addEventListener('click', (e) => {
        if (stripDragMoved) {
            e.preventDefault();
            e.stopPropagation();
            stripDragMoved = false;
        }
    }, true);
    const stripObserver = new MutationObserver(() => updateStripArrows());
    stripObserver.observe(widgetStripTrack, { childList: true, subtree: true });
}

// ==================== TIMESHEET ====================
function buildTimesheetRows() {
    const rows = employees.map(emp => ({ emp, todayMs: getTodayMs(emp) }));
    rows.sort((a, b) => {
        if (b.todayMs !== a.todayMs) return b.todayMs - a.todayMs;
        return (a.emp.name || '').localeCompare(b.emp.name || '');
    });
    return rows;
}
function renderTimesheetRow(emp, todayMs, maxMs) {
    const hue = hueFromString(emp.name || emp.id);
    const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
    const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="">` : `<span>${escapeHtml(initials(emp.name))}</span>`;
    const pct = maxMs > 0 ? Math.min(100, Math.round((todayMs / maxMs) * 100)) : 0;
    const active = isProducing(emp) && PRODUCING_STATUSES.includes(emp.activeSession.status);
    const isZero = todayMs === 0;
    const empStatus = emp.status || DEFAULT_STATUS;
    return `<div class="timesheet-row ${active ? 'active' : ''}" data-id="${emp.id}" data-status="${empStatus}"><div class="timesheet-avatar" style="${avatarStyle}">${avatarContent}</div><div class="timesheet-info"><div class="timesheet-name">${escapeHtml(emp.name)}</div><div class="timesheet-role">${escapeHtml(emp.title || '')}</div></div><div class="timesheet-hours ${isZero ? 'zero' : ''}">${escapeHtml(isZero ? '0h' : formatHM(todayMs))}</div><div class="timesheet-bar-wrap"><div class="timesheet-bar" style="width: ${pct}%;"></div></div></div>`;
}
function renderTimesheet() {
    if (!timesheetList) return;
    if (employees.length === 0) {
        timesheetList.innerHTML = `<div class="timesheet-empty">No employees yet. <strong>Add someone to start tracking.</strong></div>`;
        timesheetSub.textContent = 'Live totals — updates as people enter and leave Production.';
        return;
    }
    const rows = buildTimesheetRows();
    const withHours = rows.filter(r => r.todayMs > 0).length;
    timesheetSub.textContent = `${withHours} of ${rows.length} have logged hours today`;
    const maxMs = Math.max(...rows.map(r => r.todayMs), 1);
    timesheetList.innerHTML = rows.map(r => renderTimesheetRow(r.emp, r.todayMs, maxMs)).join('');
    timesheetList.querySelectorAll('.timesheet-row').forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', (e) => { e.stopPropagation(); openDetailPanel(row.dataset.id); });
    });
    timesheetScroll.scrollTop = 0;
    timesheetCard.classList.remove('scrolled-to-bottom');
}
function renderTimesheetModal() {
    if (!timesheetModalList) return;
    if (employees.length === 0) {
        timesheetModalList.innerHTML = `<div class="timesheet-empty">No employees yet.</div>`;
        timesheetModalSub.textContent = 'Everyone · sorted by hours today';
        return;
    }
    const rows = buildTimesheetRows();
    const withHours = rows.filter(r => r.todayMs > 0).length;
    timesheetModalSub.textContent = `${withHours} of ${rows.length} have logged hours today · sorted by hours`;
    const maxMs = Math.max(...rows.map(r => r.todayMs), 1);
    timesheetModalList.innerHTML = rows.map(r => renderTimesheetRow(r.emp, r.todayMs, maxMs)).join('');
    timesheetModalList.querySelectorAll('.timesheet-row').forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => { closeTimesheetModal(); openDetailPanel(row.dataset.id); });
    });
}
function openTimesheetModal() { renderTimesheetModal(); timesheetModalOverlay.classList.add('active'); }
function closeTimesheetModal() { timesheetModalOverlay.classList.remove('active'); }
timesheetCard.addEventListener('click', (e) => {
    if (e.target.closest('.timesheet-row')) return;
    openTimesheetModal();
});
timesheetCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('.timesheet-row')) return;
        e.preventDefault();
        openTimesheetModal();
    }
});
timesheetModalClose.addEventListener('click', closeTimesheetModal);
timesheetModalOverlay.addEventListener('click', (e) => {
    if (e.target === timesheetModalOverlay) closeTimesheetModal();
});
if (timesheetScroll) {
    timesheetScroll.addEventListener('scroll', () => {
        const atBottom = timesheetScroll.scrollTop + timesheetScroll.clientHeight >= timesheetScroll.scrollHeight - 4;
        timesheetCard.classList.toggle('scrolled-to-bottom', atBottom);
    });
}

// ==================== PAY ====================
function ensurePayDefaults(pay) {
    if (!pay) {
        return { rateType: 'hourly', rate: 0, taxPct: DEFAULT_TAX_PCT, pensionPct: DEFAULT_PENSION_PCT, other: 0 };
    }
    return {
        rateType: pay.rateType || 'hourly',
        rate: typeof pay.rate === 'number' ? pay.rate : parseFloat(pay.rate) || 0,
        taxPct: typeof pay.taxPct === 'number' ? pay.taxPct : (parseFloat(pay.taxPct) ?? DEFAULT_TAX_PCT),
        pensionPct: typeof pay.pensionPct === 'number' ? pay.pensionPct : (parseFloat(pay.pensionPct) ?? DEFAULT_PENSION_PCT),
        other: typeof pay.other === 'number' ? pay.other : parseFloat(pay.other) || 0
    };
}
function getCurrentPeriod() {
    const now = new Date();
    const start = startOfWeek(now);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    return {
        start: start.getTime(),
        end: end.getTime(),
        label: `${start.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} – ${new Date(end.getTime() - 86400000).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`
    };
}
function calculatePay(emp, periodStart, periodEnd) {
    const pay = ensurePayDefaults(emp.pay);
    const ms = getMsInRange(emp, periodStart, periodEnd);
    const hours = ms / 3600000;
    let gross = 0;
    if (pay.rateType === 'hourly') {
        gross = hours * pay.rate;
    } else {
        const periodWeeks = (periodEnd - periodStart) / (7 * 24 * 3600 * 1000);
        gross = pay.rate * (periodWeeks / 4.345);
    }
    const tax = gross * (pay.taxPct / 100);
    const pension = gross * (pay.pensionPct / 100);
    const other = pay.other || 0;
    const net = Math.max(0, gross - tax - pension - other);
    return { ms, hours, gross, tax, pension, other, net, pay };
}
let paySelectedId = null;
payEmployeeSelect.addEventListener('change', () => {
    paySelectedId = payEmployeeSelect.value || null;
    renderPay();
});
function renderPay() {
    refreshPayEmployeeDropdown();
    if (!paySelectedId || !employees.find(e => e.id === paySelectedId)) {
        payEmpty.style.display = 'block';
        payBody.style.display = 'none';
        paySelectedId = null;
        return;
    }
    const emp = employees.find(e => e.id === paySelectedId);
    if (!emp) { payEmpty.style.display = 'block'; payBody.style.display = 'none'; return; }
    payEmpty.style.display = 'none';
    payBody.style.display = 'grid';
    const pay = ensurePayDefaults(emp.pay);
    payRateType.value = pay.rateType;
    payRateLabel.textContent = pay.rateType === 'hourly' ? 'Hourly Rate' : 'Monthly Rate';
    if (document.activeElement !== payRate) payRate.value = pay.rate || '';
    if (document.activeElement !== payTax) payTax.value = pay.taxPct;
    if (document.activeElement !== payPension) payPension.value = pay.pensionPct;
    if (document.activeElement !== payOther) payOther.value = pay.other || '';
    const period = getCurrentPeriod();
    const calc = calculatePay(emp, period.start, period.end);
    calcHours.textContent = formatHM(calc.ms);
    calcGross.textContent = formatMoney(calc.gross);
    calcTax.textContent = '−' + formatMoney(calc.tax);
    calcPension.textContent = '−' + formatMoney(calc.pension);
    calcOther.textContent = '−' + formatMoney(calc.other);
    calcNet.textContent = formatMoney(calc.net);
}
payRateType.addEventListener('change', () => {
    payRateLabel.textContent = payRateType.value === 'hourly' ? 'Hourly Rate' : 'Monthly Rate';
});
paySaveBtn.addEventListener('click', () => {
    if (demoBlocked('Saving pay settings')) return;
    if (!paySelectedId) return;
    const emp = employees.find(e => e.id === paySelectedId);
    if (!emp) return;
    emp.pay = {
        rateType: payRateType.value,
        rate: parseFloat(payRate.value) || 0,
        taxPct: parseFloat(payTax.value) || 0,
        pensionPct: parseFloat(payPension.value) || 0,
        other: parseFloat(payOther.value) || 0
    };
    saveEmployees();
    logActivity('employee.pay', emp.id, { label: emp.name, rateType: emp.pay.rateType, rate: emp.pay.rate });
    renderPay();
    toast('Pay settings saved', 'success');
});
[payRate, payTax, payPension, payOther].forEach(input => {
    input.addEventListener('input', () => {
        if (!paySelectedId) return;
        const emp = employees.find(e => e.id === paySelectedId);
        if (!emp) return;
        const previewPay = {
            rateType: payRateType.value,
            rate: parseFloat(payRate.value) || 0,
            taxPct: parseFloat(payTax.value) || 0,
            pensionPct: parseFloat(payPension.value) || 0,
            other: parseFloat(payOther.value) || 0
        };
        const cloned = { ...emp, pay: previewPay };
        const period = getCurrentPeriod();
        const calc = calculatePay(cloned, period.start, period.end);
        calcHours.textContent = formatHM(calc.ms);
        calcGross.textContent = formatMoney(calc.gross);
        calcTax.textContent = '−' + formatMoney(calc.tax);
        calcPension.textContent = '−' + formatMoney(calc.pension);
        calcOther.textContent = '−' + formatMoney(calc.other);
        calcNet.textContent = formatMoney(calc.net);
    });
});

// ==================== PAY HISTORY + EXPORT ====================
function csvEscape(v) {
    if (v === null || v === undefined) return '';
    const s = String(v);
    if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
        return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
}
function buildSnapshotCsv(snap) {
    const headers = [
        'Period', 'Employee', 'Title', 'Department', 'Hours',
        'Rate Type', 'Rate', 'Gross', 'Tax %', 'Tax',
        'Pension %', 'Pension', 'Other', 'Net'
    ];
    const lines = [headers.join(',')];
    snap.rows.forEach(r => {
        const hours = typeof r.hours === 'number' ? r.hours.toFixed(2) : '';
        const rate = typeof r.rate === 'number' ? r.rate.toFixed(2) : '';
        const gross = typeof r.gross === 'number' ? r.gross.toFixed(2) : '';
        const taxPct = typeof r.taxPct === 'number' ? r.taxPct.toFixed(2) : '';
        const tax = typeof r.tax === 'number' ? r.tax.toFixed(2) : '';
        const pensionPct = typeof r.pensionPct === 'number' ? r.pensionPct.toFixed(2) : '';
        const pension = typeof r.pension === 'number' ? r.pension.toFixed(2) : '';
        const other = typeof r.other === 'number' ? r.other.toFixed(2) : '';
        const net = typeof r.net === 'number' ? r.net.toFixed(2) : '';
        lines.push([
            csvEscape(snap.label),
            csvEscape(r.name || ''),
            csvEscape(r.title || ''),
            csvEscape(r.department || ''),
            hours,
            csvEscape(r.rateType || ''),
            rate, gross, taxPct, tax,
            pensionPct, pension, other, net
        ].join(','));
    });
    return lines.join('\r\n');
}
function formatDateForFilename(ts) {
    if (typeof ts !== 'number') return '';
    const d = new Date(ts);
    if (isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}
function snapshotFilename(snap, ext) {
    const startStr = formatDateForFilename(snap.periodStart);
    const endStr = formatDateForFilename(snap.periodEnd - 86400000);
    const base = startStr && endStr ? `${startStr}_to_${endStr}` : (snap.id || 'snapshot');
    return `hrmode-payroll-${base}.${ext}`;
}
function downloadTextFile(filename, text, mime) {
    try {
        const blob = new Blob([text], { type: mime || 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        return true;
    } catch (e) { return false; }
}
function exportSnapshotCsv(snapId) {
    const snap = snapshots.find(s => s.id === snapId);
    if (!snap) { toast('Snapshot not found', 'error'); return; }
    if (!snap.rows || snap.rows.length === 0) {
        toast('This snapshot has no rows to export', 'warning');
        return;
    }
    const csv = buildSnapshotCsv(snap);
    const filename = snapshotFilename(snap, 'csv');
    const ok = downloadTextFile(filename, csv, 'text/csv;charset=utf-8');
    if (ok) toast(`Exported ${snap.rows.length} row${snap.rows.length === 1 ? '' : 's'} as CSV`, 'success', 3000);
    else toast('Could not export CSV', 'error');
}
function exportAllSnapshotsJson() {
    if (snapshots.length === 0) {
        toast('No closed pay periods to export', 'info');
        return;
    }
    const payload = {
        exportedAt: new Date().toISOString(),
        app: 'HRmode',
        schema: 1,
        count: snapshots.length,
        snapshots: snapshots
    };
    const json = JSON.stringify(payload, null, 2);
    const today = new Date().toISOString().slice(0, 10);
    const filename = `hrmode-payroll-all-${today}.json`;
    const ok = downloadTextFile(filename, json, 'application/json');
    if (ok) toast(`Exported ${snapshots.length} snapshot${snapshots.length === 1 ? '' : 's'} as JSON`, 'success', 3000);
    else toast('Could not export JSON', 'error');
}
function renderPayHistory() {
    if (!payHistoryList) return;
    if (snapshots.length === 0) {
        payHistoryList.innerHTML = `<div class="payhistory-empty">No pay periods closed yet. <strong>Click "Close Current Period" to snapshot the current week.</strong></div>`;
        return;
    }
    const sorted = snapshots.slice().sort((a, b) => (b.closedAt || 0) - (a.closedAt || 0));
    payHistoryList.innerHTML = sorted.map(snap => {
        const totalNet = snap.rows.reduce((acc, r) => acc + (r.net || 0), 0);
        const count = snap.rows.length;
        const closedRel = relativeTime(snap.closedAt);
        return `
            <div class="snapshot-row" data-id="${snap.id}">
                <div>
                    <div class="snapshot-label">${escapeHtml(snap.label)}</div>
                    <div class="snapshot-meta">${count} employee${count !== 1 ? 's' : ''} · closed ${escapeHtml(closedRel)}</div>
                </div>
                <div class="snapshot-total">${escapeHtml(formatMoney(totalNet))}</div>
                <div class="snapshot-view">View →</div>
                <button class="snapshot-export-btn" type="button" title="Export as CSV" aria-label="Export snapshot as CSV" data-snapshot-export="${snap.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
            </div>
        `;
    }).join('');
    payHistoryList.querySelectorAll('.snapshot-row').forEach(row => {
        row.addEventListener('click', (e) => {
            if (e.target.closest('.snapshot-export-btn')) return;
            openSnapshot(row.dataset.id);
        });
    });
    payHistoryList.querySelectorAll('[data-snapshot-export]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            exportSnapshotCsv(btn.dataset.snapshotExport);
        });
    });
}
function openClosePeriodModal() {
    if (demoBlocked('Closing pay periods')) return;
    const period = getCurrentPeriod();
    closePeriodLabel.textContent = period.label;
    closePeriodConfirm.value = '';
    closePeriodApplyBtn.disabled = true;
    closePeriodOverlay.classList.add('active');
    setTimeout(() => closePeriodConfirm.focus(), 120);
}
function closeClosePeriodModal() {
    closePeriodOverlay.classList.remove('active');
    closePeriodConfirm.value = '';
}
closePeriodConfirm.addEventListener('input', () => {
    closePeriodApplyBtn.disabled = closePeriodConfirm.value.trim().toUpperCase() !== 'CLOSE';
});
closePeriodBtn.addEventListener('click', openClosePeriodModal);
closePeriodClose.addEventListener('click', closeClosePeriodModal);
closePeriodCancelBtn.addEventListener('click', closeClosePeriodModal);
closePeriodOverlay.addEventListener('click', (e) => {
    if (e.target === closePeriodOverlay) closeClosePeriodModal();
});
closePeriodApplyBtn.addEventListener('click', () => {
    if (closePeriodApplyBtn.disabled) return;
    const period = getCurrentPeriod();
    const rows = employees.map(emp => {
        const calc = calculatePay(emp, period.start, period.end);
        return {
            employeeId: emp.id,
            name: emp.name,
            title: emp.title,
            department: emp.department,
            photo: emp.photo || '',
            ms: calc.ms, hours: calc.hours,
            rateType: calc.pay.rateType, rate: calc.pay.rate,
            taxPct: calc.pay.taxPct, pensionPct: calc.pay.pensionPct,
            other: calc.pay.other,
            gross: calc.gross, tax: calc.tax, pension: calc.pension, net: calc.net
        };
    });
    const snapshot = {
        id: 'snap_' + Date.now().toString(36),
        label: period.label,
        periodStart: period.start,
        periodEnd: period.end,
        closedAt: Date.now(),
        rows
    };
    snapshots.push(snapshot);
    saveSnapshots();
    logActivity('payperiod.close', snapshot.id, { label: period.label, employeeCount: rows.length });
    closeClosePeriodModal();
    renderPayHistory();
    toast(`Pay period closed · ${rows.length} employee${rows.length !== 1 ? 's' : ''} snapshotted`, 'success', 4000);
});
function openSnapshot(id) {
    const snap = snapshots.find(s => s.id === id);
    if (!snap) return;
    currentSnapshotId = id;
    snapshotTitle.textContent = 'Pay Period Snapshot';
    snapshotSub.textContent = `${snap.label} · closed ${relativeTime(snap.closedAt)}`;
    if (snap.rows.length === 0) {
        snapshotList.innerHTML = `<div class="payhistory-empty">No employees in this snapshot.</div>`;
    } else {
        snapshotList.innerHTML = snap.rows.map(row => {
            const hue = hueFromString(row.name || row.employeeId);
            const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
            const avatarContent = row.photo
                ? `<img src="${row.photo}" alt="">`
                : `<span>${escapeHtml(initials(row.name))}</span>`;
            return `
                <div class="snapshot-employee-row">
                    <div class="snapshot-employee-avatar" style="${avatarStyle}">${avatarContent}</div>
                    <div class="snapshot-employee-info">
                        <div class="snapshot-employee-name">${escapeHtml(row.name)}</div>
                        <div class="snapshot-employee-role">${escapeHtml(row.title || '')} · ${escapeHtml(formatHM(row.ms))}</div>
                    </div>
                    <div class="snapshot-employee-hours">${escapeHtml(formatMoney(row.gross))}</div>
                    <div class="snapshot-employee-pay">${escapeHtml(formatMoney(row.net))}</div>
                </div>
            `;
        }).join('');
    }
    snapshotOverlay.classList.add('active');
}
function closeSnapshot() {
    snapshotOverlay.classList.remove('active');
    currentSnapshotId = null;
}
snapshotClose.addEventListener('click', closeSnapshot);
snapshotOverlay.addEventListener('click', (e) => {
    if (e.target === snapshotOverlay) closeSnapshot();
});
if (snapshotExportBtn) {
    snapshotExportBtn.addEventListener('click', () => {
        if (!currentSnapshotId) { toast('No snapshot open', 'error'); return; }
        exportSnapshotCsv(currentSnapshotId);
    });
}
if (exportAllSnapshotsBtn) {
    exportAllSnapshotsBtn.addEventListener('click', exportAllSnapshotsJson);
}

// ==================== PROBATION ====================
function renderProbation() {
    if (!probationList) return;
    const now = startOfDay(new Date()).getTime();
    const onProbation = employees
        .filter(e => e.probationEnd)
        .map(e => {
            const endTs = new Date(e.probationEnd + 'T00:00:00').getTime();
            if (isNaN(endTs)) return null;
            const daysLeft = Math.ceil((endTs - now) / 86400000);
            if (daysLeft < 0) return null;
            return { emp: e, endTs, daysLeft };
        })
        .filter(Boolean)
        .sort((a, b) => a.daysLeft - b.daysLeft);
    probationCount.textContent = onProbation.length;
    if (onProbation.length === 0) {
        probationList.innerHTML = `<div class="probation-empty">No one is currently on probation.</div>`;
        return;
    }
    probationList.innerHTML = onProbation.map(({ emp, daysLeft }) => {
        const hue = hueFromString(emp.name || emp.id);
        const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
        const avatarContent = emp.photo
            ? `<img src="${emp.photo}" alt="">`
            : `<span>${escapeHtml(initials(emp.name))}</span>`;
        const daysLabel = daysLeft === 0 ? 'Ends today' : daysLeft === 1 ? '1 day left' : `${daysLeft} days left`;
        const isEndingSoon = daysLeft <= 14;
        return `
            <div class="probation-row" data-id="${emp.id}">
                <div class="probation-avatar" style="${avatarStyle}">${avatarContent}</div>
                <div class="probation-info">
                    <div class="probation-name">${escapeHtml(emp.name)}</div>
                    <div class="probation-detail">Ends ${escapeHtml(formatDate(emp.probationEnd))}</div>
                </div>
                <div class="probation-days ${isEndingSoon ? 'ending-soon' : ''}">${escapeHtml(daysLabel)}</div>
            </div>
        `;
    }).join('');
    probationList.querySelectorAll('.probation-row').forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => openDetailPanel(row.dataset.id));
    });
}

// ==================== CELEBRATIONS ====================
function nextOccurrence(monthDayStr) {
    if (!monthDayStr) return null;
    const parts = monthDayStr.split('-').map(Number);
    if (parts.length < 3 || parts.some(isNaN)) return null;
    const [, month, day] = parts;
    const now = new Date();
    const thisYear = now.getFullYear();
    let next = new Date(thisYear, month - 1, day);
    next.setHours(0, 0, 0, 0);
    const today = startOfDay(now);
    if (next.getTime() < today.getTime()) {
        next = new Date(thisYear + 1, month - 1, day);
        next.setHours(0, 0, 0, 0);
    }
    return next;
}
function buildCelebrations() {
    const events = [];
    employees.forEach(emp => {
        if (emp.birthday) {
            const next = nextOccurrence(emp.birthday);
            if (next) {
                const days = daysUntil(next);
                if (days >= 0) events.push({ emp, type: 'birthday', label: 'Birthday', date: next, days });
            }
        }
        if (emp.startDate) {
            const next = nextOccurrence(emp.startDate);
            if (next) {
                const days = daysUntil(next);
                const startYear = new Date(emp.startDate + 'T00:00:00').getFullYear();
                const years = next.getFullYear() - startYear;
                if (days >= 0 && years >= 1) {
                    events.push({ emp, type: 'anniversary', label: `${years}-year anniversary`, date: next, days });
                }
            }
        }
    });
    events.sort((a, b) => a.days - b.days);
    return events;
}
function renderCelebrations() {
    if (!celebrateList) return;
    const events = buildCelebrations();
    celebrateCount.textContent = events.length;
    if (events.length === 0) {
        celebrateList.innerHTML = `<div class="celebrate-empty">No upcoming celebrations. Add birthdays and start dates to see them here.</div>`;
        return;
    }
    const top = events.slice(0, 3);
    celebrateList.innerHTML = top.map(ev => {
        const emp = ev.emp;
        const dateLabel = ev.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        const detail = ev.days === 0
            ? (ev.type === 'birthday' ? `🎂 Today! · ${ev.label}` : `🎉 Today! · ${ev.label}`)
            : ev.days === 1 ? `Tomorrow · ${ev.label}` : `In ${ev.days} days · ${ev.label}`;
        return `
            <div class="celebrate-item" data-id="${emp.id}">
                <div class="celebrate-icon ${ev.type}">${ev.type === 'birthday' ? '🎂' : '🎉'}</div>
                <div class="celebrate-info">
                    <div class="celebrate-name">${escapeHtml(emp.name)}</div>
                    <div class="celebrate-detail">${escapeHtml(detail)}</div>
                </div>
                <div class="celebrate-date">${escapeHtml(dateLabel)}</div>
            </div>
        `;
    }).join('');
    celebrateList.querySelectorAll('.celebrate-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => openDetailPanel(item.dataset.id));
    });
}
function renderCelebrationsModal() {
    if (!celebrateModalList) return;
    const events = buildCelebrations();
    celebrateModalSub.textContent = events.length === 0
        ? 'No upcoming celebrations'
        : `${events.length} upcoming · birthdays & work anniversaries`;
    if (events.length === 0) {
        celebrateModalList.innerHTML = `<div class="celebrate-empty">No upcoming celebrations. Add birthdays and start dates to employees.</div>`;
        return;
    }
    celebrateModalList.innerHTML = events.map(ev => {
        const emp = ev.emp;
        const hue = hueFromString(emp.name || emp.id);
        const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
        const avatarContent = emp.photo
            ? `<img src="${emp.photo}" alt="">`
            : `<span>${escapeHtml(initials(emp.name))}</span>`;
        const dateLabel = ev.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        const detail = ev.days === 0
            ? (ev.type === 'birthday' ? `🎂 Today! · ${ev.label}` : `🎉 Today! · ${ev.label}`)
            : ev.days === 1 ? `Tomorrow · ${ev.label}` : `In ${ev.days} days · ${ev.label}`;
        const icon = ev.type === 'birthday' ? '🎂' : '🎉';
        return `
            <div class="celebrate-item" data-id="${emp.id}">
                <div class="celebrate-avatar" style="${avatarStyle}">${avatarContent}<div class="celebrate-icon ${ev.type}">${icon}</div></div>
                <div class="celebrate-info">
                    <div class="celebrate-name">${escapeHtml(emp.name)}</div>
                    <div class="celebrate-detail">${escapeHtml(detail)}</div>
                </div>
                <div class="celebrate-date">${escapeHtml(dateLabel)}</div>
            </div>
        `;
    }).join('');
    celebrateModalList.querySelectorAll('.celebrate-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            closeCelebrationsModal();
            openDetailPanel(item.dataset.id);
        });
    });
}
function openCelebrationsModal() { renderCelebrationsModal(); celebrateModalOverlay.classList.add('active'); }
function closeCelebrationsModal() { celebrateModalOverlay.classList.remove('active'); }
celebrateCard.addEventListener('click', openCelebrationsModal);
celebrateCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCelebrationsModal();
    }
});
celebrateModalClose.addEventListener('click', closeCelebrationsModal);
celebrateModalOverlay.addEventListener('click', (e) => {
    if (e.target === celebrateModalOverlay) closeCelebrationsModal();
});

// ==================== ONBOARDING ====================
function makeOnboardingItems() {
    return ONBOARDING_DEFAULT_ITEMS.map(label => ({
        id: 'ob_' + Math.random().toString(36).slice(2, 9),
        label,
        done: false,
        doneAt: null
    }));
}
function onboardingProgress(emp) {
    const ob = emp.onboarding;
    if (!ob || !Array.isArray(ob.items) || ob.items.length === 0) {
        return { done: 0, total: 0, pct: 0, complete: false };
    }
    const total = ob.items.length;
    const done = ob.items.filter(i => i.done).length;
    return { done, total, pct: Math.round((done / total) * 100), complete: done === total };
}
function getOnboardingEmployees(includeCompleted = false) {
    return employees
        .filter(e => e.onboarding && Array.isArray(e.onboarding.items) && e.onboarding.items.length > 0)
        .filter(e => includeCompleted || !onboardingProgress(e).complete);
}
function toggleOnboardingItem(empId, itemId) {
    const emp = employees.find(e => e.id === empId);
    if (!emp || !emp.onboarding) return;
    const item = emp.onboarding.items.find(i => i.id === itemId);
    if (!item) return;
    const wasComplete = onboardingProgress(emp).complete;
    item.done = !item.done;
    item.doneAt = item.done ? Date.now() : null;
    saveEmployees();
    renderOnboarding();
    renderOnboardingModal();
    if (currentDetailId === empId) renderDetailPanel(emp);
    const prog = onboardingProgress(emp);
    if (prog.complete && !wasComplete) {
        toast(`${emp.name} — onboarding complete 🎉`, 'success', 3000);
        fireConfetti(2600);
        logActivity('onboarding.complete', empId, { label: emp.name });
    }
}
function addOnboardingItem(empId, label) {
    const emp = employees.find(e => e.id === empId);
    if (!emp || !emp.onboarding) return;
    const clean = label.trim();
    if (!clean) return;
    emp.onboarding.items.push({
        id: 'ob_' + Math.random().toString(36).slice(2, 9),
        label: clean,
        done: false,
        doneAt: null
    });
    saveEmployees();
    renderOnboarding();
    renderOnboardingModal();
    if (currentDetailId === empId) renderDetailPanel(emp);
}
function removeOnboardingItem(empId, itemId) {
    const emp = employees.find(e => e.id === empId);
    if (!emp || !emp.onboarding) return;
    emp.onboarding.items = emp.onboarding.items.filter(i => i.id !== itemId);
    if (emp.onboarding.items.length === 0) emp.onboarding = null;
    saveEmployees();
    renderOnboarding();
    renderOnboardingModal();
    if (currentDetailId === empId) renderDetailPanel(emp);
}
function restartOnboarding(empId) {
    const emp = employees.find(e => e.id === empId);
    if (!emp) return;
    emp.onboarding = { startedAt: Date.now(), targetDate: '', items: makeOnboardingItems() };
    saveEmployees();
    renderOnboarding();
    renderOnboardingModal();
    if (currentDetailId === empId) renderDetailPanel(emp);
    toast(`${emp.name} — onboarding restarted`, 'info', 2500);
}
function resetAllCompleted() {
    const completed = getOnboardingEmployees(true).filter(e => onboardingProgress(e).complete);
    if (completed.length === 0) { toast('Nothing to reset', 'info'); return; }
    completed.forEach(e => { e.onboarding = null; });
    saveEmployees();
    renderOnboarding();
    renderOnboardingModal();
    toast(`Cleared ${completed.length} completed checklist${completed.length !== 1 ? 's' : ''}`, 'success');
}
function renderOnboarding() {
    if (!onboardingList) return;
    const inProgress = getOnboardingEmployees(false);
    onboardingCount.textContent = inProgress.length;
    if (inProgress.length === 0) {
        const anyDone = getOnboardingEmployees(true).length > 0;
        onboardingList.innerHTML = `<div class="onboarding-empty">${anyDone ? 'Everyone is onboarded 🎉' : 'No one is onboarding right now.'}</div>`;
        return;
    }
    onboardingList.innerHTML = inProgress.map(emp => {
        const hue = hueFromString(emp.name || emp.id);
        const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
        const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="">` : `<span>${escapeHtml(initials(emp.name))}</span>`;
        const p = onboardingProgress(emp);
        return `
            <div class="onboarding-row" data-id="${emp.id}">
                <div class="onboarding-avatar" style="${avatarStyle}">${avatarContent}</div>
                <div class="onboarding-info">
                    <div class="onboarding-name">${escapeHtml(emp.name)}</div>
                    <div class="onboarding-progress-text">${p.done} of ${p.total} done</div>
                </div>
                <div class="onboarding-progress-bar"><div class="onboarding-progress-fill ${p.complete ? 'done' : ''}" style="width: ${p.pct}%"></div></div>
            </div>
        `;
    }).join('');
    onboardingList.querySelectorAll('.onboarding-row').forEach(row => {
        row.addEventListener('click', (e) => {
            e.stopPropagation();
            expandedOnboardingIds.add(row.dataset.id);
            openOnboardingModal();
            requestAnimationFrame(() => {
                const block = onboardingModalBody.querySelector(`[data-emp-id="${row.dataset.id}"]`);
                if (block) block.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    });
}
function openOnboardingModal() {
    renderOnboardingModal();
    onboardingModalOverlay.classList.add('active');
}
function closeOnboardingModal() {
    onboardingModalOverlay.classList.remove('active');
    expandedOnboardingIds.clear();
}
function renderOnboardingModal() {
    if (!onboardingModalBody) return;
    if (typeof renderOnboardingTemplateChips === 'function') renderOnboardingTemplateChips();

    const all = getOnboardingEmployees(true);
    if (all.length === 0) {
        onboardingModalSub.textContent = 'No checklists yet — new hires appear here automatically.';
        onboardingModalBody.innerHTML = `<div class="onboarding-empty">No onboarding checklists yet.</div>`;
        return;
    }
    const inProgress = all.filter(e => !onboardingProgress(e).complete);
    const completed = all.filter(e => onboardingProgress(e).complete);
    onboardingModalSub.textContent = inProgress.length === 0
        ? `${completed.length} completed · nothing in progress`
        : `${inProgress.length} in progress · ${completed.length} completed`;

    const templateOptions = (typeof onboardingTemplates !== 'undefined' ? onboardingTemplates : []).map(t =>
        `<option value="${t.id}">${escapeHtml(t.name)} · ${t.items.length} items</option>`
    ).join('');

    const renderBlock = (emp) => {
        const p = onboardingProgress(emp);
        const expanded = expandedOnboardingIds.has(emp.id);
        const hue = hueFromString(emp.name || emp.id);
        const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
        const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="">` : `<span>${escapeHtml(initials(emp.name))}</span>`;

        const itemsHtml = emp.onboarding.items.map(item => `
            <div class="onboarding-item ${item.done ? 'checked' : ''}">
                <input type="checkbox" data-emp="${emp.id}" data-item="${item.id}" ${item.done ? 'checked' : ''}>
                <label>${escapeHtml(item.label)}</label>
                <button class="onboarding-item-remove" data-emp="${emp.id}" data-item="${item.id}" title="Remove item" aria-label="Remove item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
        `).join('');

        const targetStatus = onboardingTargetStatus(emp.onboarding.targetDate);
        const targetPill = emp.onboarding.targetDate
            ? (() => {
                const t = new Date(emp.onboarding.targetDate + 'T00:00:00');
                if (isNaN(t.getTime())) return '';
                const days = Math.round((t.getTime() - startOfDay(new Date()).getTime()) / 86400000);
                let label;
                if (days < 0) label = `${Math.abs(days)}d overdue`;
                else if (days === 0) label = 'Due today';
                else if (days === 1) label = 'Due tomorrow';
                else label = `Due in ${days}d`;
                const cls = targetStatus === 'overdue' ? 'overdue' : (targetStatus === 'soon' ? 'soon' : '');
                return `<span class="onboarding-employee-target-pill ${cls}">🎯 ${escapeHtml(label)}</span>`;
            })()
            : '';

        const dateCls = targetStatus === 'overdue' ? 'overdue' : (targetStatus === 'soon' ? 'soon' : '');

        return `
            <div class="onboarding-employee-block ${expanded ? 'expanded' : ''}" data-emp-id="${emp.id}">
                <div class="onboarding-employee-head" data-toggle="${emp.id}">
                    <div class="onboarding-avatar" style="${avatarStyle}">${avatarContent}</div>
                    <div class="onboarding-employee-meta">
                        <div class="onboarding-employee-name">${escapeHtml(emp.name)}${targetPill}</div>
                        <div class="onboarding-employee-sub">${escapeHtml(emp.title || '')}</div>
                    </div>
                    <div class="onboarding-employee-count ${p.complete ? 'done' : ''}">${p.done}/${p.total}</div>
                    <svg class="onboarding-toggle-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
                </div>
                <div class="onboarding-checklist">
                    ${itemsHtml}
                    <div class="onboarding-add-row">
                        <input type="text" placeholder="Add a checklist item…" data-add-input="${emp.id}">
                        <button class="btn btn-primary btn-sm" data-add-btn="${emp.id}" type="button">Add</button>
                    </div>
                    <div class="onboarding-employee-actions">
                        <select class="onboarding-apply-select" data-apply-select="${emp.id}" title="Apply a template">
                            <option value="">Apply template…</option>
                            ${templateOptions}
                        </select>
                        <button class="onboarding-save-template-btn" data-save-template="${emp.id}" type="button" title="Save this checklist as a new template">
                            💾 Save as template
                        </button>
                        <span class="onboarding-target-date-wrap ${dateCls}">
                            <label for="ob-target-${emp.id}">🎯 Target</label>
                            <input type="date" id="ob-target-${emp.id}" data-target-date="${emp.id}" value="${escapeHtml(emp.onboarding.targetDate || '')}">
                        </span>
                    </div>
                    ${p.complete ? `<div class="onboarding-block-actions"><button class="onboarding-restart-btn" data-restart="${emp.id}" type="button">Restart checklist</button></div>` : ''}
                </div>
            </div>
        `;
    };

    onboardingModalBody.innerHTML = all.map(renderBlock).join('');

    onboardingModalBody.querySelectorAll('[data-toggle]').forEach(head => {
        head.addEventListener('click', () => {
            const id = head.dataset.toggle;
            if (expandedOnboardingIds.has(id)) expandedOnboardingIds.delete(id);
            else expandedOnboardingIds.add(id);
            const block = head.closest('.onboarding-employee-block');
            block.classList.toggle('expanded');
        });
    });
    onboardingModalBody.querySelectorAll('input[type="checkbox"][data-emp]').forEach(cb => {
        cb.addEventListener('change', () => toggleOnboardingItem(cb.dataset.emp, cb.dataset.item));
    });
    onboardingModalBody.querySelectorAll('.onboarding-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeOnboardingItem(btn.dataset.emp, btn.dataset.item);
        });
    });
    onboardingModalBody.querySelectorAll('[data-add-btn]').forEach(btn => {
        const id = btn.dataset.addBtn;
        const input = onboardingModalBody.querySelector(`[data-add-input="${id}"]`);
        const commit = () => {
            const v = input.value.trim();
            if (!v) return;
            addOnboardingItem(id, v);
            const next = onboardingModalBody.querySelector(`[data-add-input="${id}"]`);
            if (next) next.focus();
        };
        btn.addEventListener('click', commit);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); commit(); } });
    });
    onboardingModalBody.querySelectorAll('[data-restart]').forEach(btn => {
        btn.addEventListener('click', () => {
            openConfirm({
                title: 'Restart onboarding',
                message: 'Reset this checklist back to the default items, all unchecked.',
                phrase: 'RESET',
                onConfirm: () => restartOnboarding(btn.dataset.restart)
            });
        });
    });
    onboardingModalBody.querySelectorAll('[data-apply-select]').forEach(sel => {
        sel.addEventListener('change', () => {
            const empId = sel.dataset.applySelect;
            const tplId = sel.value;
            if (!tplId) return;
            sel.value = '';
            applyTemplateToEmployee(empId, tplId);
        });
    });
    onboardingModalBody.querySelectorAll('[data-save-template]').forEach(btn => {
        btn.addEventListener('click', () => {
            saveChecklistAsTemplate(btn.dataset.saveTemplate);
        });
    });
    onboardingModalBody.querySelectorAll('[data-target-date]').forEach(inp => {
        inp.addEventListener('change', () => {
            setOnboardingTargetDate(inp.dataset.targetDate, inp.value);
        });
    });
}
if (onboardingCard) {
    onboardingCard.addEventListener('click', openOnboardingModal);
    onboardingCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnboardingModal(); }
    });
}
if (onboardingModalClose) onboardingModalClose.addEventListener('click', closeOnboardingModal);
if (onboardingModalOverlay) onboardingModalOverlay.addEventListener('click', (e) => {
    if (e.target === onboardingModalOverlay) closeOnboardingModal();
});
if (onboardingResetAllBtn) onboardingResetAllBtn.addEventListener('click', resetAllCompleted);

// ==================== ACTIVITY LOG UI ====================
function activityMeta(action) {
    if (action.startsWith('employee.add'))    return { icon: '➕', cat: 'employee',   label: 'Added employee' };
    if (action.startsWith('employee.edit'))   return { icon: '✏️', cat: 'employee',   label: 'Edited employee' };
    if (action.startsWith('employee.delete')) return { icon: '🗑️', cat: 'employee',   label: 'Removed employee' };
    if (action.startsWith('employee.restore'))return { icon: '♻️', cat: 'employee',   label: 'Restored employee' };
    if (action.startsWith('employee.purge'))  return { icon: '💥', cat: 'employee',   label: 'Permanently deleted employee' };
    if (action.startsWith('employee.bulkDelete')) return { icon: '🗑️', cat: 'employee', label: 'Bulk removed employees' };
    if (action.startsWith('employee.bulkDept'))   return { icon: '🏢', cat: 'employee', label: 'Bulk moved departments' };
    if (action.startsWith('employee.status')) return { icon: '🔄', cat: 'employee',   label: 'Changed status' };
    if (action.startsWith('employee.pay'))    return { icon: '💰', cat: 'pay',        label: 'Updated pay' };
    if (action.startsWith('title.rename'))    return { icon: '✏️', cat: 'employee',   label: 'Renamed job title' };
    if (action.startsWith('department.rename')) return { icon: '✏️', cat: 'employee', label: 'Renamed department' };
    if (action.startsWith('timeoff.request')) return { icon: '📅', cat: 'timeoff',    label: 'Requested time off' };
    if (action.startsWith('timeoff.restore')) return { icon: '♻️', cat: 'timeoff',    label: 'Restored time off' };
    if (action.startsWith('payperiod.close')) return { icon: '📆', cat: 'pay',        label: 'Closed pay period' };
    if (action.startsWith('onboarding.template')) return { icon: '📋', cat: 'onboarding', label: 'Template change' };
    if (action.startsWith('onboarding.apply'))    return { icon: '📋', cat: 'onboarding', label: 'Applied template' };
    if (action.startsWith('onboarding.target'))   return { icon: '🎯', cat: 'onboarding', label: 'Set target date' };
    if (action.startsWith('onboarding.complete')) return { icon: '✅', cat: 'onboarding', label: 'Completed onboarding' };
    if (action.startsWith('document.upload')) return { icon: '📄', cat: 'documents',  label: 'Uploaded document' };
    if (action.startsWith('document.delete')) return { icon: '🗑️', cat: 'documents',  label: 'Moved document to trash' };
    if (action.startsWith('document.restore'))return { icon: '♻️', cat: 'documents',  label: 'Restored document' };
    if (action.startsWith('announce.add'))    return { icon: '📢', cat: 'announce',   label: 'Posted announcement' };
    if (action.startsWith('announce.edit'))   return { icon: '✏️', cat: 'announce',   label: 'Edited announcement' };
    if (action.startsWith('announce.delete')) return { icon: '🗑️', cat: 'announce',   label: 'Moved announcement to trash' };
    if (action.startsWith('announce.restore'))return { icon: '♻️', cat: 'announce',   label: 'Restored announcement' };
    if (action.startsWith('kudos.give'))      return { icon: '⭐', cat: 'kudos',      label: 'Gave kudos' };
    if (action.startsWith('kudos.delete'))    return { icon: '🗑️', cat: 'kudos',      label: 'Deleted kudos' };
    if (action.startsWith('goal.add'))        return { icon: '🎯', cat: 'goal',       label: 'Created goal' };
    if (action.startsWith('goal.edit'))       return { icon: '✏️', cat: 'goal',       label: 'Edited goal' };
    if (action.startsWith('goal.delete'))     return { icon: '🗑️', cat: 'goal',       label: 'Moved goal to trash' };
    if (action.startsWith('goal.restore'))    return { icon: '♻️', cat: 'goal',       label: 'Restored goal' };
    if (action.startsWith('note.add'))        return { icon: '📝', cat: 'note',       label: 'Added note' };
    if (action.startsWith('note.edit'))       return { icon: '✏️', cat: 'note',       label: 'Edited note' };
    if (action.startsWith('note.delete'))     return { icon: '🗑️', cat: 'note',       label: 'Deleted note' };
    if (action.startsWith('jobhistory.add'))  return { icon: '🏷️', cat: 'jobhistory', label: 'Added job history entry' };
    if (action.startsWith('jobhistory.edit')) return { icon: '✏️', cat: 'jobhistory', label: 'Edited job history entry' };
    if (action.startsWith('jobhistory.delete')) return { icon: '🗑️', cat: 'jobhistory', label: 'Moved job history to trash' };
    if (action.startsWith('jobhistory.restore'))return { icon: '♻️', cat: 'jobhistory', label: 'Restored job history' };
    if (action.startsWith('holiday.delete'))  return { icon: '🗑️', cat: 'employee',   label: 'Moved holiday to trash' };
    if (action.startsWith('holiday.restore')) return { icon: '♻️', cat: 'employee',   label: 'Restored holiday' };
    if (action.startsWith('trash.empty'))     return { icon: '💥', cat: 'employee',   label: 'Emptied trash' };
    if (action.startsWith('trash.purge'))     return { icon: '💥', cat: 'employee',   label: 'Permanently deleted from trash' };
    return { icon: '•', cat: 'employee', label: 'Activity' };
}
function activityFilteredEntries() {
    let rows = activityLog.slice().sort((a, b) => (b.at || 0) - (a.at || 0));
    if (activityActiveCat !== 'all') {
        rows = rows.filter(r => activityMeta(r.action).cat === activityActiveCat);
    }
    if (activitySearchTerm) {
        const q = activitySearchTerm.toLowerCase();
        rows = rows.filter(r => {
            const meta = activityMeta(r.action);
            const label = (r.meta && r.meta.label) ? String(r.meta.label) : '';
            const actionText = String(r.action || '');
            return label.toLowerCase().includes(q) ||
                   actionText.toLowerCase().includes(q) ||
                   meta.label.toLowerCase().includes(q);
        });
    }
    return rows;
}
function renderActivityList() {
    if (!activityList) return;
    const rows = activityFilteredEntries();
    if (activityLog.length === 0) {
        activityList.innerHTML = `
            <div class="activity-empty">
                <div class="activity-empty-icon">🕐</div>
                <div class="activity-empty-title">No activity yet</div>
                <div class="activity-empty-sub">Changes you make to your team will show up here.</div>
            </div>
        `;
        return;
    }
    if (rows.length === 0) {
        activityList.innerHTML = `
            <div class="activity-empty">
                <div class="activity-empty-icon">🔍</div>
                <div class="activity-empty-title">No matching entries</div>
                <div class="activity-empty-sub">Try a different filter or search term.</div>
            </div>
        `;
        return;
    }
    activityList.innerHTML = rows.map(r => {
        const meta = activityMeta(r.action);
        const labelText = (r.meta && r.meta.label) ? String(r.meta.label) : '';
        const who = labelText ? `<strong>${escapeHtml(labelText)}</strong>` : '';
        let context = '';
        if (r.action === 'employee.status' && r.meta && r.meta.from && r.meta.to) {
            const fromDef = getStatusDef(r.meta.from);
            const toDef = getStatusDef(r.meta.to);
            context = `${escapeHtml(fromDef.label)} → ${escapeHtml(toDef.label)}`;
        } else if (r.action === 'timeoff.request' && r.meta) {
            const typeLabel = timeOffTypeLabel(r.meta.type);
            const hours = typeof r.meta.hours === 'number' ? formatHours(r.meta.hours) : '';
            context = [typeLabel, hours].filter(Boolean).join(' · ');
        } else if (r.action === 'employee.pay' && r.meta) {
            context = [r.meta.rateType, r.meta.rate].filter(v => v !== undefined && v !== null && v !== '').join(' · ');
        } else if (r.action === 'payperiod.close' && r.meta && r.meta.employeeCount) {
            context = `${r.meta.employeeCount} employee${r.meta.employeeCount === 1 ? '' : 's'}`;
        } else if (r.action === 'trash.empty' && r.meta && r.meta.count) {
            context = `${r.meta.count} item${r.meta.count === 1 ? '' : 's'} purged`;
        } else if ((r.action === 'title.rename' || r.action === 'department.rename') && r.meta && r.meta.affected) {
            context = `updated ${r.meta.affected} employee${r.meta.affected === 1 ? '' : 's'}`;
        }
        const mainLine = who
            ? `${escapeHtml(meta.label)} ${who}`
            : escapeHtml(meta.label);
        const metaLine = context
            ? `<div class="activity-entry-meta">${context}</div>`
            : '';
        return `
            <div class="activity-entry">
                <div class="activity-entry-icon" data-cat="${meta.cat}">${meta.icon}</div>
                <div class="activity-entry-body">
                    <div class="activity-entry-label">${mainLine}</div>
                    ${metaLine}
                </div>
                <div class="activity-entry-time">${escapeHtml(relativeTime(r.at))}</div>
            </div>
        `;
    }).join('');
}
function updateActivityTabsActive() {
    if (!activityTabs) return;
    activityTabs.querySelectorAll('.activity-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.cat === activityActiveCat);
    });
}
function updateActivityModalSub() {
    if (!activityModalSub) return;
    const total = activityLog.length;
    if (total === 0) { activityModalSub.textContent = 'No events logged yet'; return; }
    const shown = activityFilteredEntries().length;
    if (shown === total) {
        activityModalSub.textContent = `${total} ${total === 1 ? 'event' : 'events'} · most recent first`;
    } else {
        activityModalSub.textContent = `${shown} of ${total} ${total === 1 ? 'event' : 'events'} shown`;
    }
}
function openActivityModal() {
    activityActiveCat = 'all';
    activitySearchTerm = '';
    if (activitySearchInput) activitySearchInput.value = '';
    updateActivityTabsActive();
    renderActivityList();
    updateActivityModalSub();
    activityModalOverlay.classList.add('active');
}
function closeActivityModal() {
    activityModalOverlay.classList.remove('active');
}
if (activityTrigger) activityTrigger.addEventListener('click', openActivityModal);
if (activityModalClose) activityModalClose.addEventListener('click', closeActivityModal);
if (activityModalOverlay) activityModalOverlay.addEventListener('click', (e) => {
    if (e.target === activityModalOverlay) closeActivityModal();
});
if (activityTabs) {
    activityTabs.querySelectorAll('.activity-tab').forEach(t => {
        t.addEventListener('click', () => {
            activityActiveCat = t.dataset.cat || 'all';
            updateActivityTabsActive();
            renderActivityList();
            updateActivityModalSub();
        });
    });
}
if (activitySearchInput) {
    activitySearchInput.addEventListener('input', () => {
        activitySearchTerm = activitySearchInput.value.trim();
        renderActivityList();
        updateActivityModalSub();
    });
}
if (activityExportBtn) {
    activityExportBtn.addEventListener('click', () => {
        if (activityLog.length === 0) { toast('Nothing to export', 'info'); return; }
        try {
            const blob = new Blob([JSON.stringify(activityLog, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `hrmode-activity-${new Date().toISOString().slice(0,10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 2000);
            toast(`Exported ${activityLog.length} ${activityLog.length === 1 ? 'event' : 'events'}`, 'success', 2500);
        } catch (e) { toast('Could not export activity', 'error'); }
    });
}
if (activityClearBtn) {
    activityClearBtn.addEventListener('click', () => {
        activityClearOverlay.classList.add('active');
    });
}
if (activityClearClose) activityClearClose.addEventListener('click', () => {
    activityClearOverlay.classList.remove('active');
});
if (activityClearCancelBtn) activityClearCancelBtn.addEventListener('click', () => {
    activityClearOverlay.classList.remove('active');
});
if (activityClearOverlay) activityClearOverlay.addEventListener('click', (e) => {
    if (e.target === activityClearOverlay) activityClearOverlay.classList.remove('active');
});
if (activityClearApplyBtn) activityClearApplyBtn.addEventListener('click', () => {
    if (protectMode) {
        toast('Protect Mode is on — turn it off to clear activity', 'warning');
        activityClearOverlay.classList.remove('active');
        return;
    }
    activityLog = [];
    try { localStorage.removeItem(ACTIVITY_KEY); } catch (e) {}
    activityClearOverlay.classList.remove('active');
    renderActivityList();
    updateActivityModalSub();
    toast('Activity log cleared', 'success');
});

// ==================== COMMAND PALETTE ====================
function buildCmdkActions() {
    return [
        { id: 'action-add', section: 'Actions', title: 'Add Employee', sub: 'Create a new hire', icon: 'plus',
          hint: 'New', run: () => { if (demoBlocked('Adding employees')) return; openAddModal(); } },
        { id: 'action-timeoff-request', section: 'Actions', title: 'Request Time Off', sub: 'Submit a leave request',
          icon: 'calendar', hint: 'New', run: () => openTimeOffRequestModal() },
        { id: 'action-timeoff-open', section: 'Actions', title: 'Open Time Off', sub: 'Balances, pending, history',
          icon: 'calendar', hint: 'Open', run: () => openTimeOffModal('balances') },
        { id: 'action-holiday-add', section: 'Actions', title: 'Add Holiday', sub: 'New company or public holiday',
          icon: 'calendar', hint: 'New', run: () => openHolidayEditModal() },
        { id: 'action-holiday-open', section: 'Actions', title: 'Open Holidays', sub: 'All holidays, edit & delete',
          icon: 'globe', hint: 'Open', run: () => openHolidayModal() },
        { id: 'action-announce-add', section: 'Actions', title: 'Post Announcement', sub: 'Share an update',
          icon: 'megaphone', hint: 'New', run: () => openAnnounceEditModal() },
        { id: 'action-announce-open', section: 'Actions', title: 'Open Announcements', sub: 'Company feed',
          icon: 'megaphone', hint: 'Open', run: () => openAnnounceModal() },
        { id: 'action-kudos-give', section: 'Actions', title: 'Give Kudos', sub: 'Recognize a teammate',
          icon: 'star', hint: 'New', run: () => openKudosGiveModal() },
        { id: 'action-kudos-open', section: 'Actions', title: 'Open Kudos Wall', sub: 'Peer recognition',
          icon: 'star', hint: 'Open', run: () => openKudosModal() },
        { id: 'action-goal-add', section: 'Actions', title: 'New Goal / OKR', sub: 'Set a target',
          icon: 'target', hint: 'New', run: () => openGoalEditModal() },
        { id: 'action-goal-open', section: 'Actions', title: 'Open Goals & OKRs', sub: 'Team objectives',
          icon: 'target', hint: 'Open', run: () => openGoalsModal() },
        { id: 'action-activity-open', section: 'Actions', title: 'Open Activity Log', sub: 'Recent changes',
          icon: 'clock', hint: 'Open', run: () => openActivityModal() },
        { id: 'action-trash-open', section: 'Actions', title: 'Open Trash', sub: 'Restore or purge deleted items',
          icon: 'clock', hint: 'Open', run: () => openTrashModal() },
        { id: 'action-toggle-theme', section: 'Actions', title: 'Toggle Theme', sub: 'Switch light / dark',
          icon: 'theme', hint: '',
          run: () => {
              const cur = document.documentElement.getAttribute('data-theme');
              const next = cur === 'dark' ? 'light' : 'dark';
              setTheme(next, true);
              try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
              toast(`Theme → ${next}`, 'info', 1800);
          } },
        { id: 'action-toggle-protect', section: 'Actions', title: 'Toggle Protect Mode',
          sub: 'Lock or unlock delete actions', icon: 'lock', hint: protectMode ? 'ON' : 'OFF',
          run: () => { if (demoBlocked('Protect Mode toggle')) return; setProtectMode(!protectMode); } },
        { id: 'action-clear-filters', section: 'Actions', title: 'Clear Filters', sub: 'Reset search, dept, status',
          icon: 'filter', hint: '',
          run: () => { clearAllFilters(); toast('Filters cleared', 'info', 1800); } },
        { id: 'action-select-mode', section: 'Actions', title: selectMode ? 'Exit Select Mode' : 'Enter Select Mode',
          sub: 'Pick multiple employees', icon: 'select', hint: '',
          run: () => { if (selectMode) exitSelectMode(); else enterSelectMode(); } },
        { id: 'action-org-open', section: 'Actions', title: 'Open Org Chart', sub: 'Full zoomable view',
          icon: 'org', hint: 'Open', run: () => openOrgModal() },
        { id: 'action-timesheet', section: 'Sections', title: "Today's Timesheet", sub: 'View all logged hours',
          icon: 'clock', hint: 'Open', run: () => openTimesheetModal() },
        { id: 'action-onboarding', section: 'Sections', title: 'Onboarding Checklists', sub: 'In-progress hires',
          icon: 'check', hint: 'Open', run: () => openOnboardingModal() },
        { id: 'action-celebrations', section: 'Sections', title: 'Celebrations', sub: 'Birthdays & anniversaries',
          icon: 'cake', hint: 'Open', run: () => openCelebrationsModal() },
        { id: 'action-scroll-announce', section: 'Sections', title: 'Announcements', sub: 'Company feed',
          icon: 'megaphone', hint: 'Jump', run: () => { document.getElementById('announceStrip')?.scrollIntoView({behavior:'smooth', block:'center'}); } },
        { id: 'action-scroll-timeoff', section: 'Sections', title: 'Time Off tile', sub: 'Leave balances',
          icon: 'calendar', hint: 'Jump', run: () => { document.getElementById('timeOffCard')?.scrollIntoView({behavior:'smooth', block:'center'}); } },
        { id: 'action-scroll-holidays', section: 'Sections', title: 'Holidays tile', sub: 'International, national, company',
          icon: 'globe', hint: 'Jump', run: () => { document.getElementById('holidayCard')?.scrollIntoView({behavior:'smooth', block:'center'}); } },
        { id: 'action-scroll-org', section: 'Sections', title: 'Org Chart', sub: 'Reporting structure',
          icon: 'org', hint: 'Jump', run: () => { document.getElementById('orgChartCard')?.scrollIntoView({behavior:'smooth', block:'center'}); } },
        { id: 'action-scroll-pay', section: 'Sections', title: 'Pay & Compensation', sub: 'Gross → net calculator',
          icon: 'dollar', hint: 'Jump', run: () => { document.querySelector('.pay-card')?.scrollIntoView({behavior:'smooth', block:'center'}); } },
        { id: 'action-scroll-payhistory', section: 'Sections', title: 'Pay History', sub: 'Closed pay periods',
          icon: 'history', hint: 'Jump', run: () => { document.querySelector('.payhistory-card')?.scrollIntoView({behavior:'smooth', block:'center'}); } },
        { id: 'action-scroll-probation', section: 'Sections', title: 'Probation', sub: 'New hires on probation',
          icon: 'hourglass', hint: 'Jump', run: () => { document.querySelector('.probation-card')?.scrollIntoView({behavior:'smooth', block:'center'}); } },
        { id: 'action-scroll-kudos', section: 'Sections', title: 'Kudos tile', sub: 'Peer recognition',
          icon: 'star', hint: 'Jump', run: () => { document.getElementById('kudosCard')?.scrollIntoView({behavior:'smooth', block:'center'}); } },
        { id: 'action-scroll-goals', section: 'Sections', title: 'Goals tile', sub: 'Objectives & key results',
          icon: 'target', hint: 'Jump', run: () => { document.getElementById('goalsCard')?.scrollIntoView({behavior:'smooth', block:'center'}); } }
    ];
}
const CMDK_ICONS = {
    plus:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    theme:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    lock:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    filter:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    select:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    clock:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    check:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    cake:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/></svg>',
    dollar:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>',
    hourglass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v6l6 4-6 4v6"/><path d="M18 2v6l-6 4 6 4v6"/></svg>',
    globe:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    org:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="4" rx="1"/><rect x="2" y="17" width="6" height="4" rx="1"/><rect x="16" y="17" width="6" height="4" rx="1"/><path d="M12 7v4"/><path d="M5 17v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/></svg>',
    calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    user:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    megaphone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v3a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
    star:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    target:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
};
function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const safeText = String(text);
    const idx = safeText.toLowerCase().indexOf(query.toLowerCase());
    if (idx < 0) return escapeHtml(safeText);
    const before = safeText.slice(0, idx);
    const match = safeText.slice(idx, idx + query.length);
    const after = safeText.slice(idx + query.length);
    return `${escapeHtml(before)}<span class="cmdk-match">${escapeHtml(match)}</span>${escapeHtml(after)}`;
}
function buildCmdkItems() {
    const q = cmdkQuery.trim();
    const actions = buildCmdkActions();
    const lowerQ = q.toLowerCase();
    const employeeItems = employees
        .filter(e => {
            if (!q) return true;
            return (e.name || '').toLowerCase().includes(lowerQ) ||
                   (e.title || '').toLowerCase().includes(lowerQ) ||
                   (e.department || '').toLowerCase().includes(lowerQ) ||
                   (e.email || '').toLowerCase().includes(lowerQ);
        })
        .slice(0, q ? 8 : 5)
        .map(e => {
            const hue = hueFromString(e.name || e.id);
            const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
            const avatarContent = e.photo
                ? `<img src="${e.photo}" alt="">`
                : `<span>${escapeHtml(initials(e.name))}</span>`;
            return {
                id: 'emp-' + e.id,
                section: 'Employees',
                title: e.name,
                sub: [e.title, e.department].filter(Boolean).join(' · ') || 'View profile',
                icon: 'avatar',
                iconHtml: `<div class="cmdk-item-icon" style="${avatarStyle}">${avatarContent}</div>`,
                hint: '',
                rawName: e.name,
                run: () => { openDetailPanel(e.id); }
            };
        });
    const filteredActions = actions
        .filter(a => {
            if (!q) return true;
            return a.title.toLowerCase().includes(lowerQ) || (a.sub || '').toLowerCase().includes(lowerQ);
        })
        .slice(0, q ? 8 : 12);
    return { employeeItems, filteredActions, q };
}
function renderCmdk() {
    if (!cmdkResults) return;
    const { employeeItems, filteredActions, q } = buildCmdkItems();
    cmdkItems = [];
    let html = '';
    if (employeeItems.length > 0) {
        html += `<div class="cmdk-section-label">Employees</div>`;
        employeeItems.forEach(item => {
            const i = cmdkItems.length;
            cmdkItems.push(item);
            html += cmdkItemHtml(item, i, q);
        });
    }
    if (filteredActions.length > 0) {
        const sectionLabel = q ? 'Results' : 'Actions & Sections';
        html += `<div class="cmdk-section-label">${sectionLabel}</div>`;
        filteredActions.forEach(item => {
            const i = cmdkItems.length;
            cmdkItems.push(item);
            html += cmdkItemHtml(item, i, q);
        });
    }
    if (cmdkItems.length === 0) {
        html = `<div class="cmdk-empty"><div class="cmdk-empty-icon">🔍</div>Nothing matches "<strong>${escapeHtml(q)}</strong>"</div>`;
    }
    cmdkResults.innerHTML = html;
    cmdkResults.querySelectorAll('.cmdk-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cmdkActiveIndex = parseInt(el.dataset.index, 10);
            updateCmdkActive();
        });
        el.addEventListener('click', () => {
            cmdkActiveIndex = parseInt(el.dataset.index, 10);
            runCmdkActive();
        });
    });
    if (cmdkActiveIndex >= cmdkItems.length) cmdkActiveIndex = Math.max(0, cmdkItems.length - 1);
    updateCmdkActive();
    ensureActiveVisible();
}
function cmdkItemHtml(item, index, query) {
    const iconHtml = item.iconHtml
        ? item.iconHtml
        : `<div class="cmdk-item-icon">${CMDK_ICONS[item.icon] || CMDK_ICONS.user}</div>`;
    const titleHtml = highlightMatch(item.title, query);
    const subHtml = item.sub ? highlightMatch(item.sub, query) : '';
    return `<div class="cmdk-item ${index === cmdkActiveIndex ? 'active' : ''}" data-index="${index}">
        ${iconHtml}
        <div class="cmdk-item-body">
            <div class="cmdk-item-title">${titleHtml}</div>
            ${subHtml ? `<div class="cmdk-item-sub">${subHtml}</div>` : ''}
        </div>
        ${item.hint ? `<div class="cmdk-item-hint">${escapeHtml(item.hint)}</div>` : ''}
    </div>`;
}
function updateCmdkActive() {
    cmdkResults.querySelectorAll('.cmdk-item').forEach(el => {
        const i = parseInt(el.dataset.index, 10);
        el.classList.toggle('active', i === cmdkActiveIndex);
    });
}
function ensureActiveVisible() {
    const el = cmdkResults.querySelector(`.cmdk-item[data-index="${cmdkActiveIndex}"]`);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const box = cmdkResults.getBoundingClientRect();
    if (rect.top < box.top) {
        el.scrollIntoView({ block: 'nearest' });
    } else if (rect.bottom > box.bottom) {
        el.scrollIntoView({ block: 'nearest' });
    }
}
function runCmdkActive() {
    const item = cmdkItems[cmdkActiveIndex];
    if (!item) return;
    closeCmdk();
    setTimeout(() => { if (typeof item.run === 'function') item.run(); }, 30);
}
function openCmdk() {
    if (cmdkOpen) return;
    cmdkOpen = true;
    cmdkQuery = '';
    cmdkActiveIndex = 0;
    cmdkInput.value = '';
    cmdkOverlay.classList.add('active');
    renderCmdk();
    setTimeout(() => cmdkInput.focus(), 60);
}
function closeCmdk() {
    cmdkOpen = false;
    cmdkOverlay.classList.remove('active');
}
cmdkTrigger.addEventListener('click', openCmdk);
cmdkOverlay.addEventListener('click', (e) => {
    if (e.target === cmdkOverlay) closeCmdk();
});
cmdkInput.addEventListener('input', () => {
    cmdkQuery = cmdkInput.value;
    cmdkActiveIndex = 0;
    renderCmdk();
});
cmdkInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        cmdkActiveIndex = Math.min(cmdkItems.length - 1, cmdkActiveIndex + 1);
        updateCmdkActive(); ensureActiveVisible();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        cmdkActiveIndex = Math.max(0, cmdkActiveIndex - 1);
        updateCmdkActive(); ensureActiveVisible();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        runCmdkActive();
    } else if (e.key === 'Escape') {
        e.preventDefault();
        closeCmdk();
    } else if (e.key === 'Tab') {
        e.preventDefault();
        cmdkActiveIndex = (cmdkActiveIndex + (e.shiftKey ? -1 : 1) + cmdkItems.length) % cmdkItems.length;
        updateCmdkActive(); ensureActiveVisible();
    }
});
document.addEventListener('keydown', (e) => {
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    const mod = isMac ? e.metaKey : e.ctrlKey;
    if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (cmdkOpen) closeCmdk(); else openCmdk();
    }
});

// ==================== RENDER ====================
function render() {
    renderChips();
    updateStatusPillsActive();
    const visible = getVisible();
    updateStats(visible.length);
    updateStatusCounts();
    renderRecent();
    renderOrgChartPreview();
    renderTimeOff();
    renderHolidays();
    renderTimesheet();
    renderPay();
    renderPayHistory();
    renderProbation();
    renderCelebrations();
    renderOnboarding();
    renderAnnouncements();
    renderKudos();
    renderGoals();
    updateBulkBar();
    updateNavStatusPill();
    updateTrashBadge();
    requestAnimationFrame(updateStripArrows);

    if (employees.length === 0) {
        employeeGrid.innerHTML = '';
        employeeGrid.style.display = 'none';
        emptyState.style.display = 'block';
        noResults.style.display = 'none';
        return;
    }
    if (visible.length === 0) {
        employeeGrid.innerHTML = '';
        employeeGrid.style.display = 'none';
        emptyState.style.display = 'none';
        noResults.style.display = 'block';
        if (activeStatus && activeDept) {
            noResultsText.textContent = `No one is ${getStatusDef(activeStatus).label} in ${activeDept}.`;
        } else if (activeStatus) {
            noResultsText.textContent = `No one is currently ${getStatusDef(activeStatus).label}.`;
        } else if (activeDept && searchTerm) {
            noResultsText.textContent = `No matches in ${activeDept} for "${searchTerm}".`;
        } else if (activeDept) {
            noResultsText.textContent = `No one in ${activeDept} yet.`;
        } else {
            noResultsText.textContent = 'Try a different search term.';
        }
        return;
    }
    employeeGrid.style.display = 'grid';
    emptyState.style.display = 'none';
    noResults.style.display = 'none';
    employeeGrid.innerHTML = visible.map(renderCard).join('');

    employeeGrid.querySelectorAll('.card').forEach(cardEl => {
        const id = cardEl.dataset.id;
        cardEl.addEventListener('click', (e) => {
            if (selectMode) { e.preventDefault(); toggleSelect(id); return; }
            if (e.target.closest('.card-action-btn, .card-select-checkbox, [data-status-popover]')) return;
            openDetailPanel(id);
        });
    });
    employeeGrid.querySelectorAll('[data-action="edit"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (demoBlocked('Editing employees')) return;
            openEditModal(btn.dataset.id);
        });
    });
    employeeGrid.querySelectorAll('[data-action="delete"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (demoBlocked('Deleting employees')) return;
            if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
            deleteEmployee(btn.dataset.id);
        });
        if (protectMode || DEMO_MODE) {
            btn.disabled = true;
            btn.title = DEMO_MODE ? 'Disabled in demo mode' : 'Protect Mode is on';
        }
    });
    employeeGrid.querySelectorAll('.card-select-checkbox').forEach(box => {
        box.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSelect(box.dataset.id);
        });
    });
    employeeGrid.querySelectorAll('[data-status-popover]').forEach(line => {
        line.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectMode) return;
            openStatusPopover(line.dataset.statusPopover, line);
        });
        line.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                openStatusPopover(line.dataset.statusPopover, line);
            }
        });
    });
}

function renderCard(emp) {
    const isSelected = selectedIds.has(emp.id);
    const hue = hueFromString(emp.name || emp.id);
    const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
    const avatarContent = emp.photo
        ? `<img src="${emp.photo}" alt="${escapeHtml(emp.name)}">`
        : `<span>${escapeHtml(initials(emp.name))}</span>`;

    const empStatus = emp.status || DEFAULT_STATUS;
    const statusDef = getStatusDef(empStatus);
    const showTimer = isProducing(emp) && PRODUCING_STATUSES.includes(emp.activeSession.status);
    const timerInline = showTimer
        ? `<span class="card-timer-inline" data-timer-id="${emp.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span class="timer-value">${formatHMS(Date.now() - emp.activeSession.start)}</span>
           </span>`
        : '';

    const deptLine = emp.department
        ? `<div class="card-dept">${escapeHtml(emp.department)}</div>`
        : `<div class="card-dept empty">No department</div>`;

    const deleteDisabled = protectMode || DEMO_MODE;
    const isBirthday = isBirthdayToday(emp);
    const birthdayRing = isBirthday ? `<span class="card-birthday-ring" aria-hidden="true"></span>` : '';

    return `
        <div class="card ${isSelected ? 'selected' : ''}" data-id="${emp.id}">
            <div class="card-select-checkbox" data-id="${emp.id}" role="checkbox" aria-checked="${isSelected}"></div>
            <div class="card-actions">
                <button class="card-action-btn edit" data-action="edit" data-id="${emp.id}" title="Edit" aria-label="Edit">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="card-action-btn delete" data-action="delete" data-id="${emp.id}" title="${deleteDisabled ? (DEMO_MODE ? 'Disabled in demo mode' : 'Protect Mode is on') : 'Delete'}" aria-label="Delete" ${deleteDisabled ? 'disabled' : ''}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>
            <div class="card-avatar" style="${avatarStyle}">${avatarContent}${birthdayRing}</div>
            <div class="card-name" title="${escapeHtml(emp.name)}">${escapeHtml(emp.name)}</div>
            <div class="card-title" title="${escapeHtml(emp.title)}">${escapeHtml(emp.title)}</div>
            ${deptLine}
            <span class="card-status-line clickable" data-status-popover="${emp.id}" role="button" tabindex="0" aria-haspopup="menu" aria-expanded="false" title="Click to change status">
                <span class="card-status-dot" data-status="${empStatus}"></span>
                <span class="card-status-label" data-status="${empStatus}">${escapeHtml(statusDef.label)}</span>
                ${timerInline}
            </span>
        </div>
    `;
}

// ==================== SELECT MODE ====================
function enterSelectMode() {
    if (demoBlocked('Select mode')) return;
    selectMode = true;
    document.body.classList.add('select-mode');
    selectToggleBtn.classList.add('active');
    selectToggleBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Cancel`;
    updateBulkBar();
}
function exitSelectMode() {
    selectMode = false;
    selectedIds.clear();
    document.body.classList.remove('select-mode');
    selectToggleBtn.classList.remove('active');
    selectToggleBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> Select`;
    updateBulkBar();
    render();
}
selectToggleBtn.addEventListener('click', () => {
    if (selectMode) exitSelectMode(); else enterSelectMode();
});
function toggleSelect(id) {
    if (selectedIds.has(id)) selectedIds.delete(id); else selectedIds.add(id);
    updateBulkBar();
    render();
}
function updateBulkBar() {
    const count = selectedIds.size;
    if (!selectMode || count === 0) { bulkBar.style.display = 'none'; return; }
    bulkBar.style.display = 'block';
    bulkCount.textContent = count;
    if (protectMode || DEMO_MODE) {
        bulkDeleteBtn.disabled = true;
        bulkChangeDeptBtn.disabled = true;
        bulkDeleteBtn.textContent = DEMO_MODE ? '🔒 Demo locked' : '🔒 Delete Locked';
    } else {
        bulkDeleteBtn.disabled = false;
        bulkChangeDeptBtn.disabled = false;
        bulkDeleteBtn.textContent = 'Delete Selected';
    }
}

// ==================== BULK ACTIONS ====================
bulkCancelBtn.addEventListener('click', () => { selectedIds.clear(); updateBulkBar(); render(); });
bulkDeleteBtn.addEventListener('click', () => {
    if (demoBlocked('Bulk delete')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const count = selectedIds.size;
    if (count === 0) return;
    const phrase = count >= 3 ? `DELETE ${count}` : 'DELETE';
    openConfirm({
        title: count === 1 ? 'Move employee to Trash' : `Move ${count} employees to Trash`,
        message: `You're about to move ${count} employee${count !== 1 ? 's' : ''} to Trash. You can restore them within 30 days.`,
        phrase,
        onConfirm: () => {
            const ids = Array.from(selectedIds);
            ids.forEach(empId => {
                const emp = employees.find(e => e.id === empId);
                if (!emp) return;
                const related = {
                    jobHistory: jobHistory.filter(h => h.employeeId === empId),
                    goals: goals.filter(g => g.ownerId === empId),
                    documents: documents.filter(d => d.employeeId === empId),
                    timeOffRequests: (emp.timeOff && Array.isArray(emp.timeOff.requests)) ? emp.timeOff.requests.slice() : []
                };
                const snapshot = JSON.parse(JSON.stringify(emp));
                trashEntity('employee', snapshot, emp.name, emp.title || '', related);
            });
            employees = employees.filter(e => !selectedIds.has(e.id));
            jobHistory = jobHistory.filter(h => !selectedIds.has(h.employeeId));
            goals = goals.filter(g => !selectedIds.has(g.ownerId));
            documents = documents.filter(d => !selectedIds.has(d.employeeId));
            saveEmployees();
            saveJobHistory();
            saveGoals();
            saveDocuments();
            logActivity('employee.bulkDelete', null, { count, ids });
            selectedIds.clear();
            updateBulkBar();
            render();
            toast(`${count} employee${count !== 1 ? 's' : ''} moved to Trash`, 'success');
        }
    });
});

// ==================== CHANGE DEPT MODAL ====================
function openDeptModal() {
    if (demoBlocked('Changing departments')) return;
    if (selectedIds.size === 0) return;
    deptModalSub.innerHTML = `Moving <strong>${selectedIds.size}</strong> employee${selectedIds.size !== 1 ? 's' : ''} to:`;
    refreshBulkDeptDropdown();
    bulkDeptSelect.value = '';
    bulkDeptNew.value = '';
    bulkDeptNew.style.display = 'none';
    deptModalError.style.display = 'none';
    updateComboRemoveButtons();
    deptModalOverlay.classList.add('active');
}
function closeDeptModal() { deptModalOverlay.classList.remove('active'); }
bulkChangeDeptBtn.addEventListener('click', openDeptModal);
deptModalClose.addEventListener('click', closeDeptModal);
deptCancelBtn.addEventListener('click', closeDeptModal);
deptModalOverlay.addEventListener('click', (e) => {
    if (e.target === deptModalOverlay) closeDeptModal();
});
deptApplyBtn.addEventListener('click', () => {
    let finalDept = '';
    if (bulkDeptSelect.value === '__add_new__') {
        finalDept = bulkDeptNew.value.trim();
        if (!finalDept) { deptModalError.textContent = 'Please type a department name.'; deptModalError.style.display = 'block'; return; }
        departments = addToList(departments, finalDept);
        saveArray(DEPTS_KEY, departments);
    } else if (bulkDeptSelect.value) {
        finalDept = bulkDeptSelect.value;
    } else {
        deptModalError.textContent = 'Please pick a department.'; deptModalError.style.display = 'block'; return;
    }
    const count = selectedIds.size;
    employees = employees.map(e => selectedIds.has(e.id) ? { ...e, department: finalDept } : e);
    saveEmployees();
    logActivity('employee.bulkDept', null, { count, department: finalDept });
    closeDeptModal();
    selectedIds.clear();
    updateBulkBar();
    render();
    toast(`${count} employee${count !== 1 ? 's' : ''} moved to ${finalDept}`, 'success');
});

// ==================== DETAIL PANEL ====================
function renderEmergencyCard(emp) {
    const em = normalizeEmergency(emp.emergency);
    if (!hasEmergencyInfo(em)) {
        return `<div class="detail-emergency-empty">No emergency contact on file.</div>`;
    }
    const rows = [];
    if (em.name || em.relation) {
        const label = em.relation ? `${em.name || '—'} · ${em.relation}` : (em.name || '—');
        rows.push(`
            <div class="detail-emergency-row">
                <div class="em-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                    <span class="em-label">Contact</span>
                    <span class="em-value">${escapeHtml(label)}</span>
                </div>
            </div>
        `);
    }
    if (em.phone) {
        rows.push(`
            <div class="detail-emergency-row">
                <div class="em-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                    <span class="em-label">Phone</span>
                    <a class="em-value" href="tel:${escapeHtml(em.phone)}">${escapeHtml(em.phone)}</a>
                </div>
            </div>
        `);
    }
    if (em.email) {
        rows.push(`
            <div class="detail-emergency-row">
                <div class="em-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                    <span class="em-label">Email</span>
                    <a class="em-value" href="mailto:${escapeHtml(em.email)}">${escapeHtml(em.email)}</a>
                </div>
            </div>
        `);
    }
    return `<div class="detail-emergency-card">${rows.join('')}</div>`;
}

function renderDetailPanel(emp) {
    const hue = hueFromString(emp.name || emp.id);
    const avatarStyle = `background: linear-gradient(135deg, hsl(${hue}, 70%, 58%), hsl(${(hue + 30) % 360}, 70%, 48%));`;
    const avatarContent = emp.photo ? `<img src="${emp.photo}" alt="${escapeHtml(emp.name)}">` : `<span>${escapeHtml(initials(emp.name))}</span>`;
    const nicknameChip = emp.nickname ? `<span class="detail-nickname">"${escapeHtml(emp.nickname)}"</span>` : '';
    const aboutHtml = emp.about && emp.about.trim()
        ? `<div class="detail-about">${escapeHtml(emp.about)}</div>`
        : `<div class="detail-about empty">${NOT_PROVIDED_TEXT}</div>`;
    const empStatus = emp.status || DEFAULT_STATUS;
    const currentlyProducing = isProducing(emp) && PRODUCING_STATUSES.includes(emp.activeSession.status);
    const liveTimerHtml = currentlyProducing
        ? `<div class="detail-live-timer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span class="timer-value">${formatHMS(Date.now() - emp.activeSession.start)}</span><span class="timer-label">Live</span></div>`
        : '';
    const now = Date.now();
    const weekStart = startOfWeek(new Date()).getTime();
    const todayMs = getTodayMs(emp);
    const weekMs = getMsInRange(emp, weekStart, now);
    const allTimeMs = getAllTimeWorkTotal(emp.timeLog || []) + (currentlyProducing ? Math.max(0, now - emp.activeSession.start) : 0);
    const timeStatsHtml = `
        <div class="time-stats">
            <div class="time-stat"><span class="time-stat-num">${escapeHtml(formatHM(todayMs))}</span><span class="time-stat-label">Today</span></div>
            <div class="time-stat"><span class="time-stat-num">${escapeHtml(formatHM(weekMs))}</span><span class="time-stat-label">This Week</span></div>
            <div class="time-stat"><span class="time-stat-num">${escapeHtml(formatDecimalHours(allTimeMs))}</span><span class="time-stat-label">All Time</span></div>
        </div>`;
    const statusStatsHtml = `
        <div class="status-stats-row">
            ${TRACKED_STATUSES.map(key => {
                const def = getStatusDef(key);
                return `<div class="status-stat-box" data-status="${key}">
                    <span class="status-stat-label">${escapeHtml(def.label)}</span>
                    <span class="status-stat-value">${escapeHtml(formatHM(getTodayMsForStatus(emp, key)))}</span>
                </div>`;
            }).join('')}
        </div>`;
    const allSessions = Array.isArray(emp.timeLog) ? emp.timeLog.slice() : [];
    if (isProducing(emp)) {
        allSessions.push({ status: emp.activeSession.status, start: emp.activeSession.start, end: null });
    }
    const meaningfulSessions = allSessions.filter(s => (s.status || 'production') !== 'off-shift');
    meaningfulSessions.sort((a, b) => sessionEnd(b) - sessionEnd(a));
    const recentSessions = meaningfulSessions.slice(0, 8);
    let sessionsHtml = '';
    if (recentSessions.length === 0) {
        sessionsHtml = `<div class="session-empty">No sessions logged yet. Status changes will appear here.</div>`;
    } else {
        sessionsHtml = recentSessions.map(s => {
            const isLive = !s.end;
            const statusKey = s.status || 'production';
            const def = getStatusDef(statusKey);
            const startStr = formatClockTime(s.start);
            const endStr = isLive ? null : formatClockTime(s.end);
            const dur = (s.end || Date.now()) - s.start;
            const timeRange = isLive
                ? `<span>${escapeHtml(startStr)}</span><span class="session-arrow">→</span><span>now</span>`
                : `<span>${escapeHtml(startStr)}</span><span class="session-arrow">→</span><span>${escapeHtml(endStr)}</span>`;
            return `<div class="session-row ${isLive ? 'live' : ''}"><span class="session-status-dot" data-status="${statusKey}"></span><div class="session-info"><span class="session-status-label" data-status="${statusKey}">${escapeHtml(def.label)}${isLive ? ' <span class="session-badge-live">Live</span>' : ''}</span><span class="session-time-range">${timeRange}</span></div><span class="session-duration" data-live-start="${isLive ? s.start : ''}">${escapeHtml(formatHM(dur))}</span></div>`;
        }).join('');
    }
    const balance = timeOffBalanceFor(emp);
    const dangerRemaining = balance.remaining <= 0;
    const timeOffSectionHtml = `
        <div class="detail-section-title" style="margin-top: 28px;">Time Off</div>
        <div class="detail-timeoff-summary">
            <div class="detail-timeoff-stat used">
                <span class="detail-timeoff-stat-num">${escapeHtml(formatHours(balance.used))}</span>
                <span class="detail-timeoff-stat-label">Used</span>
            </div>
            <div class="detail-timeoff-stat pending">
                <span class="detail-timeoff-stat-num">${escapeHtml(formatHours(balance.pending))}</span>
                <span class="detail-timeoff-stat-label">Pending</span>
            </div>
            <div class="detail-timeoff-stat remaining ${dangerRemaining ? 'danger' : ''}">
                <span class="detail-timeoff-stat-num">${escapeHtml(formatHours(balance.remaining))}</span>
                <span class="detail-timeoff-stat-label">Remaining</span>
            </div>
        </div>
        <div class="detail-timeoff-list">
            ${(() => {
                const reqs = (emp.timeOff && Array.isArray(emp.timeOff.requests)) ? emp.timeOff.requests.slice() : [];
                reqs.sort((a, b) => (b.requestedAt || 0) - (a.requestedAt || 0));
                if (reqs.length === 0) {
                    return `<div class="session-empty">No time off requests yet.</div>`;
                }
                return reqs.slice(0, 5).map(r => {
                    const datesLabel = r.startDate === r.endDate
                        ? formatDate(r.startDate)
                        : `${formatDate(r.startDate)} → ${formatDate(r.endDate)}`;
                    return `<div class="timeoff-request-card" data-req-id="${r.id}">
                        <div class="timeoff-avatar" style="${avatarStyle}">${avatarContent}</div>
                        <div class="timeoff-request-body">
                            <div class="timeoff-request-name">${escapeHtml(timeOffTypeLabel(r.type))}</div>
                            <div class="timeoff-request-detail"><span>${escapeHtml(datesLabel)}</span></div>
                            ${r.reason ? `<div class="timeoff-request-reason">${escapeHtml(r.reason)}</div>` : ''}
                        </div>
                        <div class="timeoff-request-actions">
                            <span class="timeoff-request-hours">${formatHours(r.hours)}</span>
                            <span class="timeoff-request-status" data-status="${r.status}">${escapeHtml(r.status)}</span>
                        </div>
                    </div>`;
                }).join('');
            })()}
        </div>
        <button class="btn btn-ghost btn-sm" id="detailTimeOffRequestBtn" type="button" style="width:100%;">+ Request Time Off</button>
    `;
    const empNotes = notesForEmployee(emp.id);
    const notesSectionHtml = `
        <div class="detail-section-title" style="margin-top: 28px; display: flex; align-items: center; justify-content: space-between;">
            <span>Notes &amp; 1-on-1s</span>
            <button class="btn btn-ghost btn-sm" id="detailNotesAddBtn" type="button">+ Add</button>
        </div>
        ${empNotes.length === 0 ? `<div class="session-empty">No notes yet.</div>` : `
            <div class="detail-notes-list">
                ${empNotes.slice(0, 3).map(n => `
                    <div class="note-modal-card" data-type="${n.type}" data-note-id="${n.id}">
                        <div class="note-head">
                            <span class="note-type">${escapeHtml(noteTypeLabel(n.type))}</span>
                            <span class="note-date">${escapeHtml(formatDate(n.date))}</span>
                            ${n.private ? `<span class="note-private-badge">🔒 Private</span>` : ''}
                        </div>
                        <div class="note-body">${escapeHtml(n.body.length > 220 ? n.body.slice(0, 220) + '…' : n.body)}</div>
                    </div>
                `).join('')}
            </div>
        `}
        ${empNotes.length > 0 ? `<button class="btn btn-ghost btn-sm" id="detailNotesViewAllBtn" type="button" style="width:100%;">${empNotes.length > 3 ? `View all ${empNotes.length} notes →` : 'Open notes →'}</button>` : ''}
    `;
    const empKudos = kudosForEmployee(emp.id);
    const kudosSectionHtml = empKudos.length > 0 ? `
        <div class="detail-section-title" style="margin-top: 28px;">Kudos Received (${empKudos.length})</div>
        <div class="detail-notes-list">
            ${empKudos.slice(0, 3).map(k => {
                const badge = kudosBadgeInfo(k.badge);
                const badgeHtml = k.badge ? `<span class="kudos-badge">${badge.emoji}</span>` : '';
                return `
                    <div class="kudos-item">
                        <div class="kudos-avatar" style="${avatarInlineStyle(k.fromName || '')}"><span>${escapeHtml(initials(k.fromName || '?'))}</span></div>
                        <div class="kudos-body">
                            <div class="kudos-line">${badgeHtml}<strong>${escapeHtml(k.fromName || 'Someone')}</strong></div>
                            <div class="kudos-message">${escapeHtml(k.message)}</div>
                            <div class="kudos-time">${escapeHtml(relativeTime(k.createdAt))}</div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
        ${empKudos.length > 3 ? `<button class="btn btn-ghost btn-sm" id="detailKudosViewAllBtn" type="button" style="width:100%;">See all kudos →</button>` : ''}
    ` : '';
    const empJobHistory = jobHistoryForEmployee(emp.id);
    const jobHistorySectionHtml = `
        <div class="detail-section-title" style="margin-top: 28px; display: flex; align-items: center; justify-content: space-between;">
            <span>Job History</span>
            <button class="btn btn-ghost btn-sm" id="detailJobHistoryAddBtn" type="button">+ Add</button>
        </div>
        ${empJobHistory.length === 0 ? `<div class="job-history-empty">No career events recorded.</div>` : `
            <div class="job-history-list">
                ${empJobHistory.slice(0, JOB_HISTORY_PREVIEW_COUNT).map(h => jobHistoryItemHTML(h, { showActions: true })).join('')}
            </div>
        `}
        ${empJobHistory.length > JOB_HISTORY_PREVIEW_COUNT ? `<div class="session-empty" style="padding: 10px;">+${empJobHistory.length - JOB_HISTORY_PREVIEW_COUNT} more entries</div>` : ''}
    `;
    const empDocs = documentsForEmployee(emp.id);
    const empDocBytes = documentsTotalBytesForEmployee(emp.id);
    const documentsSectionHtml = `
        <div class="detail-section-title" style="margin-top: 28px; display: flex; align-items: center; justify-content: space-between;">
            <span>Documents</span>
            <button class="btn btn-ghost btn-sm" id="detailDocsAddBtn" type="button">+ Upload</button>
        </div>
        ${empDocs.length === 0 ? `<div class="documents-empty">No documents on file.</div>` : `
            <div class="detail-doc-list">
                ${empDocs.slice(0, 3).map(d => docItemHTML(d, { showActions: true })).join('')}
            </div>
        `}
        ${empDocs.length > 0 ? `<button class="btn btn-ghost btn-sm" id="detailDocsViewAllBtn" type="button" style="width:100%;">${empDocs.length > 3 ? `View all ${empDocs.length} documents →` : 'Open documents →'}</button>` : ''}
        ${empDocs.length > 0 ? `<div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 8px; text-align: center;">${escapeHtml(formatBytes(empDocBytes))} · max ${DOC_MAX_FILES_PER_EMPLOYEE} files / ${escapeHtml(formatBytes(DOC_MAX_FILE_BYTES))} each</div>` : ''}
    `;
    const birthdayRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg></div><div class="info-text"><span class="info-label">Birthday</span>${emp.birthday ? `<span class="info-value">${escapeHtml(formatDate(emp.birthday))}${isBirthdayToday(emp) ? ' 🎂' : ''}</span>` : `<span class="info-value not-provided">${NOT_PROVIDED_TEXT}</span>`}</div></div>`;
    const locationRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div class="info-text"><span class="info-label">Location</span>${valueOrNotProvided(emp.location)}</div></div>`;
    const pronounsRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg></div><div class="info-text"><span class="info-label">Pronouns</span>${valueOrNotProvided(emp.pronouns)}</div></div>`;
    const maritalRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><div class="info-text"><span class="info-label">Marital Status</span>${valueOrNotProvided(emp.marital)}</div></div>`;
    const genderRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="14" r="5"/><line x1="19" y1="5" x2="13.6" y2="10.4"/><line x1="22" y1="2" x2="19" y2="5"/><line x1="16" y1="8" x2="19" y2="5"/></svg></div><div class="info-text"><span class="info-label">Gender</span>${valueOrNotProvided(emp.gender)}</div></div>`;
    const hobbyRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><div class="info-text"><span class="info-label">Hobby</span>${valueOrNotProvided(emp.hobby)}</div></div>`;
    const emailRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div class="info-text"><span class="info-label">Email</span>${emp.email ? `<a class="info-value" href="mailto:${escapeHtml(emp.email)}">${escapeHtml(emp.email)}</a>` : `<span class="info-value not-provided">${NOT_PROVIDED_TEXT}</span>`}</div></div>`;
    const phoneRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div><div class="info-text"><span class="info-label">Phone</span>${valueOrNotProvided(emp.phone)}</div></div>`;
    const startRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><div class="info-text"><span class="info-label">Started</span>${emp.startDate ? `<span class="info-value">${escapeHtml(formatDate(emp.startDate))} · ${escapeHtml(relativeFromDate(emp.startDate))}</span>` : `<span class="info-value not-provided">${NOT_PROVIDED_TEXT}</span>`}</div></div>`;
    const probationRow = emp.probationEnd
        ? `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><div class="info-text"><span class="info-label">Probation ends</span><span class="info-value">${escapeHtml(formatDate(emp.probationEnd))}</span></div></div>`
        : '';
    const addedRow = emp.createdAt ? `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div class="info-text"><span class="info-label">Added to HRmode</span><span class="info-value">${escapeHtml(relativeTime(emp.createdAt))}</span></div></div>` : '';
    const addressRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg></div><div class="info-text"><span class="info-label">Address</span>${valueOrNotProvided(emp.address)}</div></div>`;
    const manager = emp.managerId ? employees.find(e => e.id === emp.managerId) : null;
    const managerRow = `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="info-text"><span class="info-label">Reports to</span>${manager ? `<a class="info-value" href="#" data-open-manager="${manager.id}">${escapeHtml(manager.name)}</a>` : `<span class="info-value not-provided">${NOT_PROVIDED_TEXT}</span>`}</div></div>`;
    const reports = employees.filter(e => e.managerId === emp.id).sort((a,b)=>(a.name||'').localeCompare(b.name||''));
    const reportsRow = reports.length > 0
        ? `<div class="detail-info-row"><div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="info-text"><span class="info-label">Direct reports (${reports.length})</span><span class="info-value">${reports.map(r => `<a href="#" data-open-manager="${r.id}" style="margin-right:8px;">${escapeHtml(r.name)}</a>`).join('')}</span></div></div>`
        : '';
    const statusButtons = STATUSES.map(s => `<button class="detail-status-btn ${empStatus === s.key ? 'current' : ''}" data-status="${s.key}" data-id="${emp.id}" type="button"><span class="mini-dot"></span><span>${escapeHtml(s.label)}</span></button>`).join('');
    const deleteDisabled = protectMode || DEMO_MODE;
    const deleteLabel = DEMO_MODE ? '🔒 Demo locked' : (protectMode ? '🔒 Delete Locked' : 'Delete');
    const onboardingSection = (emp.onboarding && emp.onboarding.items.length > 0)
        ? (() => {
            const p = onboardingProgress(emp);
            return `
                <div class="detail-section-title" style="margin-top: 28px;">Onboarding</div>
                <div class="detail-onboarding-progress ${p.complete ? 'done' : ''}">${p.done} of ${p.total} complete</div>
                <div class="detail-onboarding-list">
                    ${emp.onboarding.items.map(i => `<div class="detail-onboarding-row ${i.done ? 'done' : ''}"><span class="dot"></span><span>${escapeHtml(i.label)}</span></div>`).join('')}
                </div>
            `;
        })()
        : '';
    detailBody.innerHTML = `
        <div class="detail-hero">
            <div class="detail-avatar" style="${avatarStyle}">${avatarContent}</div>
            <div class="detail-name-row"><span class="detail-name">${escapeHtml(emp.name)}</span>${nicknameChip}</div>
            <div class="detail-role">${escapeHtml(emp.title)}</div>
            ${emp.department ? `<span class="detail-dept">${escapeHtml(emp.department)}</span>` : ''}
        </div>
        ${liveTimerHtml}${timeStatsHtml}
        ${statusStatsHtml}
        <div class="detail-section-title">Recent Sessions</div>
        <div class="session-list">${sessionsHtml}</div>
        <div class="detail-section-title">About</div>
        ${aboutHtml}
        <div class="detail-section-title">Emergency Contact</div>
        ${renderEmergencyCard(emp)}
        ${jobHistorySectionHtml}
        ${kudosSectionHtml}
        ${notesSectionHtml}
        ${documentsSectionHtml}
        ${onboardingSection}
        ${timeOffSectionHtml}
        <div class="detail-section-title" style="margin-top: 28px;">Status</div>
        <div class="detail-status-row">${statusButtons}</div>
        <div class="detail-section-title" style="margin-top: 28px;">Reporting</div>
        <div class="detail-info-list">${managerRow}${reportsRow}</div>
        <div class="detail-section-title">Personal</div>
        <div class="detail-info-list">${birthdayRow}${locationRow}${pronounsRow}${maritalRow}${genderRow}${hobbyRow}</div>
        <div class="detail-section-title">Contact & Info</div>
        <div class="detail-info-list">${emailRow}${phoneRow}${startRow}${probationRow}${addedRow}</div>
        <div class="detail-section-title">Address</div>
        <div class="detail-info-list">${addressRow}</div>
        <div class="detail-actions">
            <button class="btn btn-primary" id="detailEditBtn">Edit</button>
            <button class="detail-delete-btn" id="detailDeleteBtn" ${deleteDisabled ? 'disabled' : ''}>${deleteLabel}</button>
        </div>
    `;
    detailBody.querySelector('#detailEditBtn').addEventListener('click', () => {
        if (demoBlocked('Editing employees')) return;
        closeDetailPanel();
        openEditModal(emp.id);
    });
    detailBody.querySelector('#detailDeleteBtn').addEventListener('click', () => {
        if (demoBlocked('Deleting employees')) return;
        if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
        closeDetailPanel(); deleteEmployee(emp.id);
    });
    detailBody.querySelectorAll('.detail-status-btn').forEach(btn => {
        btn.addEventListener('click', () => setEmployeeStatus(btn.dataset.id, btn.dataset.status));
    });
    detailBody.querySelectorAll('[data-open-manager]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            openDetailPanel(a.dataset.openManager);
        });
    });
    const detailTimeOffBtn = detailBody.querySelector('#detailTimeOffRequestBtn');
    if (detailTimeOffBtn) {
        detailTimeOffBtn.addEventListener('click', () => {
            openTimeOffRequestModal(emp.id);
        });
    }
    const detailNotesAddBtn = detailBody.querySelector('#detailNotesAddBtn');
    if (detailNotesAddBtn) {
        detailNotesAddBtn.addEventListener('click', () => {
            openNotesModal(emp.id);
            setTimeout(() => openNoteEditModal(), 60);
        });
    }
    const detailNotesViewAllBtn = detailBody.querySelector('#detailNotesViewAllBtn');
    if (detailNotesViewAllBtn) {
        detailNotesViewAllBtn.addEventListener('click', () => openNotesModal(emp.id));
    }
    const detailKudosViewAllBtn = detailBody.querySelector('#detailKudosViewAllBtn');
    if (detailKudosViewAllBtn) {
        detailKudosViewAllBtn.addEventListener('click', () => {
            closeDetailPanel();
            openKudosModal();
        });
    }
    const detailJobHistoryAddBtn = detailBody.querySelector('#detailJobHistoryAddBtn');
    if (detailJobHistoryAddBtn) {
        detailJobHistoryAddBtn.addEventListener('click', () => openJobHistoryEditModal());
    }
    const detailDocsAddBtn = detailBody.querySelector('#detailDocsAddBtn');
    if (detailDocsAddBtn) {
        detailDocsAddBtn.addEventListener('click', () => {
            openDocumentsModal(emp.id);
            setTimeout(() => openDocumentUploadModal(), 60);
        });
    }
    const detailDocsViewAllBtn = detailBody.querySelector('#detailDocsViewAllBtn');
    if (detailDocsViewAllBtn) {
        detailDocsViewAllBtn.addEventListener('click', () => openDocumentsModal(emp.id));
    }
    wireJobHistoryActions(detailBody);
    wireDocumentActions(detailBody);
}
function openDetailPanel(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;
    currentDetailId = id;
    renderDetailPanel(emp);
    detailOverlay.classList.add('active');
    detailPanel.classList.add('active');
    maybeBirthdayConfetti(emp);
}
function closeDetailPanel() {
    detailOverlay.classList.remove('active');
    detailPanel.classList.remove('active');
    currentDetailId = null;
}
detailClose.addEventListener('click', closeDetailPanel);
detailOverlay.addEventListener('click', closeDetailPanel);

// ==================== MODAL ====================
function resetComboStates() {
    fieldTitleSelect.value = ''; fieldTitleNew.value = ''; fieldTitleNew.style.display = 'none';
    fieldDepartmentSelect.value = ''; fieldDepartmentNew.value = ''; fieldDepartmentNew.style.display = 'none';
    updateComboRemoveButtons();
}
function openAddModal() {
    modalTitle.textContent = 'Add Employee';
    saveBtn.textContent = 'Save Employee';
    employeeForm.reset();
    employeeId.value = '';
    editingPhotoDataUrl = null;
    resetPhotoPreview();
    clearFormError();
    clearFieldErrors();
    refreshTitleDropdown();
    refreshDepartmentDropdown();
    refreshManagerDropdown(null);
    resetComboStates();
    fieldTimeOffAllowance.value = DEFAULT_TIMEOFF_ALLOWANCE;
    modalOverlay.classList.add('active');
    setTimeout(() => fieldName.focus(), 100);
}
function openEditModal(id) {
    if (demoBlocked('Editing employees')) return;
    const emp = employees.find(e => e.id === id);
    if (!emp) return;
    modalTitle.textContent = 'Edit Employee';
    saveBtn.textContent = 'Save Changes';
    employeeId.value = emp.id;
    fieldName.value = emp.name || '';
    fieldNickname.value = emp.nickname || '';
    fieldStartDate.value = emp.startDate || '';
    fieldProbationEnd.value = emp.probationEnd || '';
    fieldAbout.value = emp.about || '';
    fieldBirthday.value = emp.birthday || '';
    fieldPronouns.value = emp.pronouns || '';
    fieldMarital.value = emp.marital || '';
    fieldGender.value = emp.gender || '';
    fieldLocation.value = emp.location || '';
    fieldAddress.value = emp.address || '';
    fieldHobby.value = emp.hobby || '';
    fieldEmail.value = emp.email || '';
    fieldPhone.value = emp.phone || '';
    fieldTimeOffAllowance.value = (emp.timeOff && typeof emp.timeOff.allowance === 'number') ? emp.timeOff.allowance : DEFAULT_TIMEOFF_ALLOWANCE;
    const em = normalizeEmergency(emp.emergency);
    fieldEmergencyName.value = em.name || '';
    fieldEmergencyRelation.value = em.relation || '';
    fieldEmergencyPhone.value = em.phone || '';
    fieldEmergencyEmail.value = em.email || '';
    refreshTitleDropdown();
    refreshDepartmentDropdown();
    refreshManagerDropdown(emp.id);
    resetComboStates();
    if (emp.title) {
        if (!titles.some(t => t.toLowerCase() === emp.title.toLowerCase())) {
            titles = addToList(titles, emp.title);
            saveArray(TITLES_KEY, titles);
            refreshTitleDropdown();
        }
        fieldTitleSelect.value = emp.title;
    }
    if (emp.department) {
        if (!departments.some(d => d.toLowerCase() === emp.department.toLowerCase())) {
            departments = addToList(departments, emp.department);
            saveArray(DEPTS_KEY, departments);
            refreshDepartmentDropdown();
        }
        fieldDepartmentSelect.value = emp.department;
    }
    fieldManagerSelect.value = emp.managerId || '';
    editingPhotoDataUrl = emp.photo || null;
    if (editingPhotoDataUrl) showPhotoPreview(editingPhotoDataUrl);
    else resetPhotoPreview();
    clearFormError();
    clearFieldErrors();
    updateComboRemoveButtons();
    modalOverlay.classList.add('active');
    setTimeout(() => fieldName.focus(), 100);
}
function closeModal() {
    modalOverlay.classList.remove('active');
    employeeForm.reset();
    employeeId.value = '';
    editingPhotoDataUrl = null;
    resetPhotoPreview();
    resetComboStates();
    clearFormError();
    clearFieldErrors();
}
function showPhotoPreview(dataUrl) {
    photoImg.src = dataUrl; photoImg.style.display = 'block';
    photoPlaceholder.style.display = 'none'; photoRemoveBtn.style.display = 'block';
    photoBtnText.textContent = 'Change photo';
}
function resetPhotoPreview() {
    photoImg.src = ''; photoImg.style.display = 'none';
    photoPlaceholder.style.display = 'block'; photoRemoveBtn.style.display = 'none';
    photoBtnText.textContent = 'Upload photo';
}
photoInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { toast('Please choose an image file.', 'error'); photoInput.value = ''; return; }
    if (file.size > MAX_PHOTO_MB * 1024 * 1024) { toast(`Photo is over ${MAX_PHOTO_MB}MB.`, 'error'); photoInput.value = ''; return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
        editingPhotoDataUrl = ev.target.result;
        showPhotoPreview(editingPhotoDataUrl);
    };
    reader.readAsDataURL(file);
    photoInput.value = '';
});
photoRemoveBtn.addEventListener('click', () => {
    editingPhotoDataUrl = null;
    resetPhotoPreview();
});
function clearFormError() { formError.style.display = 'none'; formError.textContent = ''; }
function showFormError(msg) { formError.textContent = msg; formError.style.display = 'block'; }
function clearFieldErrors() {
    [fieldName, fieldTitleSelect, fieldTitleNew, fieldDepartmentSelect, fieldDepartmentNew, fieldEmail].forEach(f => f.classList.remove('invalid'));
}
function validateForm() {
    clearFieldErrors();
    const errors = [];
    if (!fieldName.value.trim()) { fieldName.classList.add('invalid'); errors.push('Name is required'); }
    const titleSelected = fieldTitleSelect.value && fieldTitleSelect.value !== '__add_new__';
    const titleNew = fieldTitleNew.value.trim();
    if (!titleSelected && !titleNew) { fieldTitleSelect.classList.add('invalid'); errors.push('Job title is required'); }
    const deptSelected = fieldDepartmentSelect.value && fieldDepartmentSelect.value !== '__add_new__';
    const deptNew = fieldDepartmentNew.value.trim();
    if (!deptSelected && !deptNew) { fieldDepartmentSelect.classList.add('invalid'); errors.push('Department is required'); }
    const email = fieldEmail.value.trim();
    if (!email) { fieldEmail.classList.add('invalid'); errors.push('Email is required'); }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { fieldEmail.classList.add('invalid'); errors.push('Email looks invalid'); }
    if (errors.length) { showFormError(errors.join(' · ')); return false; }
    clearFormError();
    return true;
}
employeeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const id = employeeId.value;
    const email = fieldEmail.value.trim().toLowerCase();
    const duplicate = employees.find(emp => {
        if (id && emp.id === id) return false;
        return (emp.email || '').toLowerCase() === email;
    });
    if (duplicate) {
        showFormError(`That email is already used by ${duplicate.name}.`);
        fieldEmail.classList.add('invalid');
        return;
    }
    let finalTitle = '';
    if (fieldTitleSelect.value === '__add_new__') {
        finalTitle = fieldTitleNew.value.trim();
        titles = addToList(titles, finalTitle);
        saveArray(TITLES_KEY, titles);
    } else if (fieldTitleSelect.value) {
        finalTitle = fieldTitleSelect.value;
    }
    let finalDept = '';
    if (fieldDepartmentSelect.value === '__add_new__') {
        finalDept = fieldDepartmentNew.value.trim();
        departments = addToList(departments, finalDept);
        saveArray(DEPTS_KEY, departments);
    } else if (fieldDepartmentSelect.value) {
        finalDept = fieldDepartmentSelect.value;
    }
    const managerId = fieldManagerSelect.value || null;
    const allowanceRaw = parseFloat(fieldTimeOffAllowance.value);
    const allowance = isNaN(allowanceRaw) || allowanceRaw < 0 ? DEFAULT_TIMEOFF_ALLOWANCE : allowanceRaw;
    const emergency = normalizeEmergency({
        name: fieldEmergencyName ? fieldEmergencyName.value.trim() : '',
        relation: fieldEmergencyRelation ? fieldEmergencyRelation.value.trim() : '',
        phone: fieldEmergencyPhone ? fieldEmergencyPhone.value.trim() : '',
        email: fieldEmergencyEmail ? fieldEmergencyEmail.value.trim() : ''
    });
    const data = {
        name: fieldName.value.trim(),
        nickname: fieldNickname.value.trim(),
        title: finalTitle,
        department: finalDept,
        managerId: managerId,
        startDate: fieldStartDate.value || '',
        probationEnd: fieldProbationEnd.value || '',
        about: fieldAbout.value.trim(),
        birthday: fieldBirthday.value || '',
        pronouns: fieldPronouns.value.trim(),
        marital: fieldMarital.value || '',
        gender: fieldGender.value || '',
        location: fieldLocation.value.trim(),
        address: fieldAddress.value.trim(),
        hobby: fieldHobby.value.trim(),
        email: fieldEmail.value.trim(),
        phone: fieldPhone.value.trim(),
        photo: editingPhotoDataUrl || '',
        emergency: emergency
    };
    if (id) {
        const idx = employees.findIndex(x => x.id === id);
        if (idx > -1) {
            const existing = employees[idx];
            const nextTimeOff = existing.timeOff && typeof existing.timeOff === 'object'
                ? { ...existing.timeOff, allowance: allowance, requests: Array.isArray(existing.timeOff.requests) ? existing.timeOff.requests : [] }
                : { allowance: allowance, requests: [] };
            employees[idx] = { ...existing, ...data, timeOff: nextTimeOff };
            saveEmployees();
            logActivity('employee.edit', id, { label: data.name });
            toast('Employee updated', 'success');
        }
    } else {
        const newEmp = {
            id: uid(), createdAt: Date.now(), status: DEFAULT_STATUS,
            timeLog: [], activeSession: null, pay: null, ...data
        };
        newEmp.onboarding = { startedAt: Date.now(), targetDate: '', items: makeOnboardingItems() };
        newEmp.timeOff = { allowance: allowance, requests: [] };
        employees.push(newEmp);
        saveEmployees();
        logActivity('employee.add', newEmp.id, { label: newEmp.name });
        toast('Employee added', 'success');
    }
    closeModal();
    render();
    if (currentDetailId) {
        const emp = employees.find(e => e.id === currentDetailId);
        if (emp) renderDetailPanel(emp);
    }
});
function deleteEmployee(id) {
    if (demoBlocked('Deleting employees')) return;
    if (protectMode) { toast('Protect Mode is on — turn it off to delete', 'warning'); return; }
    const emp = employees.find(e => e.id === id);
    if (!emp) return;
    const reports = employees.filter(e => e.managerId === id);
    openConfirm({
        title: 'Move employee to Trash',
        message: reports.length > 0
            ? `You're about to move ${emp.name} to Trash. ${reports.length} employee${reports.length !== 1 ? 's' : ''} will be moved to no manager. You can restore within 30 days.`
            : `You're about to move ${emp.name} to Trash. You can restore within 30 days.`,
        phrase: 'DELETE',
        onConfirm: () => {
            const name = emp.name;
            const related = {
                jobHistory: jobHistory.filter(h => h.employeeId === id),
                goals: goals.filter(g => g.ownerId === id),
                documents: documents.filter(d => d.employeeId === id),
                timeOffRequests: (emp.timeOff && Array.isArray(emp.timeOff.requests)) ? emp.timeOff.requests.slice() : []
            };
            const snapshot = JSON.parse(JSON.stringify(emp));
            employees = employees
                .filter(e => e.id !== id)
                .map(e => e.managerId === id ? { ...e, managerId: null } : e);
            jobHistory = jobHistory.filter(h => h.employeeId !== id);
            goals = goals.filter(g => g.ownerId !== id);
            documents = documents.filter(d => d.employeeId !== id);
            saveEmployees();
            saveJobHistory();
            saveGoals();
            saveDocuments();
            trashEntity('employee', snapshot, name, emp.title || '', related);
            logActivity('employee.delete', id, { label: name });
            render();
            toast(`Moved ${name} to Trash`, 'info');
        }
    });
}
function clearAllFilters() {
    searchInput.value = '';
    searchTerm = ''; activeDept = ''; activeStatus = '';
    render();
}
clearFiltersBtn.addEventListener('click', clearAllFilters);
noResultsClearBtn.addEventListener('click', clearAllFilters);

// ==================== EVENT LISTENERS ====================
addBtn.addEventListener('click', openAddModal);
emptyAddBtn.addEventListener('click', openAddModal);
modalClose.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (cmdkOpen) { closeCmdk(); return; }
    if (statusPopoverEmpId) { closeStatusPopover(); return; }
    if (trashPurgeOverlay && trashPurgeOverlay.classList.contains('active')) { closeTrashPurge(); return; }
    if (trashEmptyOverlay && trashEmptyOverlay.classList.contains('active')) { closeTrashEmpty(); return; }
    if (trashModalOverlay && trashModalOverlay.classList.contains('active')) { closeTrashModal(); return; }
    if (activityClearOverlay && activityClearOverlay.classList.contains('active')) { activityClearOverlay.classList.remove('active'); return; }
    if (activityModalOverlay && activityModalOverlay.classList.contains('active')) { closeActivityModal(); return; }
    if (holidayEditOverlay && holidayEditOverlay.classList.contains('active')) { closeHolidayEditModal(); return; }
    if (holidayDeleteOverlay && holidayDeleteOverlay.classList.contains('active')) { closeHolidayDelete(); return; }
    if (holidayModalOverlay && holidayModalOverlay.classList.contains('active')) { closeHolidayModal(); return; }
    if (announceEditOverlay && announceEditOverlay.classList.contains('active')) { closeAnnounceEditModal(); return; }
    if (announceDeleteOverlay && announceDeleteOverlay.classList.contains('active')) { closeAnnounceDelete(); return; }
    if (announceModalOverlay && announceModalOverlay.classList.contains('active')) { closeAnnounceModal(); return; }
    if (kudosGiveOverlay && kudosGiveOverlay.classList.contains('active')) { closeKudosGiveModal(); return; }
    if (kudosDeleteOverlay && kudosDeleteOverlay.classList.contains('active')) { closeKudosDelete(); return; }
    if (kudosModalOverlay && kudosModalOverlay.classList.contains('active')) { closeKudosModal(); return; }
    if (noteEditOverlay && noteEditOverlay.classList.contains('active')) { closeNoteEditModal(); return; }
    if (noteDeleteOverlay && noteDeleteOverlay.classList.contains('active')) { closeNoteDelete(); return; }
    if (notesModalOverlay && notesModalOverlay.classList.contains('active')) { closeNotesModal(); return; }
    if (jobHistoryEditOverlay && jobHistoryEditOverlay.classList.contains('active')) { closeJobHistoryEditModal(); return; }
    if (jobHistoryDeleteOverlay && jobHistoryDeleteOverlay.classList.contains('active')) { closeJobHistoryDelete(); return; }
    if (goalEditOverlay && goalEditOverlay.classList.contains('active')) { closeGoalEditModal(); return; }
    if (goalDeleteOverlay && goalDeleteOverlay.classList.contains('active')) { closeGoalDelete(); return; }
    if (goalsModalOverlay && goalsModalOverlay.classList.contains('active')) { closeGoalsModal(); return; }
    if (documentUploadOverlay && documentUploadOverlay.classList.contains('active')) { closeDocumentUploadModal(); return; }
    if (documentDeleteOverlay && documentDeleteOverlay.classList.contains('active')) { closeDocumentDelete(); return; }
    if (documentsModalOverlay && documentsModalOverlay.classList.contains('active')) { closeDocumentsModal(); return; }
    if (onboardingTemplateDeleteOverlay && onboardingTemplateDeleteOverlay.classList.contains('active')) { closeDeleteOnboardingTemplate(); return; }
    if (onboardingTemplateEditOverlay && onboardingTemplateEditOverlay.classList.contains('active')) { closeOnboardingTemplateEditModal(); return; }
    if (timeOffRequestOverlay && timeOffRequestOverlay.classList.contains('active')) { closeTimeOffRequestModal(); return; }
    if (timeOffModalOverlay && timeOffModalOverlay.classList.contains('active')) { closeTimeOffModal(); return; }
    if (orgModalOverlay && orgModalOverlay.classList.contains('active')) { closeOrgModal(); return; }
    if (removeListOverlay.classList.contains('active')) { closeRemoveListModal(); return; }
    if (snapshotOverlay.classList.contains('active')) { closeSnapshot(); return; }
    if (closePeriodOverlay.classList.contains('active')) { closeClosePeriodModal(); return; }
    if (onboardingModalOverlay.classList.contains('active')) { closeOnboardingModal(); return; }
    if (celebrateModalOverlay.classList.contains('active')) { closeCelebrationsModal(); return; }
    if (timesheetModalOverlay.classList.contains('active')) { closeTimesheetModal(); return; }
    if (confirmOverlay.classList.contains('active')) { closeConfirm(); return; }
    if (modalOverlay.classList.contains('active')) closeModal();
    if (deptModalOverlay.classList.contains('active')) closeDeptModal();
    if (detailPanel.classList.contains('active')) closeDetailPanel();
});
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.trim();
    render();
});
window.addEventListener('resize', () => {
    if (confettiCanvas && confettiActive) {
        const dpr = window.devicePixelRatio || 1;
        confettiCanvas.width = window.innerWidth * dpr;
        confettiCanvas.height = window.innerHeight * dpr;
        confettiCanvas.style.width = window.innerWidth + 'px';
        confettiCanvas.style.height = window.innerHeight + 'px';
        if (confettiCtx) confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    updateStripArrows();
});

// ==================== PWA HANDLERS (#23) ====================
function handlePwaShortcutAction() {
    try {
        const params = new URLSearchParams(window.location.search);
        const action = params.get('action');
        if (!action) return;

        // Clean the URL so a refresh doesn't re-trigger the shortcut
        try {
            const cleanUrl = window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, cleanUrl);
        } catch (e) {}

        // Small delay so the UI has a chance to render first
        setTimeout(() => {
            if (action === 'add') {
                if (DEMO_MODE) return;
                openAddModal();
            } else if (action === 'trash') {
                openTrashModal();
            } else if (action === 'activity') {
                openActivityModal();
            }
        }, 200);
    } catch (e) {
        // URLSearchParams not available — silently skip
    }
}

window.addEventListener('appinstalled', () => {
    if (installAppBtn) installAppBtn.style.display = 'none';
    try { localStorage.setItem('hrmode-install-dismissed', '1'); } catch (e) {}
});

function updateOfflineBar() {
    if (!pwaOfflineBar) return;
    pwaOfflineBar.style.display = navigator.onLine ? 'none' : 'flex';
}
window.addEventListener('online', updateOfflineBar);
window.addEventListener('offline', updateOfflineBar);

// ==================== BOOT ====================
(function init() {
    if (DEMO_MODE && demoPill) {
        demoPill.style.display = 'inline-flex';
    }
    try {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) setTheme(savedTheme, false);
        const savedSort = localStorage.getItem(SORT_KEY);
        if (savedSort) { sortMode = savedSort; sortSelect.value = savedSort; }
        if (!DEMO_MODE) {
            const savedProtect = localStorage.getItem(PROTECT_KEY);
            if (savedProtect === '1') setProtectMode(true);
        }
    } catch (e) {}
    employees = loadEmployees();
    departments = loadArray(DEPTS_KEY, DEFAULT_DEPARTMENTS);
    titles = loadArray(TITLES_KEY, []);
    snapshots = loadSnapshots();
    holidays = loadHolidays();
    activityLog = loadActivity();
    announcements = loadAnnouncements();
    kudos = loadKudos();
    notes = loadNotes();
    jobHistory = loadJobHistory();
    goals = loadGoals();
    documents = loadDocuments();
    onboardingTemplates = loadOnboardingTemplates();
    trashEntries = loadTrash();
    const purged = purgeExpiredTrash();
    if (purged > 0) {
        logActivity('trash.purge', null, { count: purged, reason: 'expired' });
    }
    seedOnboardingTemplatesIfEmpty();
    seedDemoData();
    seedHolidaysIfEmpty();
    if (departments.length === 0) {
        departments = DEFAULT_DEPARTMENTS.slice();
        saveArray(DEPTS_KEY, departments);
    }
    if (titles.length === 0) {
        const uniqueTitles = [...new Set(employees.map(e => e.title).filter(Boolean))];
        if (uniqueTitles.length) {
            titles = uniqueTitles.sort((a, b) => a.localeCompare(b));
            saveArray(TITLES_KEY, titles);
        }
    }
    injectComboEditButtons();
    updateComboRemoveButtons();
    updateOfflineBar();
    render();
    startTick();
    handlePwaShortcutAction();
    requestAnimationFrame(() => {
        requestAnimationFrame(() => updateStripArrows());
    });
    setTimeout(updateStripArrows, 400);
})();