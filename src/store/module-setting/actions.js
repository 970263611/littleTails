export const clickTabSide = ({ commit, isSideBarShow })=> {
  commit('click_tabs_side', isSideBarShow )
}
export const clickTabRightMode=({ commit, isSourceMode }) =>{
  commit('click_tab_right_mode', isSourceMode )
}
export const clickToggleLeftDrawer=({ commit, toggleLeftDrawer })=> {
  commit('click_toggle_left_drawer', toggleLeftDrawer )
}
export const clickToggleSearch=({ commit, isShowSearch })=> {
  commit('click_toogle_search', isShowSearch )
}
