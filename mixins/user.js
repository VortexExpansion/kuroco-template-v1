export default {
  computed: {
    userGroupIds() {
      return this.$auth?.user?.group_ids
    },
    premiumUser() {
      return this.userGroupIds?.["105"];
    },
    normalUser() {
      return this.userGroupIds?.["104"]
    },
    userTypeText() {
      return this.premiumUser ? 'プレミアム会員' : '通常会員';
    }
  },
}
