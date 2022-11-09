<template>
    <div class="list">
        <div class="listheader">
            <p class="listtitle">
                {{ title }}
            </p>
            <div class="deletelist" @click="removelist">X</div>
        </div>
    </div>
</template>

<script>
export default {
    //親コンポーネント(ListAdd?)から受け取るデータを定義
    props: {
        title: {
            type: String,
            required: true,
        },
        listindex: {
            type: Number,
            required: true,
        },
    },
    methods: {
        removelist: function () {
            if (confirm("本当にこのリストを削除しますか？")) {
                this.$store.dispatch("removelist", {
                    listindex: this.listindex,
                });
            }
        },
    },
};
</script>
