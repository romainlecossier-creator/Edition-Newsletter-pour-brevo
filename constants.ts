import { SpecialBlock } from './types.ts';

export const DEFAULT_SPECIAL_BLOCK_HTML = `<table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center" class="r32-o" style="table-layout: fixed; width: 100%;"><tbody><tr><td class="r33-i" style="background-color: #ffffff;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td width="100%" valign="top" class="r4-c" style="background-color: #bc4653; font-weight: normal;" bgcolor="#bc4653"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r5-o" style="table-layout: fixed; width: 100%;" bgcolor="#bc4653"><tbody><tr><td valign="top" class="r34-i" style="background-color: #bc4653; padding-bottom: 15px; padding-left: 15px; padding-right: 15px; padding-top: 15px;" bgcolor="#bc4653"> <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation"><tbody><tr><td class="r25-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="148" class="r35-o" style="border-bottom-width: 0px; border-collapse: separate; border-left-width: 0px; border-radius: 0px; border-right-width: 0px; border-top-width: 0px; table-layout: fixed; width: 148px;"><tbody><tr><td class="r36-i" style="border-radius: 0px; font-size: 0px; line-height: 0px;"> <img src="https://img-cache.net/im/7491719/31f612a6c484ebbefea47320a042f1ad7b43056dc256bd6c640dea34155a0ebd.png?e=rLys--2_8ZQ8NMMyWk6qUtAKh1CtQuYtSErG3vzB_nrU2kM3BNV1BA4-AgT8xKg2JnUOXkgQCRsrKQPHRM_2SjP1NSy5I_3yxl7WP_zJpuDA0H6zK816qB4Tg7b-g5irKIcK-k-Ayh9Eb6wJsYF4KxDQi_QDJed0hvjqFM8V9uiZBaXmji7PAS9WTzk12Zj5OjR0NK7Az6L7-EUokTW_MXmXUZBKhS2NkHEBpviRf-wkfuiI3WAr" width="148" border="0" style="display: block; width: 100%; border-radius: 0px;" sib_link_id="14"></td> </tr></tbody></table></td> </tr><tr><td class="r37-c nl2go-default-textstyle" align="left" style="color: #414141; font-family: Tahoma; font-size: 16px; word-break: break-word; line-height: 1; padding-bottom: 10px; padding-top: 15px; text-align: left; valign: top;"> <div><h3 class="default-heading3" style="margin: 0; color: #414141; font-family: tahoma,geneva,sans-serif,Arial; font-size: 24px; word-break: break-word;"><span style="color: #f8f8f8;">La CLE des mots</span></h3><p style="margin: 0;"><br></p></div> </td> </tr><tr><td class="r25-c" align="left"> <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" class="r38-o" style="table-layout: fixed; width: 100%;"><tbody><tr><td align="left" valign="top" class="r15-i nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; word-break: break-word; line-height: 1.5; text-align: left;"> <div><p class="default" id="isPasted" style="margin: 0;"><span style="color: rgb(255, 255, 255);">La CLÉ des mots est le Club Ludique d’Écriture des lecteurs de la médiathèque de Veuzain. Dans une joyeuse bonne humeur, les participants échangent anagrammes, cafés et contrepèteries un vendredi sur deux. Venez essayer. Restez partager !</span></p><p style="margin: 0; font-style: normal; font-weight: 400; text-decoration-style: initial; text-decoration-thickness: initial;"><br><span style="color: #f8f8f8;"><strong>Les vendredis 7 et 21 novembre à 10h&nbsp;</strong></span><span style="color: #f8f8f8;"><strong>à la Médiathèque de Veuzain-sur-Loire/Agglopolys&nbsp;</strong></span></p><p style="margin: 0; font-style: normal; font-weight: 400; text-decoration-style: initial; text-decoration-thickness: initial;"><span style="color: #FFFEFE; font-size: 14px;">À partir de 13 ans</span></p></div> </td> </tr><tr class="nl2go-responsive-hide"><td height="5" style="font-size: 5px; line-height: 5px;">­</td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table></td> </tr></tbody></table>`;

