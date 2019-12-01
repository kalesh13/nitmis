<template lang="pug">
    extends ../layouts/master.pug
    block contents
        div(class="contents central")
            div(class="card col-md-5 px-0 d-block")
                div(class="main-title" v-text="title")
                register-form(:url="url")
            div(class="card col-md-6 mx-auto px-0")
                div(class="card-item")
                    div(class="title h1 mb-2 px-4") Code of conduct
                    div(class="card-content limit-400 px-4" style="max-height:725px" v-html="conduct")
</template>

<script>
import RegisterForm from "./register_form";

export default {
  name: "admin_register",
  props: {
    title: {
      type: String,
      default: "User Registration"
    },
    url: {
      type: String,
      default: "/register/"
    }
  },
  data: function() {
    return {
      conduct:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere sollicitudin. Gravida neque convallis a cras semper auctor neque. Odio aenean sed adipiscing diam donec. Et malesuada fames ac turpis. Commodo ullamcorper a lacus vestibulum sed. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Elit at imperdiet dui accumsan sit amet nulla facilisi. Blandit libero volutpat sed cras ornare arcu dui. Lacus luctus accumsan tortor posuere ac ut consequat. Tortor consequat id porta nibh venenatis. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Ultrices gravida dictum fusce ut placerat. Proin nibh nisl condimentum id venenatis a condimentum vitae. Habitant morbi tristique senectus et netus. Pretium viverra suspendisse potenti nullam. Orci dapibus ultrices in iaculis nunc. Orci a scelerisque purus semper eget duis. Semper feugiat nibh sed pulvinar proin gravida. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget.</p><p>Orci nulla pellentesque dignissim enim sit amet. Porta lorem mollis aliquam ut porttitor. Lectus proin nibh nisl condimentum id venenatis a condimentum. Fermentum et sollicitudin ac orci phasellus egestas tellus. Felis imperdiet proin fermentum leo. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Vel pretium lectus quam id leo in vitae. Neque ornare aenean euismod elementum nisi. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Ante metus dictum at tempor commodo ullamcorper a. Tristique senectus et netus et malesuada fames ac turpis egestas. Semper eget duis at tellus. Sed viverra ipsum nunc aliquet bibendum enim. Eu volutpat odio facilisis mauris sit amet massa vitae. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Proin nibh nisl condimentum id venenatis. Placerat orci nulla pellentesque dignissim enim sit amet. Sagittis id consectetur purus ut faucibus pulvinar. Sit amet volutpat consequat mauris nunc.</p><p>Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Lorem mollis aliquam ut porttitor leo. Maecenas volutpat blandit aliquam etiam erat velit. In metus vulputate eu scelerisque felis imperdiet. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Volutpat commodo sed egestas egestas fringilla phasellus. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Nisl suscipit adipiscing bibendum est. Pretium nibh ipsum consequat nisl vel. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Id cursus metus aliquam eleifend mi in. Felis donec et odio pellentesque diam volutpat. In iaculis nunc sed augue lacus viverra vitae congue. Gravida neque convallis a cras semper auctor neque vitae tempus. Massa tempor nec feugiat nisl pretium. Est placerat in egestas erat imperdiet sed euismod. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Dolor sit amet consectetur adipiscing elit.</p><p>Lacus luctus accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. A pellentesque sit amet porttitor. Dui sapien eget mi proin sed libero enim. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nec ultrices dui sapien eget mi proin. Id aliquet risus feugiat in ante metus dictum at tempor. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Ac ut consequat semper viverra nam libero. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Consectetur a erat nam at lectus urna duis. Dictum at tempor commodo ullamcorper a. Tempus urna et pharetra pharetra massa massa ultricies. Risus nullam eget felis eget nunc. Nisi vitae suscipit tellus mauris a diam. Id consectetur purus ut faucibus pulvinar elementum. Risus nullam eget felis eget nunc lobortis mattis aliquam. Ultricies mi eget mauris pharetra et ultrices neque. Senectus et netus et malesuada fames ac turpis. Massa enim nec dui nunc mattis enim ut.</p><p>Lectus nulla at volutpat diam ut venenatis tellus in. Habitant morbi tristique senectus et netus et. Consequat id porta nibh venenatis cras sed felis. Etiam erat velit scelerisque in dictum non consectetur. Enim facilisis gravida neque convallis a cras. Vel orci porta non pulvinar. Bibendum est ultricies integer quis auctor. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ipsum a arcu cursus vitae. Lacus laoreet non curabitur gravida arcu. Sed id semper risus in hendrerit gravida rutrum quisque non.</p>"
    };
  },
  components: { RegisterForm }
};
</script>