var mongoose = require("mongoose");
var Post = require("./models/post");
 
var data = [
    {
        title: "26-yr-old engineer brings 10 ponds back to life - Times of India", 
        url: "https://timesofindia.indiatimes.com/india/26-yr-old-engineer-brings-10-ponds-back-to-life/articleshow/68759278.cms?utm_medium=referral&utm_campaign=iOSapp",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 1
    },
    {
        title: "New Jersey high school opens doors every Friday night to keep students off streets", 
        url: "https://abc7ny.com/society/nj-high-school-opens-doors-every-friday-to-keep-kids-off-streets/5236330/?fbclid=IwAR3DGKtjX1g8680AR2ujEKJaD5LJK8j4s_f9vqKj7ROyuP0WMpBi5l0sZqk",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 5
    },
    {
        title: "Supermarkets in Thailand and Vietnam Start Using Banana Leaves Instead of Plastic", 
        url: "https://www.vice.com/en_asia/article/43zj8b/thailand-vietnam-supermarkets-reducing-plastic-by-using-banana-leaves-packaging",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 3
    },
    {
        title: "India saying it will ban all single use plastics by 2022", 
        url: "https://www.globalcitizen.org/en/content/india-plastic-ban-single-use-2022-modi-pollution-w/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 10
    },
    {
        title: "An Post, the Irish postal service, is introducing a completely free service called Address Point; fixed addresses for homeless people so they can avail of postal services, such as job applications and medical post. It is the first of its kind in Europe.", 
        url: "https://www.rte.ie/news/ireland/2019/0405/1040797-address-point-homeless/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 8
    },
    {
        title: "Sikhs aim to plant million trees as 'gift to the planet' - Global project will mark 550 years since birth of religion’s founder, Guru Nanak", 
        url: "https://www.theguardian.com/world/2019/apr/05/sikhs-sikhism-guru-nanak-550-anniversary-tree-planting",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 5
    },
    {
        title: "26-yr-old engineer brings 10 ponds back to life - Times of India", 
        url: "https://timesofindia.indiatimes.com/india/26-yr-old-engineer-brings-10-ponds-back-to-life/articleshow/68759278.cms?utm_medium=referral&utm_campaign=iOSapp",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 3
    },
    {
        title: "New Jersey high school opens doors every Friday night to keep students off streets", 
        url: "https://abc7ny.com/society/nj-high-school-opens-doors-every-friday-to-keep-kids-off-streets/5236330/?fbclid=IwAR3DGKtjX1g8680AR2ujEKJaD5LJK8j4s_f9vqKj7ROyuP0WMpBi5l0sZqk",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 1
    },
    {
        title: "Supermarkets in Thailand and Vietnam Start Using Banana Leaves Instead of Plastic", 
        url: "https://www.vice.com/en_asia/article/43zj8b/thailand-vietnam-supermarkets-reducing-plastic-by-using-banana-leaves-packaging",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 2
    },
    {
        title: "India saying it will ban all single use plastics by 2022", 
        url: "https://www.globalcitizen.org/en/content/india-plastic-ban-single-use-2022-modi-pollution-w/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 4
    },
    {
        title: "An Post, the Irish postal service, is introducing a completely free service called Address Point; fixed addresses for homeless people so they can avail of postal services, such as job applications and medical post. It is the first of its kind in Europe.", 
        url: "https://www.rte.ie/news/ireland/2019/0405/1040797-address-point-homeless/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 7
    },
    {
        title: "Sikhs aim to plant million trees as 'gift to the planet' - Global project will mark 550 years since birth of religion’s founder, Guru Nanak", 
        url: "https://www.theguardian.com/world/2019/apr/05/sikhs-sikhism-guru-nanak-550-anniversary-tree-planting",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        votes: 6
    }
];
 
function seedDB(){
   // remove posts
   Post.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
        console.log("removed posts!");
            data.forEach(seed => {
                Post.create(seed, function(err, post){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a post");
                        post.save();
                    }
                });
            });
        }
    });
}
 
module.exports = seedDB;