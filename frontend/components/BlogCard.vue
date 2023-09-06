<template>
    <NuxtLink tag="div" :to="`/posts/${post.id}`" class="shadow-2xl blockcard">
        <div class="image h-2/5 w-full">
            <img :src="post.image_url">
        </div>
        <div class="details">
            <div class="tag my-1 mx-2">{{ post.tag }}</div>
            <div class="title"><span class="mb-3">{{ post.title }}</span></div>
            <div class="excerpt">{{ post.description }}</div>
            <div class="other-details flex flex-row">
                <div class="author-profile-url w-16"><img :src="post.author_profile_url"></div>
                <div class="flex flex-col p-1 px-4 w-full">
                    <div class="my-auto">{{ post.author_name }}</div>
                    <div class="text-sm">{{ date }}</div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

    const {post} =defineProps(["post"])
    const emit = defineEmits();
    const postId=ref('')

    //Bu kısım computed olarak yeniden yazılacak
    dayjs.extend(utc)
    dayjs.extend(timezone)

    const timeZone = dayjs.tz.guess()
    const date = dayjs(post.createdAt).tz(timeZone).format('MMM DD,YYYY')
</script>

<style lang="css">
.blockcard{
    display: flex;
    flex-direction: column;
    height: 25rem;
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
}
.blockcard:hover{
    transform: scale(1.1);
}
.image{
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    overflow: hidden;
}
.image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
    display: block;
}
.details{
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}
.tag{
    font-size: small;
    color: #8fc74a;
    margin-left: 0.3rem;
    width: auto;
}
.title{
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    height: auto;
}
.excerpt{
    height: 6.5rem;
    overflow: hidden;
    margin-bottom: 0rem;
    display: -webkit-box;
    font-size: smaller;
    -webkit-line-clamp: 5;
    color: rgb(82, 80, 80);
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.other-details{
    padding-top: 0.5rem;
    display: flex;
    flex-direction: row;
    height: 30%;
}
.author-profile-url img{
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
}
/* .share-button{
    width: 2rem;
    margin-left: 0.3rem;
} */
/* .share-icon{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
}
.share-icon:hover{
    transform: scale(1.2);
    cursor: pointer;
}
.share-icon::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-60%);
  background-color: #333;
  color: #fff;
  padding: 0.2rem;
  border-radius: 0.2rem;
  font-size: small;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}
.share-icon:hover::after {
  opacity: 1;
  visibility: visible;
} */
@media (max-width: 420px){
    .blockcard{
        margin-bottom: -3.1rem;
        width: 110%;
        margin-left: -0.4rem;
    }
    .blockcard:hover{
        transform: scale(1.05);
    }
    .title{
        font-size: 0.9rem;
    }
}
@media (min-width:420px)and(max-width:820px)
{
    .blockcard{
        margin-bottom: -3.1rem;
        width: 110%;
        margin-left: -0.4rem;
    }
}
</style>