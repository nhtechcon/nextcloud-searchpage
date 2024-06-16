OC.L10N.register(
    "thesearchpage",
    {
    "The Search Page" : "An Leathanach Cuardach",
    "Provides a proper search page" : "Soláthraíonn leathanach cuardaigh ceart",
    "🔎 A Search Page for your Nextcloud instance\n\n- [Changelog](https://raw.githubusercontent.com/callmemagnus/nextcloud-searchpage/main/CHANGELOG.md)\n- [Help translate this application](https://app.transifex.com/nextcloud/nextcloud/thesearchpage/)\n\nIt works like the existing search widget, uses the same sources to query BUT\ndisplays the results in a more readable and browsable fashion.\n\nThe content of the results depends on the other applications installed on\nyour Nextcloud instance. Every Nextcloud application can become a search\nprovider and get its results displayed by this application.\n\nOut of the Nextcloud box, you usually get the following providers:\n\n- Apps -- searches for match for in installed application names\n- Files -- searches on path and filename\n- Tags\n- Comments\n- Settings\n\nBecause of its design, the results depend on the implementation of the providers\nin respective application.\n\nKnown issues with other applications:\n\n- users -- [by design(?), it always returns an empty array](https://github.com/nextcloud/server/issues/41274) (it is hidden/disabled in this application)\n- fulltextsearch -- does not seem to AND the query terms, OR is usually less relevant\n- news -- does not provide a direct link to a feed item.\n\n\nDon't hesitate to leave a comment here or a rating!" : "🔎 Leathanach Cuardaigh le haghaidh do shampla Nextcloud\n\n- [Athrú]( https://raw.githubusercontent.com/callmemagnus/nextcloud-searchpage/main/CHANGELOG.md)\n- [Cabhraigh le haistriú an fheidhmchláir seo]( https://app.transifex.com/nextcloud/nextcloud/thesearchpage/)\n\nOibríonn sé cosúil leis an ngiuirléid chuardaigh atá ann cheana féin, úsáideann sé na foinsí céanna chun ceisteanna a chur ACH\ntaispeánann sé na torthaí ar bhealach níos inléite agus níos brabhsála.\n\nBraitheann ábhar na dtorthaí ar na feidhmchláir eile atá suiteáilte ar\ndo shampla Nextcloud. Is féidir le gach feidhmchlár Nextcloud a bheith ina chuardach\nsoláthraí agus a fháil ar a chuid torthaí ar taispeáint ag an bhfeidhmchlár.\n\nLasmuigh den bhosca Nextcloud, is gnách go bhfaigheann tú na soláthraithe seo a leanas:\n\n- Aipeanna -- cuardaigh le haghaidh meaitseála in ainmneacha feidhmchlár suiteáilte\n- Comhaid -- cuardaigh ar chonair agus ainm comhaid\n- Clibeanna\n- Tuairimí\n- Socruithe\n\nMar gheall ar a dhearadh, braitheann na torthaí ar chur i bhfeidhm na soláthraithe\nsan iarratas faoi seach.\n\nSaincheisteanna aitheanta le feidhmchláir eile:\n\n- úsáideoirí -- [de réir dearadh(?), cuireann sé eagar folamh ar ais i gcónaí](https://github.com/nextcloud/server/issues/41274) (tá sé i bhfolach/díchumasaithe san fheidhmchlár seo)\n- fulltextsearch -- ní cosúil go AGUS na téarmaí fiosrúcháin, NÓ is lú ábhartha de ghnáth\n- nuacht -- ní sholáthraíonn sé nasc díreach chuig mír bheatha.\n\n\nNá bíodh leisce ort trácht a fhágáil anseo nó rátáil!",
    "All providers" : "Gach soláthraí",
    "Back" : "Ar ais",
    "Clear current query" : "Glan an cheist reatha",
    "Click to change providers" : "Cliceáil chun soláthraithe a athrú",
    "Filters" : "Scagairí",
    "Global settings" : "Socruithe domhanda",
    "Group settings" : "Socruithe grúpa",
    "If a user is part of multiple groups, the union of the groups configurations will be applied." : "Má tá úsáideoir ina chuid d’ilghrúpaí, cuirfear aontas na bhfoirmíochtaí grúpaí i bhfeidhm.",
    "Load more…" : "Luchtaigh níos mó…",
    "Loading…" : "Á lódáil…",
    "No results" : "Gan torthaí",
    "Saved" : "Shábháil",
    "Search" : "Cuardach",
    "Search Page" : "Leathanach Cuardaigh",
    "Security is applied by the search providers." : "Cuireann na soláthraithe cuardaigh an tslándáil i bhfeidhm.",
    "See all providers" : "Féach ar gach soláthraí",
    "See only results for this provider" : "Féach ar na torthaí don soláthraí seo amháin",
    "Select the providers that will be available to all the users:" : "Roghnaigh na soláthraithe a bheidh ar fáil do na húsáideoirí go léir:",
    "Select the providers that will be available to the users in group \"{group}\":" : "Roghnaigh na soláthraithe a bheidh ar fáil do na húsáideoirí sa ghrúpa \"{group}\":",
    "Show only" : "Taispeáin amháin",
    "There was an error loading the providers." : "Tharla earráid agus na soláthraithe á lódáil.",
    "This is not a security configuration." : "Ní cumraíocht slándála é seo.",
    "Unable to save" : "Ní féidir a shábháil",
    "Load more..." : "Luchtaigh níos mó...",
    "Loading..." : "Á lódáil..."
},
"nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);");