export const NEW_SPECIAL_BLOCK_TEMPLATE: SpecialBlock = {
    id: 'special-block-cle-des-mots',
    originalHtml: DEFAULT_SPECIAL_BLOCK_HTML,
    imageUrl: 'https://img-cache.net/im/7491719/31f612a6c484ebbefea47320a042f1ad7b43056dc256bd6c640dea34155a0ebd.png?e=rLys--2_8ZQ8NMMyWk6qUtAKh1CtQuYtSErG3vzB_nrU2kM3BNV1BA4-AgT8xKg2JnUOXkgQCRsrKQPHRM_2SjP1NSy5I_3yxl7WP_zJpuDA0H6zK816qB4Tg7b-g5irKIcK-k-Ayh9Eb6wJsYF4KxDQi_QDJed0hvjqFM8V9uiZBaXmji7PAS9WTzk12Zj5OjR0NK7Az6L7-EUokTW_MXmXUZBKhS2NkHEBpviRf-wkfuiI3WAr',
    title: 'La CLE des mots',
    description: 'La CLÉ des mots est le Club Ludique d’Écriture des lecteurs de la médiathèque de Veuzain. Dans une joyeuse bonne humeur, les participants échangent anagrammes, cafés et contrepèteries un vendredi sur deux. Venez essayer. Restez partager !',
    schedule: 'Les vendredis 7 et 21 novembre à 10h',
    location: 'à la Médiathèque de Veuzain-sur-Loire/Agglopolys',
    age: 'À partir de 13 ans',
    isEnabled: true,
};

