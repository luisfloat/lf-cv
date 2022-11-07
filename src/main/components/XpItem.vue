<script lang="tsx" setup>
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
            <div class="xp-header">
                <h3 class="xp-header__role">{ role }</h3>
                <h4 class="xp-headline">
                    <a href={link} target="_blank" class="xp-headline__company">{ company }</a>
                    <span class="xp-headline__employment-type">{ employmentType }</span>
                </h4>
                <h4 class="xp-header__date">{ date }</h4>
            </div>
            { description ? <p class="xp-description">{ description }</p> : "" }
            <p class="xp-skills">{ skills }</p>
        </>
    );
}
</script>

<template><render/></template>