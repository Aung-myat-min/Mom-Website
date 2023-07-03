var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let users = [
  "ကျောက်တံတား ",
  "ပန်းပဲတန်း ",
  "ထောက်ကြန့် ",
  "နေပြည်တော် ",
  "မော်လမြိုင် ",
  "စစ်ကိုင်း ",
  "တောင်ကြီး ",
  "လှည်းကူး၊ မှော်ဘီ ",
  "ပျဉ်းမနား၊ လယ်ဝေး ",
  "မုတ္တမ ",
  "မုံရွာ ",
  "လသာ ",
  "တိုက်ကြီး ",
  "တပ်ကုန်း ",
  "ချောင်းဆုံ ",
  "ရွှေဘို ",
  "လမ်းမတော် ",
  "ဗိုလ်တထောင် ",
  "ကျောက်တန်း ",
  "ခရမ်း၊ သုံးခွ ",
  "ပြန်ကပြေး ",
  "မုဒုံ ",
  "ရေဦး၊ကန့်ဘလူ ",
  "လားရှိုး ",
  "အေးသာယာ ",
  "အောင်ပန်း ",
  "စစ်တွေ၊ သံတွဲ ",
  "ကျောက်ဖြူ ",
  "ပုဏ္ဏားကျွန်း ",
  "မင်းပြား၊ မြောက်ဦး ",
  "ပုဇွန်တောင် ",
  "တွံတေး၊ ဒလ ",
  "မင်္ဂလာတောင်ညွန့် ",
  "ဥက္ကံ ",
  "ကျိုက်ထို ",
  "ဘီးလင်း ",
  "ယင်းမာပင် ",
  "ပင်းတယ ",
  "တောင်ကုတ် ",
  "သီပေါ၊ နောင်ချို ",
  "ငပလီ၊ဂွ ",
  "သံဖြူဇရပ် ",
  "ရွှေညောင်၊ ညောင်ရွှေ ",
  "ကျောက်တော် ",
  "ကသာ၊ တမူး ",
  "ပဲခူး ",
  "အလုံ ",
  "ဗဟန်း ",
  "ဒဂုံ ",
  "ဒဂုံမြို့သစ်(ဆိပ်ကမ်း) ",
  "မန္တလေး  ",
  "အောင်မြေသာဇံ ",
  "တောင်ငူ  ",
  "ကြို့ပင်ကောက် ",
  "ရေး ",
  "ဇင်းကျိုက် ",
  "ပေါင်၊ သထုံ ",
  "သုဝဏ္ဏဝတီ ",
  "ကျိုက္ခမီ ",
  "လမိုင်း ",
  "ထီးချိုင့် ",
  "ကျောက်မဲ ",
  "ဘူးသီးတောင် ",
  "ဟဲဟိုး ",
  "ရပ်စောက် ",
  "မောင်းတော ",
  "ကလော ",
  "ဗထူး ",
  "ရမ်းဗြဲ ",
  "ပေါက်တော ",
  "နတ်တလင်း ",
  "ချမ်းအေးသာဇံ ",
  "ပြည်၊ ဖြူး ",
  "ဒဂုံမြို့သစ် (အရှေ့ပိုင်း) ",
  "မဟာအောင်မြေ ",
  "ရွှေတောင် ",
  "ပေါင်းတည် ",
  "ဘားအံ ",
  "လှိုင်သာယာ ",
  "အင်းစိန် ",
  "ချမ်းမြသာစည် ",
  "ဇီးကုန်း ",
  "ဒိုက်ဦး ",
  "မြိုင်ကလေး ",
  "ညောင်လေးပင် ",
  "မြဝတီ ",
  "မိုးမိတ် ",
  "လွိုင်လင် ",
  "ပင်လုံ ",
  "မူဆယ် ",
  "နမ့်စန်(တောင်) ",
  "ကမာရွတ် ",
  "ပြည်ကြီးတံခွန် ",
  "အင်းမ ",
  "အင်းတကော် ",
  "မင်္ဂလာဒုံ ",
  "အမရပူရ၊ မိတ္ထီလာ ",
  "ပုတီးကုန်း ",
  "အုတ်ဖို ",
  "ပုသိမ် ",
  "ဟင်္သာတ ",
  "မြစ်ကြီးနား ",
  "မိုးကောင်း ",
  "ဒဂုံမြို့သစ်(မြောက်ပိုင်း) ",
  "ကျောက်ပန်းတောင်း ",
  "သဲကုန်း ",
  "သနပ်ပင် ",
  "ပန်းတနော် ",
  "တာချီလိတ် ",
  "မြောက်ဥက္ကလာပ ",
  "ရွှေပြည်သာ ",
  "တံတားဦး ",
  "အုန်းချော ",
  "ရေတာရှည် ",
  "ကျုံပျော်၊ ဓနုဖြူ ",
  "မိုးကုတ်၊ သာစည် ",
  "ဆွာ၊ သာဂရ ",
  "လပွတ္တာ ",
  "ချောင်းသာ ",
  "မကွေး ",
  "တာမွေ ",
  "ပြင်ဦးလွင် ",
  "ကေတုမတီမြို့သစ် ",
  "ဘိုကလေး ",
  "မင်းဘူး ",
  "ဗန်းမော် ",
  "ရွှေကူ၊ ဟိုပင် ",
  "နမ္မတီး၊ မိုးညှင်း ",
  "ဝိုင်းမော် ",
  "လွယ်ဂျယ် ",
  "ဒဂုံမြို့သစ်(တောင်ပိုင်း) ",
  "မြင်းခြံ၊ ရမည်းသင်း ",
  "ကျောက်တံခါး ",
  "ငါးသိုင်းချောင်း ",
  "နတ်မောက် ",
  "မရမ်းကုန်း ",
  "မြစ်ငယ် ",
  "မလှိုင် ",
  "ပဲနွယ်ကုန်း ",
  "ရေကြည် ",
  "ပခုက္ကူ ",
  "ကြည့်မြင်တိုင် ",
  "ပုလိပ်၊ စဉ့်ကိုင် ",
  "အုတ်တွင်း ",
  "မအူပင် ",
  "တောင်တွင်းကြီး ",
  "ဟားခါး ",
  "တောင်ဥက္ကလာပ ",
  "ကျောက်ဆည် ",
  "တောကျွဲအင်း ",
  "မြောင်းမြ ",
  "ရေနံချောင်း ",
  "ချောက် ",
  "တနိုင်း ",
  "လုံးခင်း၊ ဖားကန့် ",
  "လှိုင် ",
  "ဝမ်းတွင်း ",
  "သဲတော ",
  "ရွှေကျင်၊ ဥသျှစ်ပင် ",
  "ကျိုက်လတ် ",
  "သန်လျင် ",
  "သုံးဆယ် ",
  "ကျောင်းကုန်း ",
  "ပျော်ဘွယ်၊ နွားထိုးကြီး ",
  "သာယာဝတီ ",
  "စမ်းချောင်း ",
  "ပုဂံ၊ ညောင်ဦး ",
  "အိမ်မဲ၊ ဖျာပုံ ",
  "ဆိပ်ဖြူ၊ လယ်ကိုင် ",
  "ပွင့်ဖြူ ",
  "အထက်မင်းလှ ",
  "ဂီတင် ",
  "သင်္ဃန်းကျွန်း ",
  "မြစ်သား၊ တောင်သာ ",
  "ပြွန်တန်ဆာ ",
  "ဒေးဒရဲ ",
  "စကု ",
  "စလင်း ",
  "လက်ပံတန်း ",
  "မြန်အောင်၊ ကြံခင်း ",
  "သာကေတ ",
  "ဒေါပုံ ",
  "ရန်ကင်း ",
  "ကူမဲ၊ မတ္တရာ ",
  "ပုသိမ်ကြီး ",
  "ဟန်မြင့်မိုရ်လမ်းခွဲ ",
  "ဆင်ဖြူကျွန်း ",
  "ဝေါ၊ ဇေယျဝတီ ",
  "အောက်မင်းလှ ",
  "ညောင်တုန်း ",
  "ဝါးခယ်မ ",
  "ရေစကြို ",
  "ညောင်ခြေထောက် ",
  "ဇလွန်၊ မော်ကျွန်း ",
  "အောင်လံ ",
  "သရက် ",
  "မြိတ်၊ ကော့သောင်း ",
  "ထားဝယ်၊ ရေဖြူ ",
  "မောင်းမကန် ",
];

ul = document.getElementById("city-list");

let render_lists = function (lists) {
  let li = "";
  if (lists == null || lists.length == 0) {
    ul.innerHTML =
      "<li id='no_city' style='background-color: rgba(255, 0, 0, 0.376);border:0;'>No city found! Try something.</li>";
  } else {
    for (index in lists) {
      li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
  }
};

// lets filters it
input = document.getElementById("filter_users");

let filterUsers = function (event) {
  keyword = input.value.toLowerCase();
  filtered_users = users.filter(function (user) {
    user = user.toLowerCase();
    return user.indexOf(keyword) > -1;
  });
  if (keyword) {
    render_lists(filtered_users);
  } else {
    render_lists(null);
  }
};

input.addEventListener("keyup", filterUsers);
