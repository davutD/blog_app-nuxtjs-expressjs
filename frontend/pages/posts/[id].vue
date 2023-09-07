<template>
    <div class="flex flex-col">
        <Header class="fixed"/>
        <div class="flex flex-row h-auto w-full my-24">
            <div class="left-column xl:block hidden h-auto w-2/12"></div>
            <div class="middle-column flex flex-col h-auto xl:w-7/12">
                <div class="content-head">
                    <h1 class="text-center my-10 text-5xl">{{ post.title }}</h1>
                    <div class="photo-cover w-11/12 h-4/5 m-auto"><img :src="post.image_url" alt=""></div>
                </div>
                <div class="content-body" v-html="post.content"></div>
            </div>
            <div class="right-column border hidden my-10 ml-10 h-auto">
                <!-- <h1 ref="onThisPage" class="on-this-page sticky top-20 text-xl text-gray-700">On this page</h1>
                <div ref="tocHeaders" class="toc-container sticky top-28 hidden lg:block lg:-mt-2">

                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import PostService from "../../services/PostService"
// import tocbot from 'tocbot'

const route=useRoute()
const id=route.params.id
const post=ref([])
const toc=ref()


const findPost= async (id)=>{
        try{
            post.value = (await PostService.getPost(id)).data
         }catch(err){
            console.error(err)
            post.value={}
        }}
    await findPost(id)

// onMounted(()=>{
//     toc.value= tocbot.init({
//             headingsOffset: 70,
//             scrollSmoothOffset: -70,
//   			// Where to render the table of contents.
//   			tocSelector: '.toc-container',
//   			// Where to grab the headings to build the table of contents.
//   			contentSelector: '.content-body',
//   			// Which headings to grab inside of the contentSelector element.
//   			headingSelector: 'h1, h2, h3',
//   			// For headings inside relative or absolute positioned containers within content.
//   			hasInnerContainers: true,
// 			})
        
//         console.log(toc)
// })

</script>

<style lang="css">
.photo-cover img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
    display: block;
}
.content-head{
    height: 30rem;
}
.content-body{
    padding: 2rem 2rem;
    font-family: serif;
    font-size:1.1rem;
}
.content-body blockquote{
    margin: 0.5rem 0rem;
    padding: 0rem 0.5rem;
    border-left: 0.2rem solid #c5c5c5;
}
.content-body img{
    margin: 0rem auto;
    width: 90%;
}
.content-body pre{
    border: 1px solid red;
    padding: 0.5rem;
    border-radius: 0.3rem;
    background-color: #23241f;
    color: #f8f8f2;
}
.content-body h1{
    font-size: 2.5rem;
    font-weight: normal;
    margin:1rem 0rem;
    margin-bottom: 0.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}   
.content-body h2{
    font-size: 2rem;
    font-weight: normal;
    margin:1rem 0rem;
    margin-bottom: 0.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.content-body h3{
    font-size: 1.75rem;
    font-weight: normal;
    margin:1rem 0rem;
    margin-bottom: 0.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.content-body h4{
    font-size: 1.5rem;
    font-weight: normal;
    margin:1rem 0rem;
    margin-bottom: 0.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.content-body h5{
    font-size: 1.25rem;
    font-weight: normal;
    margin:1rem 0rem;
    margin-bottom: 0.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.content-body h6{
    font-size: 1rem;
    font-weight: normal;
    margin:1rem 0rem;
    margin-bottom: 0.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.content-body p{
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5rem;
    margin:0.5rem 0rem;
    font-size: 1.1rem;
    line-height: 1.7rem;
}
.content-body ul{
    list-style: disc;
    padding-left: 5rem;
}
.content-body a{
    text-decoration:underline;
    text-decoration-color: gray;
}
</style>