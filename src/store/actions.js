export default {
    // 保存昵称
    saveUserName(context, username) {
        context.commit("saveUserName", username);
    },
    saveCartCount(context, cartCount) {
        context.commit("saveCartCount", cartCount);
    },
    // 保存头像
    saveAvatar(context, myAvatar) {
        context.commit("saveAvatar", myAvatar);
    }
};