export const INITIAL_NEWSLETTER_HTML = `
<style>
    @media only screen and (max-width: 600px) {
      .r35-c {
        display: block !important;
        width: 100% !important;
      }
      
      th.r35-c {
        display: block !important;
        width: 100% !important;
      }
      
      .r36-o {
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .r38-i {
        padding-left: 0px !important;
        padding-top: 12px !important;
      }
    }
  </style>
<table class="r33-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r34-i" style="background-color: #ffffff; padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 20px;">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr><th class="r35-c" style="font-weight: normal;" width="33.33%" valign="middle">
<table class="r36-o" role="presentation" style="border-collapse: separate; border-radius: 8px; table-layout: fixed; width: 186px;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r37-i" style="border-radius: 8px; font-size: 0px; line-height: 0px;"><img style="display: block; width: 100%; border-radius: 8px;" alt="Le mois du film documentaire" src="https://bibliotheques.agglopolys.fr/EXPLOITATION/Default/basicimagedownload.ashx?repositoryId=1&amp;itemId=10883" width="186" border="0"></td>
</tr>
</tbody>
</table>
</th><th class="r35-c" style="font-weight: normal;" width="66.67%" valign="middle">
<table class="r5-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r38-i" style="padding-left: 12px;" valign="top">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r39-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; line-height: 1.5; word-break: break-word;">
<table role="presentation" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" border="0" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td style="padding: 0 5px 5px 0;"><span style="font-size: 12px; padding: 5px 8px; background-color: #ef5b6a; color: #ffffff; text-transform: uppercase; font-weight: bolder; display: block; line-height: 1;">Projection</span></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="r40-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; word-break: break-word; line-height: 1.3; text-align: left; valign: top;" align="left">
<div>
<h3 class="default-heading3" style="margin: 0; color: #414141; font-family: tahoma,geneva,sans-serif,Arial; font-size: 24px; word-break: break-word;">Le mois du film documentaire</h3>
</div>
</td>
</tr>
<tr>
<td class="r41-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 15px; text-align: left; valign: top;" align="left">
<div>
<p style="margin: 0;"><strong>Du 4 au 26 novembre</strong></p>
</div>
</td>
</tr>
<tr>
<td class="r42-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; word-break: break-word; line-height: 1.2; padding-bottom: 15px; padding-top: 5px; text-align: left; valign: top;" align="left">
<div><p style="margin: 0;">Bibliothèque Abbé-Grégoire / Médiathèque Maurice-Genevoix / Médiathèque de Veuzain</p></div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><table class="r0-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r43-i" style="background-color: #ffffff; padding-bottom: 10px; padding-top: 10px;">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr><th class="r4-c" style="font-weight: normal;" width="100%" valign="top">
<table class="r5-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r12-i" style="padding-left: 15px; padding-right: 15px;" valign="top">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r44-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; valign: top;" align="left"><div>
<p style="margin: 5px 0;">• <strong><em>La Cravate</em></strong> d'Étienne Chaillou et Mathias Théry (2019, 96 min, France)</p>
<p style="margin: 5px 0;">• <strong><em>Yintah</em></strong> de Jennifer Wickham, Brenda Michell, Michael Toledano (2024, 110 min, Canada)</p>
<p style="margin: 5px 0;">• <strong><em>État limite</em></strong> de Nicolas Peduzzi (2023, 103 min, France)</p>
<p style="margin: 5px 0;">• <strong><em>Apolonia, Apolonia</em></strong> de Lea Glob (2022, 116 min)</p>
<p style="margin: 5px 0;">• <strong><em>Pourquoi encore penser ? À l'heure de l'intelligence artificielle</em></strong> de Luc Jabon (2024, 90 min, Belgique)</p>
<p style="margin: 5px 0;">• <strong><em>Le Chêne</em></strong> de Laurent Charbonnier, Michel Seydoux (2021, 52 min, France)</p>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><table class="r0-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r30-i" style="background-color: #ffffff; padding-bottom: 20px; padding-top: 20px;">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr><th class="r4-c" style="font-weight: normal;" width="100%" valign="top">
<table class="r5-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r12-i" style="padding-left: 15px; padding-right: 15px;" valign="top">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r45-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 15px; text-align: left; valign: top;" align="left">
<div>
<h2 class="default-heading2" style="margin: 0; color: #414141; font-family: tahoma,geneva,sans-serif,Arial; font-size: 24px; word-break: break-word; text-align: center;"><span style="font-size: 12px; color: #ef5b6a;"> <a style="text-decoration: underline; color: #ef5b6a;" href="https://bibliotheques.agglopolys.fr/EXPLOITATION/Default/doc/AGENDA/2102/le-mois-du-film-documentaire" target="_blank" rel="noopener noreferrer">Informations pratiques</a> </span></h2>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><table class="r0-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r30-i" style="background-color: #ffffff; padding-bottom: 20px; padding-top: 20px;">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr><th class="r4-c" style="font-weight: normal;" width="100%" valign="top">
<table class="r5-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r12-i" style="padding-left: 15px; padding-right: 15px;" valign="top">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r31-c" style="color: #414141; font-family: Tahoma,Geneva,sans-serif; font-size: 16px; padding-bottom: 10px; padding-top: 10px;" align="center">
<table role="presentation" style="border-top: 3px dotted #d9d9d9; background-clip: border-box; font-size: 3px; line-height: 3px; width: 100%; height: 3px;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="font-size: 0px; line-height: 0px;" height="0">­</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table class="r33-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r34-i" style="background-color: #ffffff; padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 20px;">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr><th class="r35-c" style="font-weight: normal;" width="33.33%" valign="middle">
<table class="r36-o" role="presentation" style="border-collapse: separate; border-radius: 8px; table-layout: fixed; width: 186px;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r37-i" style="border-radius: 8px; font-size: 0px; line-height: 0px;"><img style="display: block; width: 100%; border-radius: 8px;" alt="Rose Valland" src="https://bibliotheques.agglopolys.fr/EXPLOITATION/basicfilesdownload.ashx?repositoryId=1&amp;itemId=10888" width="186" border="0"></td>
</tr>
</tbody>
</table>
</th><th class="r35-c" style="font-weight: normal;" width="66.67%" valign="middle">
<table class="r5-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r38-i" style="padding-left: 12px;" valign="top">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r39-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; line-height: 1.5; word-break: break-word;">
<table role="presentation" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" border="0" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td style="padding: 0 5px 5px 0;"><span style="font-size: 12px; padding: 5px 8px; background-color: #ef5b6a; color: #ffffff; text-transform: uppercase; font-weight: bolder; display: block; line-height: 1;">Rencontre</span></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="r40-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; word-break: break-word; line-height: 1.3; text-align: left; valign: top;" align="left">
<div>
<h3 class="default-heading3" style="margin: 0; color: #414141; font-family: tahoma,geneva,sans-serif,Arial; font-size: 24px; word-break: break-word;">Rose Valland, la résistance au service de l'art</h3>
</div>
</td>
</tr>
<tr>
<td class="r41-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 15px; text-align: left; valign: top;" align="left">
<div>
<p style="margin: 0;"><strong>samedi 8 novembre à 16h</strong></p>
</div>
</td>
</tr>
<tr>
<td class="r42-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; word-break: break-word; line-height: 1.2; padding-bottom: 15px; padding-top: 5px; text-align: left; valign: top;" align="left">
<div><p style="margin: 0;">Médiathèque de Veuzain-sur-Loire/Agglopolys</p></div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><table class="r0-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r43-i" style="background-color: #ffffff; padding-bottom: 10px; padding-top: 10px;">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr><th class="r4-c" style="font-weight: normal;" width="100%" valign="top">
<table class="r5-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r12-i" style="padding-left: 15px; padding-right: 15px;" valign="top">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r44-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; valign: top;" align="left"><div>
<p style="margin: 0;">La romancière Emmanuelle Favier propose de marcher dans les pas de Rose Valland, résistante méconnue qui a risqué sa vie durant l'Occupation pour protéger le patrimoine artistique français, et a consacré son existence à la récupération des biens spoliés par les nazis. Un regard d'écrivaine sur l'histoire de la spoliation et sur ce personnage aussi impénétrable que fascinant.<br> <br>Dans le cadre du baptème de la médiathèque Veuzain/Agglopolys baptisée Rose-Valland.<br> Cette conférence sera suivie d'un pot de l'amitié.</p>
</div></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><table class="r0-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r30-i" style="background-color: #ffffff; padding-bottom: 20px; padding-top: 20px;">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr><th class="r4-c" style="font-weight: normal;" width="100%" valign="top">
<table class="r5-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r12-i" style="padding-left: 15px; padding-right: 15px;" valign="top">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r45-c nl2go-default-textstyle" style="color: #414141; font-family: Tahoma; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 15px; text-align: left; valign: top;" align="left">
<div>
<h2 class="default-heading2" style="margin: 0; color: #414141; font-family: tahoma,geneva,sans-serif,Arial; font-size: 24px; word-break: break-word; text-align: center;"><span style="font-size: 12px; color: #ef5b6a;"> <a style="text-decoration: underline; color: #ef5b6a;" href="https://bibliotheques.agglopolys.fr/EXPLOITATION/Default/doc/AGENDA/2087/rose-valland-la-resistance-au-service-de-l-art" target="_blank" rel="noopener noreferrer">Informations pratiques</a> </span></h2>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><table class="r0-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr>
<td class="r30-i" style="background-color: #ffffff; padding-bottom: 20px; padding-top: 20px;">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr><th class="r4-c" style="font-weight: normal;" width="100%" valign="top">
<table class="r5-o" role="presentation" style="table-layout: fixed; width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r12-i" style="padding-left: 15px; padding-right: 15px;" valign="top">
<table role="presentation" style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td class="r31-c" style="color: #414141; font-family: Tahoma,Geneva,sans-serif; font-size: 16px; padding-bottom: 10px; padding-top: 10px;" align="center">
<table role="presentation" style="border-top: 3px dotted #d9d9d9; background-clip: border-box; font-size: 3px; line-height: 3px; width: 100%; height: 3px;" border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td style="font-size: 0px; line-height: 0px;" height="0">­</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th></tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
`;