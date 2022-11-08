<template>
    <form :class="classList" @submit.prevent="addList">
        <input
            v-model="title"
            type="text"
            class="text-input"
            placeholder="Add new list"
            @focusin="startEditing"
            @focusout="finishEditing"
        />
        <button
            type="submit"
            class="add-button"
            v-if="isEditing || titleExsists"
        >
            Add
        </button>
    </form>
</template>

<script>
export default {
    data: function () {
        return {
            title: "",
            isEditing: false,
        };
    },
    computed: {
        classList() {
            console.log(this.isEditing);
            const classList = ["addlist"];
            if (this.isEditing) {
                classList.push("active");
                Date.now();
                console.log(this.isEditing);
            }
            if (this.titleExsists) {
                classList.push("addable");
            }
            return classList;
        },
        titleExsists() {
            return this.title.length > 0;
        },
    },
    methods: {
        addList: function () {
            this.$store.dispatch("addlist", { title: this.title });
            this.title = "";
        },
        startEditing: function () {
            this.isEditing = true;
        },
        finishEditing: function () {
            this.isEditing = false;
        },
    },
};
</script>
