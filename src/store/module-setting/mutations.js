export const click_tabs_side =(state, payload)=>{
  state.isSideBarShow = payload
}
export const click_tab_right_mode = (state, payload)=>{
  state.isSourceMode = payload
}
export const click_toggle_left_drawer=(state, payload)=>{
  state.toggleLeftDrawer = payload
}
export const click_enable_preview_editor =(state, payload) =>{
  state.enablePreviewEditor = payload
}
export const click_toogle_search =(state, payload) =>{
  state.isShowSearch = payload
}
export const taba_list_show =(state, payload) =>{
  state.tabaListShow = payload
}
export const click_annex_show =(state, payload) =>{
  state.isAnnexShow = payload
}