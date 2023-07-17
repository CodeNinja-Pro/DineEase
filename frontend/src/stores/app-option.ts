import { defineStore } from "pinia";

export const useAppOptionStore = defineStore({
  id: "appOption",
  state: () => {
    return {
    	appMode: '',
    	appThemeClass: '',
    	appCoverClass: '',
			appBoxedLayout: false,
			appHeaderHide: false,
			appHeaderSearchToggled: false,
			appSidebarCollapsed: false,
			appSidebarMobileToggled: false,
			appSidebarMobileClosed: false,
			appSidebarHide: false,
			appContentFullHeight: false,
			appContentClass: '',
			appFooter: false,
			appFooterFixed: false,
			appThemePanelToggled: false
		}
  }
});
