<script lang="tsx" setup>
import { useCssModule } from 'vue';

const classes = useCssModule();

const props = defineProps<{
    role: string,
    link: string,
    date: string,
    employmentType: string,
    company: string,
    description: string,
    skills: string,
}>();

function render() {
    const { role, link, company, employmentType, date, description, skills } = props;
    
    return (
        <>
            <div class={classes.header}>
                <h3 class={classes.header__role}>{ role }</h3>
                <h4 class={classes.headline}>
                    <a href={link} target="_blank" class={classes.headline__company}>{ company }</a>
                    <span class={classes.headline__employmentType}>{ employmentType }</span>
                </h4>
                <h4 class={classes.header__date}>{ date }</h4>
            </div>
            { description ? <p class={classes.description}>{ description }</p> : "" }
            <p class={classes.skills}>{ skills }</p>
        </>
    );
}
</script>

<template><render/></template>

<style module lang="stylus">
.header {
    &:not(:first-child) {
        margin-top: 10pt;
    }

    &__role {
        font-size: 10pt;
        color: color-azure-4;
        text-decoration: none;
    }

    &__date {
        font-weight: 400;
        font-size: 9pt;
        color: color-gray-4;
    }
}

.headline {
    color: color-gray-4;
    font-size: 11pt;

    &__company {
        color: color-gray-3;
        font-weight: 400;
        font-size: 9pt;
        text-decoration: underline;
    }

    &__employmentType {
        font-weight: 400;
        font-size: 9pt;
        color: color-gray-3;
        margin-left: 3ch;
        position: relative;

        &::before {
            content: "-";
            top: 0;
            left: -2ch;
            width: 100%;
            height: 100%;
            position: absolute;
        }
    }
}

.description {
    color: color-gray-4;
    font-weight: 400;
    font-size: 9pt;

    margin-top: 6pt;
    margin-bottom: 10pt;
}

.skills {
    color: color-gray-4;
    font-size: 9pt;
}
</style>