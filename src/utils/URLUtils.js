export default {
  isURL: function (str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  },
  isEmail: function (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  parseLinkFavicon: function (link) {
    let URLObject = {}
    try {
      URLObject = new URL(link)
    }
    catch (e) {
      console.error(`Link is not a URL: ${link} (${typeof(link)})`)
    }

    if (link === false) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEgFt97UzU3O_mkEdS_qOgH9RXbm0K-Q2NEPTefDDMYP7F7Ejtqd6az4tQ5oA1M7kVF7Rq9vin79CeeP4PvWVUFo6edkVCwzyeBHZN3auCzqcMV4gOewmbk7onhXTV-tZprjRnYtPDyCzwnj733ES3z_15bfhRZMoPp5Cxg4obgOGeuJ3qn8YnGk-A'
    }
    else if (link.startsWith('https://blog.pulipuli.info')) {
      return 'https://lh3.googleusercontent.com/-vjf_alp-zjQ/VvtkKVpqCjI/AAAAAAACuMI/HPJXcEemwok/s0/pulipuli144x144.jpg'
    }
    else if (link.startsWith('https://calendar.google.com/calendar/u/0/r/search?q=%E7%B5%B1%E4%B8%80%E7%99%BC%E7%A5%A8%E5%B0%8D%E7%8D%8E%20(%E9%A0%98%E7%8D%8E%E6%97%A5)')) {
      return 'https://lh3.googleusercontent.com/-5Mr1ZOraA38/YTbmUDjMciI/AAAAAAAFBfg/60_x-vwc3MwdK8fRCwcZAtWrquBlmIE9ACLcBGAsYHQ/s1600/invoice_icon-calendar.png'
    }
    else if (link.startsWith('https://feedly.com/')) {
      return 'https://lh3.googleusercontent.com/-b4eksS2JlfY/YcGUy16P71I/AAAAAAAFEKs/-SCZKuf03owIWHFPXgcZnC6VhlCKN28UACNcBGAsYHQ/s1600/feedly-2-432512.png'
    }
    else if (link.startsWith('https://docs.google.com/spreadsheets/d/1VL7M9rQfIT1yTDx5noSKQFzaEoG2WVUF0k8ODta8Upk/edit#gid=0')) {
      return 'https://lh3.googleusercontent.com/-NiLMRutgh4M/YfIIgRMFMVI/AAAAAAAFFzw/ryvL43BKOt0urOQxWXwqe7J2CEkIY4VkQCNcBGAsYHQ/s1600/envelope.png'
    }
    else if (link.startsWith('https://www.thsrc.com.tw/')) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEi3XJB70ERxopzJYt4fPLcrOGY-SXhZJIXhCrIk55nxWDMAvd5GTEm_h01oafLCySWKpiQ-KlgX9uSvliz4-jjllCrzr6qgKQCXel6OpKh6x0FRNvYRtchuuV-mslzA00zEXOyzMMv4OzHtdY-un38zB2OhoeoSYIba9eZhCLojdG_4Zhhulmg'
    }
    else if (link.startsWith('https://www.railway.gov.tw/')) {
      return 'https://i.ibb.co/JF59d4T9/unnamed.webp'
    }
    else if (link.startsWith('http://100.79.171.3:27180/')) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEh1w5OaqxQNXwTvfwvTtbN_r0XNBgoz5d3Aix9L3vrlnucGZKAync7CLg2q8XR3cvWWY04T7fUPslIGDqkaItOhG707i52BPqpUmic61nPMMLu08tKe9Wgi-QcRBU-EisMqpzwJSZsx9kD85UDNOnzmzUQBB6ceqzgCo-l2aInX_JlR1h6GIgOQAA'
    }
    else if (link.startsWith('http://192.168.0.180:7860/')) {
      return 'https://i.ibb.co/SRYnSxj/download-1.png'
    }
    else if (link.startsWith('https://www.ericstar.tw/')) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEjRpHqZHXc9l8SXmNMR7HC_lArLmYMLj1tQf2ru_aJze9lhlGNTu8lHqo_JN0XC49VNXQGKsohCvSDMZKeRGSZLtdMd8sTvDXZZuib2Vq7wQIhM2u2a7lwVShRuRbNxSTvT5vIZKK-xHZlMvnHpbwoEp4A237nhEN_s0wSKt4pTjrjPrcaGknP8lg'
    }
    else if (link.startsWith('https://www.coze.com/')) {
      return 'https://i.ibb.co/wRKMdpX/coze-icon-filled-256.png'
    }
    else if (link.startsWith('https://www.freepik.com/')) {
      return 'https://i.ibb.co/mczrZM7/download.png'
    }
    else if (link.startsWith('https://www.canva.com/')) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEiXNNq_NRPjfvXt4lMOsyUMbn2ZLNsdyHTz0peX3gKsEYaF3O69xKSXLu_vt5WjXLoxKt-dzSjDgVGhfyeeXcgUK3tx908mXZkCVEcvubAOxKpQgkF3rrnDgdKjzjskXBC87TQgS5vyI2lElhTNhiFEaXnE5hplUvmN_lpsXl7SCVaeLG_vw8U'
    }
    else if (link.startsWith('http://192.168.0.180:7681/')) {
      return 'https://i.ibb.co/Kh9hx0X/image.png'
    }
    else if (link.startsWith('http://localhost:61080/')) {
      return 'https://i.ibb.co/pzHc6cT/download.png'
    }
    else if (link.startsWith('http://192.168.0.180:58000/')) {
      return 'https://i.ibb.co/P6ptBkm/photo-gallery.png'
    }
    else if (link.startsWith('https://civitai.com/')) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEjzb7KZy0gE2kZe7Zil7U7TuimLu_oBmmqwzAk4UkZblRecQIGdIJjoVZDxnIb5c0lW7w7ZkukdIRnNwaeCm1YpBto7kltP5biyuCFJbxYiEatRUxUTnenfFHuIEnjHeAp_rWt2j0FBvPF8GuYRkKArtJe4q5XEp8jxLtDDvjHo5W89ywuLYlU'
    }
    else if (link.startsWith('https://www.ptt.cc/bbs')) {
      return 'https://i.ibb.co/KD950yM/ptt-push-icon.png'
    }
    else if (link.startsWith('https://drive.google.com/uc?export=download&id=')) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEiR_BcHdkkP0JTGAT_mR8Z5jzXhnX9HwnYZ0-gMGbO7ASYz2yOd2AyCWXDUzbk18NVHw1FxCOoINQZ3AQr5cEB0imQAWOW-nyxyLKdS6AkzMZo0SVU7h5GD6ClW-mt7qfbNDsLZTcI67WOMKYciLfpKrftDqdjR7OgFuZaGMql2xa5zt9Njsdg'
    }
    else if (link.startsWith('https://chat.openai.com/')) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEjmQBVqhOhANZs-tOKjqZ04VF_BLvfanhpMuc897f6Evq8rC2WWKyKK91WfEudMzd95Vq4egohnhZqM17swx6BvwqJKJfsB7S3Lnf9qiOz2FK0OW79HzrzTwRpskB89-AVSmH8SZ9vxmrtogty7649u8jqTlPR8JeBRAt6nfrelpY60pN99rrc'
    }
    else if (link.startsWith('COPY:')) {
      return 'https://i.ibb.co/rH8zVtQ/paste.png'
    }
    else if (link.startsWith('IFRAME:')) {
      return 'https://i.ibb.co/gDny00T/anchor.png'
    }
    else if (link === 'https://www.blogger.com/blog/post/edit/16607461/8994542276547065') {
      return 'https://lh3.googleusercontent.com/-7Jm-mp8wnRE/YTHkihOJj8I/AAAAAAAFBaQ/Qo6hg2iIXS0XMvLQ7v6hFxUILI_ztg8NgCLcBGAsYHQ/s1600/blogger-image-upload.png'
    }
    else if (link.startsWith('https://efile.tax.nat.gov.tw/')) {
      return 'https://i.ibb.co/MsV6ZW2/tax.png'
    }
    else if (link.startsWith('https://zapier.com/')) {
      return 'https://i.ibb.co/8bd11VS/image.png'
    }
    else if (link.startsWith('https://script.google.com/')) {
      return 'https://i.ibb.co/sQKqnsP/image.png'
    }
    else if (link.startsWith('https://zhconvert.org/')) {
      return 'https://i.ibb.co/vjSBPB2/download.png'
    }
    else if (link.startsWith('https://smartmockups.com/')) {
      return 'https://smartmockups.com/android-chrome-400x400.jpg'
    }
    else if (link.startsWith('https://www.appsheet.com/')) {
      return 'https://pathfix.com/wp-content/uploads/2021/09/768px-AppSheet_Logo.svg_.png'
    }
    else if (link.startsWith('https://codepen.io/')) {
      return 'https://i.ibb.co/NtWjpDD/image.png'
    }
    else if (link.startsWith('https://business.facebook.com/')) {
      return 'https://lh3.googleusercontent.com/-foroyliODN8/YTMI6QtMYdI/AAAAAAAFBcA/vVOjq4RhOd4Ju5QXqJGEOqdmSArUn5S8gCLcBGAsYHQ/s1600/facebook-pudding.png'
    }
    else if (link.startsWith('https://www.blogger.com/')) {
      return 'https://i.ibb.co/8sT9PnP/image.png'
    }
    else if (link.startsWith('https://business.facebook.com/latest/inbox/messenger')) {
      return 'https://blogger.googleusercontent.com/img/a/AVvXsEiM6hcJ0TTNop4EsGmnjX9uMn0dClCiiTQi6kLznSeuM2U8NyBb4kQPrESMB41nGyfZEN-nx06rhi-XvBMAZWf45rUS8ctZY5nf7SoVfL0JAbEt1vO0kQ-cXoelpKxZPd5F1wv9w3rPdVKqeI_oAo8j0PPUaHcsg7liJYE5A1S_LIC6yYS7fbI'
    }
    else if (link.startsWith('https://mes.bli.gov.tw/')) {
      return 'https://i.ibb.co/zmYMSFC/download.png'
    }
    else if (link.startsWith('https://semantic-ui.com/')) {
      return `https://semantic-ui.com/images/logo.png`
    }
    else if (link.startsWith('https://github.com/')) {
      return `https://lh3.googleusercontent.com/-nEccYkymvSQ/YS70Igts14I/AAAAAAAFBZM/AfC2tNupWe0oSplLgyziooq3F9dKmdvtwCLcBGAsYHQ/s1600/github-logo_github_icon_143196.png`
    }
    else if (link.startsWith('https://tasks.google.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEg1HSyEe97CpvB0oQqLno4QRocWZWEq2dLQYAMv8vPplEe6NW-kBD2_9VD_C7yI0dvrcINRsFXCaXIm6YgJJSWb1zBlM4Fw6BQg_Fw7CQkRcLMHKmXEEhaoyrjWluodac_-p-dOZwCBtowL9dG9KRCXdD7Vz4ANkHYVIewB-mxvqeQhZibsPpg`
    }
    else if (link.startsWith('https://pulipulichen.github.io/PWA-Now-Loading/')) {
      return `https://pulipulichen.github.io/PWA-Now-Loading/assets/favicon/favicon.png`
    }
    else if (link.startsWith('https://www.youtube.com/')) {
      return `https://i.ibb.co/hKWT2Zz/image.png`
    }
    else if (link.startsWith('https://drive.google.com/drive/')) {
      return `https://i.ibb.co/PxHv3s4/image.png`
    }
    else if (link.startsWith('https://docs.google.com/document/')) {
      if (link.endsWith('/export?format=odt')) {
        return `https://i.ibb.co/GnN2fhN/5098043.png`
      }
      else if (link.endsWith('/pub')) {
        // https://docs.google.com/document/d/e/2PACX-1vSISWjuhGhXZFw3rixY3u6v7kZkqUp9W99vM1oxytwjzeghT5GtT8FDx6j_io6qvzcir68WH-RkvZeJ/pub
        return `https://i.ibb.co/7nxt4X4/image.png`
      }
      // https://docs.google.com/document/d/1vEumiFuKAUqRjLhECeCnUp0fs-unB39peV70zz5q89U/export?format=odt
      return `https://lh3.googleusercontent.com/-3VWx8YodNfU/YcrAMBrI0bI/AAAAAAAFEWA/xw13o-kGx5Mq2eh_XXNZZn85zPmCYcWoACNcBGAsYHQ/s1600/google-drive-docs-blue.png`
    }
    else if (link.startsWith('https://gitmind.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEiE2HNWMyHHADw8jsvmQJfnFqPNQL54DWPoEURywteyoZnZ4prqaTXsXhso20Yk0SATB4WxwmM-soQ-5IYWbjkWUFGezQ8oQsbQeZ-gw3JzAi8zeEGbae_e9tFmWiwb604evwPxN_m9Y9bQWocr4Q9SfOK78FjKq1GQipM_Zzb55lUnxerdxcI`
    }
    else if (link.startsWith('https://docs.google.com/spreadsheets/')) {
      if (link.startsWith('https://docs.google.com/spreadsheets/d/1MtL5PnyWKDR8T8TjKpCScz5xSbqCUCU-9pbCHDbG2_Y/')) {
        return `https://blogger.googleusercontent.com/img/a/AVvXsEjxP610PLQw2AZOXfD-AVw910-3sJxUAbdPu8UbHg18-CiZ_qKx7hgnz_HiHpjPksr4lHUPP6gPEPTfyLdNum9uTU8zTCpeG5jbb_5luBGgDuW7QesuB8wWIhfQttBe02pjmg1CtEt_hNhm0MHz9bXNxLPpZCfX4A6N21qMkOgyKdu3TrS2F8o`
      }
      if (link.endsWith('/export?format=ods')) {
        return `https://i.ibb.co/1ZKMtsK/8361268.png`
      }
      return `https://blogger.googleusercontent.com/img/a/AVvXsEjTPFZczYG4fmpoPDVISoxJZ_xNOLCDXm-pryNsS7igZ3mrZP9I654mf3hmqiuXBw6xW_G_m24RlsoddwnUM7XZ8YTEAGf_u0iM4RaXPr6LCk_r7iwF34LfDpbk3akuDLU-I1muTD-OtAlR0OdF9q1ppa-n8admztfrBsc2EPTjq8r5I0RATqI`
    }
    else if (link.startsWith('https://docs.google.com/presentation/')) {
      return `https://lh3.googleusercontent.com/-f6XuWkPsrEk/Ycq9X8RiDuI/AAAAAAAFEVQ/BYUhx02M45UMVbt3LpwvHUdBP8t-WiVjQCNcBGAsYHQ/s1600/slides-icon-6-yellow.jpg`
    }
    else if (link.startsWith('https://contacts.google.com/')) {
      return `https://lh3.googleusercontent.com/-Ba-Y5IFad_I/YWBRijp6kII/AAAAAAAFBrk/ocoEmih0IzYguHGDaz7KKrCsjkapuzHEgCLcBGAsYHQ/s1600/Google-Contacts-icon-new.png`
    }
    else if (link.startsWith('https://pulipuli.myqnapcloud.com')) {
      return `https://lh3.googleusercontent.com/-42ziiV_GGXU/YT2x6xKbJ1I/AAAAAAAFBhI/3iz2LIstgn0SVK6FVXNboBJmKkqO7IdTACLcBGAsYHQ/s1600/qnap-https.png`
    }
    else if (link.startsWith('https://translate.google.com/')) {
      return `https://lh3.googleusercontent.com/-0xBTt3R4Z9M/YeQP0L8OnsI/AAAAAAAFFsY/MOTqO1UEy-cqKdFsUzhKlhbvKJc_TUhcACNcBGAsYHQ/s1600/translate.png`
    }
    else if (link.startsWith('https://calendar.google.com/')) {
      return `https://lh3.googleusercontent.com/-UbApbKLgLyc/YeRPftfmnoI/AAAAAAAFFtg/6Lq-oBa5ANkPiXt3CRK6MW7YZpgLni9fQCNcBGAsYHQ/s1600/google-calendar.png`
    }
    else if (link.startsWith('https://ani.gamer.com.tw/')) {
      return `https://lh3.googleusercontent.com/-kM0AhpALYIs/YccE2uwm2LI/AAAAAAAFEQc/ZpyGJ292CP8Lg1l_qTSh4uIuPPiiEkURgCNcBGAsYHQ/s1600/512x512bb.jpg`
    }
    else if (link.startsWith('https://www.flaticon.com/')) {
      return `https://lh3.googleusercontent.com/-AnfwOjDXFT0/Ycgj244fEBI/AAAAAAAFERk/icN3usc_c_kubcF3gOUSytb6RteV7OsGgCNcBGAsYHQ/s1600/apple-icon-152x152-precomposed.png`
    }
    else if (link.startsWith('https://www.zotero.org/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEjxql2PgMUnWlx8326NZ3RAXMmu5V1NkZEMruB88RSNGJ_Q7W2AQIzZYKIRb0PXnWBeOeDw0j9B41p_D4t4UhPplxFXkt0PUCzmc3pIn55ig10R39WmY1-6yIvOZ0IKtbzTGuMCGm93alTJ0lXLeqZIVMxB0BXbqJF4mAgLol-wHS7tN2mDcY8`
    }
    else if (link.startsWith('https://pixabay.com/')) {
      return `https://lh3.googleusercontent.com/-x4whR9OHrbk/YdMHVJN6fXI/AAAAAAAFEpE/Lbvzoc3BCYMAKccgW_y2o13MGOQHwl9JQCNcBGAsYHQ/s1600/pixabay-1987090_1280.png`
    }
    else if (link.startsWith('https://mail.google.com/chat/')) {
      return `https://lh3.googleusercontent.com/-FEnK3Vtby9A/YeQCgpks0UI/AAAAAAAFFr8/UMcqFiDnXgg6sbNpEdFzPu4fosAXscGyACNcBGAsYHQ/s1600/hangouts.png`
    }
    else if (link.startsWith('https://mail.google.com/')) {
      return `https://lh3.googleusercontent.com/-8MRoD-6AwC8/YTXIqNVf-hI/AAAAAAAFBd8/RSz0eNITGVsh9X6g5e6Nn6if7_Hr5hnPwCLcBGAsYHQ/s1600/gmail-icon-38470.png`
    }
    else if (link.startsWith('https://shopee.tw/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEilxCSG1sIPUuJND23Nnwl8pcFpG1wpATALelro7_fLgbYuveD8J5N0JawBrdBWzjvTEAZjb7yirm0WQpgFlJASWRlHJSGUE9h4JKeH7FrfLi3yp_hs3GVOQT3uPKuKPfiQBlAM2MWNXzjryI-ed6bfBMTHXKonN66cd648JpnohlyfB9I4RYY`
    }
    else if (link.startsWith('https://www.google.com/maps')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEjLRz5QYFnGgI6Wn6dK3goJSBJXCfkD5xQk-e4Zoi0Rm8EPEIX5pncYTSk32Y0293qDKJM1fPvURAH8ughYHcvsaSX3uyiRF8kgfBBeurgnqM9QMezph-hcUxquCmR1Iea91KKuIYzeO3RNTAJ5wYf2fYhspsgzMx85j0AabsmfsJfi9yFGER0`
    }
    else if (link.startsWith('https://github.dev/pulipulichen/l')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEg092lkYCu1YAhzClIYqrqpdda7CkMW5vReW9700X_KXV3zPIlW44IxGuJ46yBPA8_kbhDZffp2wRzu16rN7jyNqH5rbbVnX3S3Y6fNhMT3b8XriCLJOOX5-CW3er11GUJVvEcB68xuJ8LgOijkXRhORYEMSh-MS1eW7AUeyaT4CoK-cIYc6Co`
    }
    else if (link.startsWith('https://ppt.cc/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEj7gj0ioGJ9hdLmbBC_paEpGhQMBLYUm5fGq28rprk8Hjq7vNHHxS95JJze1x0y6ghy9cdIJun3DoQFHEWS7FCu2kMOtVbCFzyX7TbvVuq0_SlseC8rQB2LHLbsNFfyVVY5a79JPpY5-6kvYLdOcm0lQ76qGvOv68nOk3mlQYhtW1vwAgoJFlo`
    }
    else if (link.startsWith('https://onedrive.live.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEjN2_h_jQ8pYaceYBxZaa6Y0xyMevkjBD26vaWxJHtGLbHYsrWxUChopkJdBsK4BhOs1YfHDIZ1hMziOvKUaWDFVtJSJxjK7qeFqXqu_AkvUF_md-sUUPkkUsPszpXu0FQ9LjjPU-DXWR7CbLN0AH8dkM7l5rbdtIY1JchAUnQz9Jc02FCxmNA`
    }
    else if (link.startsWith('https://www.messenger.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEiM6hcJ0TTNop4EsGmnjX9uMn0dClCiiTQi6kLznSeuM2U8NyBb4kQPrESMB41nGyfZEN-nx06rhi-XvBMAZWf45rUS8ctZY5nf7SoVfL0JAbEt1vO0kQ-cXoelpKxZPd5F1wv9w3rPdVKqeI_oAo8j0PPUaHcsg7liJYE5A1S_LIC6yYS7fbI`
    }
    else if (link.startsWith('https://meet.google.com/')) {
      return `https://cdn.iconscout.com/icon/free/png-256/google-meet-4054246-3352988.png`
    }
    else if (link.startsWith('https://teams.microsoft.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEhDhrsJG2P-1DLYCIN8Ii2v3l7Bt_7xjoA9WLVcpJTfensBNAbS27ScfMDfc-Bm5urPRkkdBE6mlQ6DpMKpSrvAMTnQ1MQaDvAhBbZgOsLEuVtYN48HLY-lTGD0MO8TyvFk8KOqGAojmklj3JtQNXJZLG4sesnA0KYUgNLoEjP3DYS4Oa5P_5s`
    }
    else if (link.startsWith('https://isbn.ncl.edu.tw/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEjXTudYYMvXv_l02IXjsnJVQDzLY13G-L2qrZ8NYgx7KaVx3F0KpD3SMOy9YRE8D4fJkCFfKqKQmFJ48SKd4MH_27HuQrMV8xna62mkEOT70HLnwXGlH3m8rJ9u3Ij_kf2jdsnXXM87C55giRA9b3WGFYr1YvlA1wSMalyHn4RBv99FXgbjp1Y`
    }
    else if (link.startsWith('https://colab.research.google.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEjTu4JTjJibJwcXzNDnfqeEPF1PxmKlUHJjH2A_Ap7oL-0jUUysbiERYGMbbF1_aMZblWRTA4Ki3J365x-2o1qfbY5mPbSmUQq5IAHXu8Y0Uz1Sk_rLDXMOalH_SMd1uDMqBl0pFduLFSpQiMUBf5kz1Ax1eS3L-ZTzXZlqr5ZGPcvINzStsMQ`
    }
    else if (link.startsWith('https://chat.openai.com/chat')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEjmQBVqhOhANZs-tOKjqZ04VF_BLvfanhpMuc897f6Evq8rC2WWKyKK91WfEudMzd95Vq4egohnhZqM17swx6BvwqJKJfsB7S3Lnf9qiOz2FK0OW79HzrzTwRpskB89-AVSmH8SZ9vxmrtogty7649u8jqTlPR8JeBRAt6nfrelpY60pN99rrc`
    }
    else if (link.startsWith('https://docs.google.com/spreadsheets/d/1MtL5PnyWKDR8T8TjKpCScz5xSbqCUCU-9pbCHDbG2_Y/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEjxP610PLQw2AZOXfD-AVw910-3sJxUAbdPu8UbHg18-CiZ_qKx7hgnz_HiHpjPksr4lHUPP6gPEPTfyLdNum9uTU8zTCpeG5jbb_5luBGgDuW7QesuB8wWIhfQttBe02pjmg1CtEt_hNhm0MHz9bXNxLPpZCfX4A6N21qMkOgyKdu3TrS2F8o`
    }
    else if (link.startsWith('https://www.photoroom.com/backgrounds/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEiQc4F69aWXn6DjZ9d1APOKqi7Y0Bp1E7b5ZnfRw25U5SeFovpzjXzH0CwnNBAXUzVWtvddHmn899dfr1FxNa1lvd827-YnLfZn-eUHzSZjbJwZpDH4tfr2jG_pDSXOjjbw6jcFqEiN2AW7pCZGYuDqpeqpt7As9JuifYsArZ0NBQkXkbkezHE`
    }
    else if (link.startsWith('https://trello.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEinGjMHnAvMYlGdVOriO3anmcv7hzpIvohbOgSwS7FotYNSDLLsGPjUi9O_Ef3p4Z-JVlncDLmaGEu7PsRhgJkEV29c_H53U3R7RAPfJMcmGwjyDE7Pe1MCV3Eouk40FiSsCrg87lIWE0eAfJ4LI5WjT9Q3_ervwhpY2ekYrKpNGJ8WBdmJTPw`
    }
    else if (link.startsWith('https://app.grammarly.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEit2uZLSLoxbuy3x8A-JXHBd6M5ZtHa1DdZTNJuTlsKRGZRBby9j-OL7YqSAqhi-5kEhvedE3u2_8ojk0piLXl_-K1X8WQQyC6IGnwdT7y07kVTrB_0W2sekbmKOZNBW75dUN2SUjWM71u8249CZ9KTGy8A3KvQIdzxA1wyUPzBbjXqjsM9hY8`
    }
    else if (link.startsWith('https://app.grammarly.com/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEit2uZLSLoxbuy3x8A-JXHBd6M5ZtHa1DdZTNJuTlsKRGZRBby9j-OL7YqSAqhi-5kEhvedE3u2_8ojk0piLXl_-K1X8WQQyC6IGnwdT7y07kVTrB_0W2sekbmKOZNBW75dUN2SUjWM71u8249CZ9KTGy8A3KvQIdzxA1wyUPzBbjXqjsM9hY8`
    }
    else if (link.startsWith('https://iclass.tku.edu.tw/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEisUKzrY3KAhRpz03nYwrAQ3qGqffbfHz56SYLG1YbfjY4TveSNHmMCptFWfKwp9fd2zqwbKHBFWIJWzcEjIVAMnYcpaPtOqZh4pO5UOwISUaG4pqQz4U0voJZLZHySc2qELftiPJEilh3IqnPYCFWekY9Wj3Tq7YN-Tf27m776Q-qt1i-G-TQ`
    }
    else if (link.startsWith('https://wd.pulipuli.info/')) {
      return `/assets/favicon/favicon.png`
    }
    else if (link.startsWith('https://pulipulichen.github.io/')) {
      return `https://i.ibb.co/vBZJHx8/image.png`
    }
    else if (link.startsWith('https://www.facebook.com/')) {
      return `https://i.ibb.co/KzSVDfk/2673646.png`
    }
    else if (link.startsWith('https://www.cwb.gov.tw/V8/C/W/')) {
      return `https://i.ibb.co/DgBr6CH/image.png`
    }
    else if (link.startsWith('mailto:')) {
      return `https://i.ibb.co/vLL9S3k/image.png`
    }
    else if (URLObject.hostname && URLObject.hostname.endsWith('tku.edu.tw')) {
      // https://teacher.tku.edu.tw/StaffSummary.aspx?s=&kwd=%u8CC7%u8A0A%u7D44%u7E54
      return `https://blogger.googleusercontent.com/img/a/AVvXsEigZc3-j_wpeJCVwM9rIjwSiIu8GJnWFxR8fOCwzm391uFEPGBRRZ5twDfLrIqIc4CQQGXdqdSUW6Nydj7l4LRHBXxbXpY8VFkCi2zs18G5sN2qINyW1rYbWRse84yoMKUOYn6niuw2IGBzPZ-NdBHxUrOKs9V0TenwzQZR6h_ff1xXT9GGhco`
    }
    else if (link.startsWith('https://www.myqnapcloud.com/smartshare/')) {
      return `https://blogger.googleusercontent.com/img/a/AVvXsEh7G9oRs04QTU2WgQfFkZsfyre-wVEqw66Fu4gPrQXt8OWDsFduWOL8yD51XP2SeGfmuRcZsapuXg-qi39VkbCnCVVFYLYpGzSk9X9Jrv1SZAKDBRbxYAmM32XYx3lXmTk3Ul4sE2khAyKssqenFsmL5pFL1bHXPi_4iyllto31SK5sg3gVkk0`
    }
    // https://www.myqnapcloud.com/smartshare/72f773ikj1n32r78uv4uvb0b_7cf4g6ghlmmn2486qvw0542071fd0ghh

    // else if (link.startsWith('')) {
    //   return ``
    // }
    return false
  }
}