OC.L10N.register(
    "thesearchpage",
    {
    "The Search Page" : "صفحة البحث",
    "Provides a proper search page" : "مزود لصفحة مناسبة للبحث",
    "🔎 A Search Page for your Nextcloud instance\n\n- [Changelog](https://raw.githubusercontent.com/callmemagnus/nextcloud-searchpage/main/CHANGELOG.md)\n- [Help translate this application](https://app.transifex.com/nextcloud/nextcloud/thesearchpage/)\n\nIt works like the existing search widget, uses the same sources to query BUT\ndisplays the results in a more readable and browsable fashion.\n\nThe content of the results depends on the other applications installed on\nyour Nextcloud instance. Every Nextcloud application can become a search\nprovider and get its results displayed by this application.\n\nOut of the Nextcloud box, you usually get the following providers:\n\n- Apps -- searches for match for in installed application names\n- Files -- searches on path and filename\n- Tags\n- Comments\n- Settings\n\nBecause of its design, the results depend on the implementation of the providers\nin respective application.\n\nKnown issues with other applications:\n\n- users -- [by design(?), it always returns an empty array](https://github.com/nextcloud/server/issues/41274) (it is hidden/disabled in this application)\n- fulltextsearch -- does not seem to AND the query terms, OR is usually less relevant\n- news -- does not provide a direct link to a feed item.\n\n\nDon't hesitate to leave a comment here or a rating!" : "🔎 صفحة في خادوم نكست كلاود خاصّتك \n\n- [سجل التغيير](https://raw.githubusercontent.com/callmemagnus/nextcloud-searchpage/main/CHANGELOG.md) \n- [ساعد في ترجمة هذا التطبيق](https://app.transifex.com/nextcloud/nextcloud/thesearchpage/) \n\nتعمل الصفحة بكيفية مماثلة لأداة البحث الموجودة سابقاً، و هي تستخدم نفس المصادر للاستعلام ؛ و لكنها تعرض النتائج بطريقة أكثر قابلية للقراءة والتصفح. \n\nيعتمد محتوى النتائج على التطبيقات الأخرى المثبتة على خادوم نكست كلاود خاصّتك. و يمكن لأي تطبيق في نكست كلاود أن يعمل كمزود للبحث ليتم عرض نتائجه بواسطة هذه الصفحة.\n\nبمجرد تثبيت نكست كلاود ستحصل بشكل تلقائي على مزودي بحث في التطبيقات التالية: \n- التطبيقات - يبحث عن التطابق في أسماء التطبيقات المثبتة \n- الملفات - البحث عن المسار واسم الملف \n- السِّمات \n- التعليقات \n- الإعدادات \n\nالمشكلات المعروفة مع بعض التطبيقات الأخرى: \n- المستخدمون - [حسب التصميم (؟)، فإنه يُرجع دائمًا مصفوفة فارغة](https://github.com/nextcloud/server/issues/41274) (مخفي/معطل في هذا التطبيق) \n- البحث عن النص الكامل -- يعطي نتائج أقل صلة في حالة جمع الاستعلامات باستخدام المُعامِل \"و\" AND و المُعامِل \"أو\" OR. \n- الأخبار - لا توفر رابطًا مباشرًا لعنصر الخلاصة. \n\nلا تتردد في ترك تعليق هنا أو تقييم!",
    "All providers" : "كل المُزوِّدين",
    "Back" : "عودة",
    "Clear current query" : "محو الاستعلام الحالي",
    "Click to change providers" : "إضغَط لتغيير المزودين",
    "Filters" : "فلاتر",
    "Global settings" : "الإعدادات العامة",
    "Group settings" : "إعدادات المجموعة",
    "If a user is part of multiple groups, the union of the groups configurations will be applied." : "إذا كان المستخدِم عضواً في مجموعات متعددة، سيتم تطبيق اتحاد الإعدادات لكل تلك المجموعات.",
    "Load more…" : "رفع المزيد ...",
    "Loading…" : "التحميل جارٍ ...",
    "No results" : "لا نتائج",
    "Saved" : "تمّ الحفظ",
    "Search" : "بحث",
    "Search Page" : "صفحة البحث",
    "Security is applied by the search providers." : "يتم تطبيق إجراءات الأمان من قِبل مزودي البحث.",
    "See all providers" : "عرض كل المزودين",
    "See only results for this provider" : "عرض النتائج من هذا المزود فقط",
    "Select the providers that will be available to all the users:" : "إختَر المزوِدين الذين سيكونون متاحين لجميع المستخدِمين:",
    "Select the providers that will be available to the users in group \"{group}\":" : "إختَر المزوِدين الذين سيكونون متاحين لأعضاء مجموعة \"{group}\":",
    "Show only" : "عرض فقط",
    "There was an error loading the providers." : "حدث خطأ أثناء تحميل المزودين.",
    "This is not a security configuration." : "هذا ليس إعداد أمني.",
    "Unable to save" : "تعذّر الحفظ",
    "Load more..." : "تحميل المزيد ...",
    "Loading..." : "التحميل جارٍ ..."
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
