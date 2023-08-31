<template>
    <div class="flex mt-32 h-auto">
        <v-card
            class="m-auto w-2/3 border"
            flat
            height="100px"
        >
            <v-toolbar dense class="toolbar" floating>
            <v-text-field
                color="red"
                placeholder="Search any blog by title, description or author"
                class="p-4"
                hide-details
                prepend-icon="mdi-magnify"
                single-line
            ></v-text-field>
            </v-toolbar>
        </v-card>
    </div>
</template>

<script setup>

</script>

<style lang="css">
.toolbar{
    background-color: #f8c844;
}
.v-field__input{
    font-size: larger;
}
.v-toolbar{
    border-radius: 0.3rem;
}
</style>