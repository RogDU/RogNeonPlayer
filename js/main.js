// Sistema de Música
class MusicPlayer {
    constructor() {
        this.playlists = {
            avantasia: {
                name: "Avantasia - The Scarecrow",
                image: "imagens/avantasia.jpg",
                tracks: [
                    {
                        name: "Twisted Mind",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/01.Twisted Mind.mp3",
                        duration: "4:15"
                    },
                    {
                        name: "The Scarecrow",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/02.The Scarecrow.mp3",
                        duration: "11:12"
                    },
                    {
                        name: "Shelter From The Rain",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/03.Shelter From The Rain.mp3",
                        duration: "5:08"
                    },
                    {
                        name: "Carry Me Over",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/04. Carry Me Over.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "What Kind Of Love",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/05. What Kind Of Love.mp3",
                        duration: "4:54"
                    },
                    {
                        name: "Another Angel Down",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/06. Another Angel Down.mp3",
                        duration: "5:42"
                    },
                    {
                        name: "The Toy Master",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/07. The Toy Master.mp3",
                        duration: "4:15"
                    },
                    {
                        name: "Devil In The Belfry",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/08. Devil In The Belfry.mp3",
                        duration: "4:41"
                    },
                    {
                        name: "Cry Just A Little",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/09. Cry Just A Little.mp3",
                        duration: "5:45"
                    },
                    {
                        name: "I Don't Belive In Your Love",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/10. I Don't Belive In Your Love.mp3",
                        duration: "5:32"
                    },
                    {
                        name: "Lost In Space",
                        artist: "Avantasia",
                        image: "imagens/avantasia.jpg",
                        path: "musicas/avantasia/11. Lost In Space.mp3",
                        duration: "4:12"
                    }
                ]
            },

            deathstars: {
                name: "Deathstars - Termination Bliss",
                image: "imagens/deathsatars.jpg",
                tracks: [
                    {
                        name: "Tongues",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/01. Tongues.mp3",
                        duration: "3:45"
                    },
                    {
                        name: "Blitzkrieg",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/02. Blitzkrieg Boom.mp3",
                        duration: "4:12"
                    },
                    {
                        name: "Motherzone",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/03. Motherzone.mp3",
                        duration: "4:15"
                    },
                    {
                        name: "Cyanide",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/04. Cyanide.mp3",
                        duration: "3:54"
                    },
                    {
                        name: "The Greatest Fight On Earth",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/05. The Greatest Fight On Earth.mp3",
                        duration: "3:54"
                    },
                    {
                        name: "Play God",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/06. Play God.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "Trinity Fields",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/07. Trinity Fields.mp3",
                        duration: "4:22"
                    },
                    {
                        name: "The Last Ammunition",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/08. The Last Ammunition.mp3",
                        duration: "4:06"
                    },
                    {
                        name: "Virtue To Vice",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/09. Virtue To Vice.mp3",
                        duration: "3:42"
                    },
                    {
                        name: "Death In Vogue",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/10. Death In Vogue.mp3",
                        duration: "4:14"
                    },
                    {
                        name: "Termination Bliss",
                        artist: "Deathstars",
                        image: "imagens/deathsatars.jpg",
                        path: "musicas/deathstars/11. Termination Bliss.mp3",
                        duration: "3:43"
                    }
                ]
            },

            sabaton: {
                name: "Sabaton-Carolus Rex CD1",
                image: "imagens/Sabaton.jpg",
                tracks: [
                    {
                        name: "Dominium Maris Baltici",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/01. Dominium Maris Baltici.mp3",
                        duration: "0:29"
                    },
                    {
                        name: "The Lion From The North",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/02. The Lion From The North.mp3",
                        duration: "4:42"
                    },
                    {
                        name: "Gott Mit Uns",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/03. Gott Mit Uns.mp3",
                        duration: "3:15"
                    },
                    {
                        name: "A Lifetime of War",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/04. A Lifetime of War.mp3",
                        duration: "5:45"
                    },
                    {
                        name: "1648",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/05. 1648.mp3",
                        duration: "3:55"
                    },
                    {
                        name: "The Carolean's Prayer",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/06. The Carolean's Prayer.mp3",
                        duration: "6:14"
                    },
                    {
                        name: "Carolus Rex",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/07. Carolus Rex.mp3",
                        duration: "4:24"
                    },
                    {
                        name: "Killing Ground",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/08. Killing Ground.mp3",
                        duration: "4:24"
                    },
                    {
                        name: "Poltava",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/09. Poltava.mp3",
                        duration: "4:03"
                    },
                    {
                        name: "Long Live the King",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/10. Long Live the King.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "Ruina Imperii",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/11. Ruina Imperii.mp3",
                        duration: "3:21"
                    },
                    {
                        name: "Twilight Of The Thunder God",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/12. Twilight Of The Thunder God.mp3",
                        duration: "3:59"
                    },
                    {
                        name: "In The Army Now",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/13. In The Army Now.mp3",
                        duration: "3:58"
                    },
                    {
                        name: "Feuer Frei",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/14. Feuer Frei.mp3",
                        duration: "3:12"
                    },
                    {
                        name: "Harley From Hell",
                        artist: "Sabaton",
                        image: "imagens/Sabaton.jpg",
                        path: "musicas/Sabaton/15. Harley From Hell.mp3",
                        duration: "3:50"
                    }
                ]
            },

            nightwish: {
                name: "Nightwish-1998-Oceanborn(Japanese Edition)",
                image: "imagens/Oceanborn.jpg",
                tracks: [
                    {
                        name: "Stargazers",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/01. Stargazers.mp3",
                        duration: "4:28"
                    },
                    {
                        name: "Gethsemane",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/02. Gethsemane.mp3",
                        duration: "5:22"
                    },
                    {
                        name: "Devil & The Deep Dark Ocean",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/03. Devil & The Deep Dark Ocean.mp3",
                        duration: "4:46"
                    },
                    {
                        name: "Sacrament Of Wilderness",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/04. Sacrament Of Wilderness.mp3",
                        duration: "4:12"
                    },
                    {
                        name: "Passion And The Opera",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/05. Passion And The Opera.mp3",
                        duration: "4:50"
                    },
                    {
                        name: "Swanheart",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/06. Swanheart.mp3",
                        duration: "4:44"
                    },
                    {
                        name: "Moondance",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/07. Moondance.mp3",
                        duration: "3:31"
                    },
                    {
                        name: "The Riddler",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/08. The Riddler.mp3",
                        duration: "5:16"
                    },
                    {
                        name: "The Pharaoh Sails To Orion",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/09. The Pharaoh Sails To Orion.mp3",
                        duration: "6:26"
                    },
                    {
                        name: "Walking In The Air",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/10. Walking In The Air.mp3",
                        duration: "5:31"
                    },
                    {
                        name: "Sleeping Sun",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/11. Sleeping Sun.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "Nightquest (Bonus Track)",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/12. Nightquest (Bonus Track).mp3",
                        duration: "4:17"
                    },
                    {
                        name: "Sleeping Sun (Live) (Bonus Track)",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/13. Sleeping Sun (Live) (Bonus Track).mp3",
                        duration: "4:32"
                    },
                    {
                        name: "Swanheart (Live) (Bonus Track)",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/14. Swanheart (Live) (Bonus Track).mp3",
                        duration: "3:55"
                    },
                    {
                        name: "The Pharaoh Sails To Orion(Live)(Bonus Track)",
                        artist: "Nightwish",
                        image: "imagens/Oceanborn.jpg",
                        path: "musicas/nightwish/15. The Pharaoh Sails To Orion (Live) (Bonus Track).mp3",
                        duration: "6:44"
                    }
                ]
            },

            rogdu_hits_metal: {
                name: "Rogdu Hits Metals",
                image: "imagens/rog.jpg",
                tracks: [
                    {
                        name: "1. Valley Of The Damned",
                        artist: "DragonForce",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/1. Valley Of The Damned.mp3",
                        duration: "7:02"
                    },
                    {
                        name: "2. Echoes Within",
                        artist: "Age of Artemis",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/2. Echoes Within.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "3. Nova Era.mp3",
                        artist: "Angra",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/3. Nova Era.mp3",
                        duration: "4:54"
                    },
                    {
                        name: "4. Unbreakable",
                        artist: "Before the Dawn",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/4. Unbreakable.mp3",
                        duration: "3:30"
                    },
                    {
                        name: "5. Anthem",
                        artist: "Iced Earth",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/5. Anthem.mp3",
                        duration: "4:54"
                    },
                    {
                        name: "6. Over Your Head",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/6. Over Your Head.mp3",
                        duration: "6:41"
                    },
                    {
                        name: "7. Reason",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/7. Reason.mp3",
                        duration: "4:44"
                    },
                    {
                        name: "8. Alleine Zu Zweit",
                        artist: "Lacrimosa",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/8. Alleine Zu Zweit.mp3",
                        duration: "4:15"
                    },
                    {
                        name: "9. Epona.mp3",
                        artist: "Eluveitie",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/9. Epona.mp3",
                        duration: "3:47"
                    },
                    {
                        name: "10. Vergissmeinnicht",
                        artist: "Eisbrecher",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/10. Vergissmeinnicht.mp3",
                        duration: "3:54"
                    },
                    {
                        name: "11. Children Of Cain",
                        artist: "Demons & Wizards",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/11. Children Of Cain.mp3",
                        duration: "10:07"
                    },
                    {
                        name: "12. Metal Trilogy",
                        artist: "Sabaton",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/12. Metal Trilogy.mp3",
                        duration: "4:18"
                    },
                    {
                        name: "13. Sensorium",
                        artist: "Epica",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/13. Sensorium.mp3",
                        duration: "4:48"
                    },
                    {
                        name: "14. The Scarecrow",
                        artist: "Avantasia",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/14. The Scarecrow.mp3",
                        duration: "11:12"
                    },
                    {
                        name: "15. When The Lights Are Down",
                        artist: "Kamelot",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/15. When The Lights Are Down.mp3",
                        duration: "3:41"
                    },
                    {
                        name: "16. Wish I Had An Angel",
                        artist: "Nightwish",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/16. Wish I Had An Angel.mp3",
                        duration: "4:06"
                    },
                    {
                        name: "17. Imaginations From The Other Side",
                        artist: "Blind Guardian",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/17. Imaginations From The Other Side.mp3",
                        duration: "7:19"
                    },
                    {
                        name: "18. Mystery",
                        artist: "Age of Artemis",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/18. Mystery.mp3",
                        duration: "5:43"
                    },
                    {
                        name: "19. Seraphim",
                        artist: "Before the Dawn",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/19. Seraphim.mp3",
                        duration: "3:21"
                    },
                    {
                        name: "20. Starfire",
                        artist: "DragonForce",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/20. Starfire.mp3",
                        duration: "5:47"
                    },
                    {
                        name: "21. Masquerate",
                        artist: "Versailles",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/21. Masquerate.mp3",
                        duration: "6:01"
                    },
                    {
                        name: "22. Thanatos",
                        artist: "Versailles",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/22. Thanatos.mp3",
                        duration: "4:33"
                    },
                    {
                        name: "23. Cry For The Moon",
                        artist: "",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/23. Cry For The Moon (The Embrace That Smothers - Part IV).mp3",
                        duration: "6:44"
                    },
                    {
                        name: "24. Distant Thunder",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/24. Distant Thunder.mp3",
                        duration: "6:21"
                    },
                    {
                        name: "25. Leider",
                        artist: "Eisbrecher",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/25. Leider.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "26. Lichtgestalt",
                        artist: "Lacrimosa",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/26. Lichtgestalt.mp3",
                        duration: "5:18"
                    },
                    {
                        name: "27. Nemo",
                        artist: "Nightwish",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/27. Nemo.mp3",
                        duration: "4:36"
                    },
                    {
                        name: "28. Reborn",
                        artist: "Damnation Angels",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/28. Reborn.mp3",
                        duration: "4:21"
                    },
                    {
                        name: "29. Shelter From The Rain",
                        artist: "Avantasia",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/29. Shelter From The Rain.mp3",
                        duration: "6:24"
                    },
                    {
                        name: "30. The Haunting (Somewhere In Time)",
                        artist: "Kamelot",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/30. The Haunting (Somewhere In Time).mp3",
                        duration: "5:40"
                    },
                    {
                        name: "31. Thousandfold",
                        artist: "Eluveitie",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/31. Thousandfold.mp3",
                        duration: "3:20"
                    },
                    {
                        name: "32. Willkommen Im Nichts",
                        artist: "Eisbrecher",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/32. Willkommen Im Nichts.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "33. Dark Chest Of Wonders",
                        artist: "Nightwish",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/33. Dark Chest Of Wonders.mp3",
                        duration: "4:28"
                    },
                    {
                        name: "34. Acid Rain",
                        artist: "Angra",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/34. Acid Rain.mp3",
                        duration: "6:14"
                    },
                    {
                        name: "35. My Darkness",
                        artist: "Before the Dawn",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/35. My Darkness.mp3",
                        duration: "4:16"
                    },
                    {
                        name: "36. Take Me Home",
                        artist: "Age of Artemis",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/36. Take Me Home.mp3",
                        duration: "3:37"
                    },
                    {
                        name: "37. Waiting Silence",
                        artist: "Angra",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/37. Waiting Silence.mp3",
                        duration: "5:04"
                    },
                    {
                        name: "38. Innocence",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/38. Innocence.mp3",
                        duration: "4:41"
                    },
                    {
                        name: "39. Carry Me Over",
                        artist: "",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/39. Carry Me Over.mp3",
                        duration: "4:09"
                    },
                    {
                        name: "40. Everytime I Die",
                        artist: "Children of Bodom",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/40. Everytime I Die.mp3",
                        duration: "4:03"
                    },
                    {
                        name: "41. Final Warning",
                        artist: "Demons & Wizards",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/41. Final Warning.mp3",
                        duration: "3:46"
                    },
                    {
                        name: "42. For Tomorrow.mp3",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/42. For Tomorrow.mp3",
                        duration: "6:46"
                    },
                    {
                        name: "43. I Hope",
                        artist: "Damnation Angels",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/43. I Hope.mp3",
                        duration: "6:05"
                    },
                    {
                        name: "44. Kingdom Come",
                        artist: "Sabaton",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/44. Kingdom Come.mp3",
                        duration: "4:04"
                    },
                    {
                        name: "45. Mountains",
                        artist: "Manowar",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/45. Mountains.mp3",
                        duration: "7:40"
                    },
                    {
                        name: "46. Planet Hell",
                        artist: "Nightwish",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/46. Planet Hell.mp3",
                        duration: "04:38"
                    },
                    {
                        name: "47. Schwarze Witwe.mp3",
                        artist: "Eisbrecher",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/47. Schwarze Witwe.mp3",
                        duration: "3:52"
                    },
                    {
                        name: "48. Soul Society",
                        artist: "Kamelot",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/48. Soul Society.mp3",
                        duration: "4:17"
                    },
                    {
                        name: "49. This Means War",
                        artist: "Avenged Sevenfold",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/49. This Means War.mp3",
                        duration: "6:09"
                    },
                    {
                        name: "50. Heroes Of Sand",
                        artist: "Angra",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/50. Heroes Of Sand.mp3",
                        duration: "4:44"
                    },
                    {
                        name: "51. Take My Pain",
                        artist: "Before the Dawn",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/51. Take My Pain.mp3",
                        duration: "4:06"
                    },
                    {
                        name: "52. Truth In Your Eyes",
                        artist: "Age of Artemis",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/52. Truth In Your Eyes.mp3",
                        duration: "3:49"
                    },
                    {
                        name: "53. Molinos de Viento",
                        artist: "Mago de Oz",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/53. Molinos de Viento.mp3",
                        duration: "4:10"
                    },
                    {
                        name: "54. Time Will Come",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/54. Time Will Come.mp3",
                        duration: "5:32"
                    },
                    {
                        name: "55. Timeless Spirit",
                        artist: "Demons & wizards",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/55. Timeless Spirit.mp3",
                        duration: "9:16"
                    },
                    {
                        name: "56. Omnos (Early Metal Version) ",
                        artist: "Eluveitie",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/56. Omnos (Early Metal Version) (Bonus Track).mp3",
                        duration: "3:49"
                    },
                    {
                        name: "57. Nymphetamine",
                        artist: "Cradle of Filth",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/57. Nymphetamine (Fix) (Bonus Track).mp3",
                        duration: "5:02"
                    },
                    {
                        name: "58. Invincible",
                        artist: "Demons & wizards",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/58. Invincible.mp3",
                        duration: "4:34"
                    },
                    {
                        name: "59. Pride",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/59. Pride.mp3",
                        duration: "4:14"
                    },
                    {
                        name: "60. Pride (The Warrior's Way) ",
                        artist: "Damnation Angels",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/60. Pride (The Warrior's Way).mp3",
                        duration: "9:46"
                    },
                    {
                        name: "61. I Don't Belive In Your Love",
                        artist: "Avantasia",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/61. I Don't Belive In Your Love.mp3",
                        duration: "5:48"
                    },
                    {
                        name: "62. Here I Am",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/62. Here I Am.mp3",
                        duration: "6:00"
                    },
                    {
                        name: "63. Ghost Love Score",
                        artist: "Nightwish",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/63. Ghost Love Score.mp3",
                        duration: "10:02"
                    },
                    {
                        name: "64. Universal Truth",
                        artist: "Demons & Wizards",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/64. Universal Truth.mp3",
                        duration: "5:05"
                    },
                    {
                        name: "65. Kuolema Tekee Taiteilijan",
                        artist: "Nightwish",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/65. Kuolema Tekee Taiteilijan.mp3",
                        duration: "3:58"
                    },
                    {
                        name: "66. Hail to the King",
                        artist: "Avenged Sevenfold",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/66. Hail to the King.mp3",
                        duration: "5:04"
                    },
                    {
                        name: "67. Cry Just A Little",
                        artist: "Avantasia",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/67. Cry Just A Little.mp3",
                        duration: "5:30"
                    },
                    {
                        name: "68. Guyana (Cult Of The Damned) ",
                        artist: "Manowar",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/68. Guyana (Cult Of The Damned).mp3",
                        duration: "7:11"
                    },
                    {
                        name: "69. Devil In The Belfry",
                        artist: "Avantasia",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/69. Devil In The Belfry.mp3",
                        duration: "4:57"
                    },
                    {
                        name: "70. Blind Spell.mp3",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/70. Blind Spell.mp3",
                        duration: "4:38"
                    },
                    {
                        name: "71. Till The End",
                        artist: "Age of Artemis",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/71. Till The End.mp3",
                        duration: "4:58"
                    },
                    {
                        name: "72. Herz Steht Still",
                        artist: "Eisbrecher",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/72. Herz Steht Still.mp3",
                        duration: "3:55"
                    },
                    {
                        name: "73. El Templo del Adios",
                        artist: "Mago de Oz",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/73. El Templo del Adios.mp3",
                        duration: "4:47"
                    },
                    {
                        name: "74. Kurenai (Bonus Track For Japan) ",
                        artist: "Damnation Angels",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/74. Kurenai (Bonus Track For Japan).mp3",
                        duration: "7:17"
                    },
                    {
                        name: "75. Bismarck",
                        artist: "Sabaton",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/75. Bismarck.mp3",
                        duration: "5:14"
                    },
                    {
                        name: "76. Iron Soul",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/76. Iron Soul.mp3",
                        duration: "5:29"
                    },
                    {
                        name: "77. No Pain For The Dead",
                        artist: "Angra",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/77. No Pain For The Dead.mp3",
                        duration: "5:14"
                    },
                    {
                        name: "78. Angels Calling",
                        artist: "Sabaton",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/78. Angels Calling.mp3",
                        duration: "5:53"
                    },
                    {
                        name: "78. Maritornes",
                        artist: "Mago de Oz",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/78. Maritornes.mp3",
                        duration: "4:18"
                    },
                    {
                        name: "79. Bright Eyes.mp3",
                        artist: "Blind Guardian",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/79. Bright Eyes.mp3",
                        duration: "5:16"
                    },
                    {
                        name: "79. Midas Disease",
                        artist: "Demons & Wizards",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/79. Midas Disease.mp3",
                        duration: "4:36"
                    },
                    {
                        name: "80. Dead Gardens",
                        artist: "Nightwish",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/80. Dead Gardens.mp3",
                        duration: "4:28"
                    },
                    {
                        name: "81. Rebirth.mp3",
                        artist: "Angra",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/81. Rebirth.mp3",
                        duration: "5:20"
                    },
                    {
                        name: "82. Father and Son",
                        artist: "Before the Dawn",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/82. Father and Son.mp3",
                        duration: "4:20"
                    },
                    {
                        name: "83. Invisible Cage",
                        artist: "Almah",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/83. Invisible Cage.mp3",
                        duration: "5:46"
                    },
                    {
                        name: "84. The Temple Of Hate",
                        artist: "Angra",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/84. The Temple Of Hate.mp3",
                        duration: "5:22"
                    },
                    {
                        name: "85. Diabolic",
                        artist: "Demons & Wizards",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/85. Diabolic.mp3",
                        duration: "8:01"
                    },
                    {
                        name: "86. The Siren",
                        artist: "Nightwish",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/86. The Siren.mp3",
                        duration: "4:45"
                    },
                    {
                        name: "87. Ohne Dich",
                        artist: "Eisbrecher",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/87. Ohne Dich.mp3",
                        duration: "4:36"
                    },
                    {
                        name: "88. Steel Commanders",
                        artist: "Sabaton",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/88. Steel Commanders.mp3",
                        duration: "3:51"
                    },
                    {
                        name: "89. Melancholy (Holy Martyr) ",
                        artist: "Iced Earth",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/89. Melancholy (Holy Martyr).mp3",
                        duration: "4:47"
                    },
                    {
                        name: "90. Bringer Of Light (Pt. III) ",
                        artist: "Damnation Angels",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/90. Bringer Of Light (Pt. III).mp3",
                        duration: "5:28"
                    },
                    {
                        name: "91. Fairy Tale",
                        artist: "Shaman",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/91. Fairy Tale.mp3",
                        duration: "7:01"
                    },
                    {
                        name: "92. Fanatica",
                        artist: "Eisbrecher",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/92. Fanatica.mp3",
                        duration: "3:22"
                    },
                    {
                        name: "93. The Toy Master.mp3",
                        artist: "Avantasia",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/93. The Toy Master.mp3",
                        duration: "6:34"
                    },
                    {
                        name: "94. This Pain",
                        artist: "Kamelot",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/94. This Pain.mp3",
                        duration: "3:59"
                    },
                    {
                        name: "95. Another Angel Down",
                        artist: "Avantasia",
                        image: "imagens/rog.jpg",
                        path: "musicas/rogdu_Hits_Metal/95. Another Angel Down.mp3",
                        duration: "5:58"
                    }
                ]
            }
        };

        this.state = {
            currentPlaylist: 'avantasia',
            currentTrackIndex: 0,
            isPlaying: false,
            isShuffled: false,
            isRepeating: false,
            volume: 80,
            favorites: JSON.parse(localStorage.getItem('favorites')) || [],
            history: JSON.parse(localStorage.getItem('history')) || [],
            searchResults: [],
            exiting: false
        };

        this.audio = new Audio();
        this.init();
    }

    init() {
        this.setupAudio();
        this.loadPlaylist('avantasia');
        this.setupEventListeners();
        this.setupExitSystem();
        this.updateUI();
        this.createParticles();
        this.showNotification('RogNeonPlayer Carregado!', 'success');
    }

    // SISTEMA DE SAÍDA SEGURO
    setupExitSystem() {
        window.addEventListener('beforeunload', (e) => {
            if (!this.state.exiting) {
                e.preventDefault();
                e.returnValue = '';
                this.showExitModal();
                return '';
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
                e.preventDefault();
                this.showNotification('Use o botão "Sair" para fechar o player', 'warning');
            }
        });

        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showNotification('Use o botão "Sair" para fechar o player', 'warning');
        });

        document.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        document.addEventListener('drop', (e) => {
            e.preventDefault();
        });
    }

    showExitModal() {
        const modal = document.getElementById('exitModal');
        if (modal) {
            modal.style.display = 'block';
            setTimeout(() => modal.classList.add('show'), 10);
        }
    }

    hideExitModal() {
        const modal = document.getElementById('exitModal');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    }

    exitPlayer() {
        this.state.exiting = true;
        this.pause();
        this.showNotification('Saindo do RogNeonPlayer...', 'info');

        setTimeout(() => {
            window.close();

            if (!window.closed) {
                this.showNotification('Use o botão fechar do navegador', 'info');
            }
        }, 1000);
    }

    setupAudio() {
        this.audio.addEventListener('loadedmetadata', () => {
            this.updateProgressBar();
            this.updateDuration();
        });

        this.audio.addEventListener('timeupdate', () => {
            this.updateProgressBar();
            this.updateCurrentTime();
        });

        this.audio.addEventListener('ended', () => {
            this.nextTrack();
        });

        this.audio.addEventListener('error', (e) => {
            console.error('Erro de áudio:', e);
            this.showNotification('Erro ao carregar música', 'error');
        });

        this.audio.volume = this.state.volume / 100;
    }

    createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        const bgAnimation = document.querySelector('.bg-animation');
        if (bgAnimation) {
            bgAnimation.appendChild(particlesContainer);
        }

        const colors = ['#ff2e63', '#08d9d6', '#ff9a00', '#ffffff'];

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const left = Math.random() * 100;
            const delay = Math.random() * 6;
            const duration = 6 + Math.random() * 4;
            const size = 1 + Math.random() * 2;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.left = `${left}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;

            particlesContainer.appendChild(particle);
        }
    }

    setupEventListeners() {
        // Navegação
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.showSection(section);
            });
        });

        // Controles
        const playBtn = document.getElementById('playBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const shuffleBtn = document.getElementById('shuffleBtn');
        const repeatBtn = document.getElementById('repeatBtn');
        const favoriteBtn = document.getElementById('favoriteBtn');

        if (playBtn) playBtn.addEventListener('click', () => this.togglePlay());
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousTrack());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextTrack());
        if (shuffleBtn) shuffleBtn.addEventListener('click', () => this.toggleShuffle());
        if (repeatBtn) repeatBtn.addEventListener('click', () => this.toggleRepeat());
        if (favoriteBtn) favoriteBtn.addEventListener('click', () => this.toggleFavorite());

        // Barras
        const progressBar = document.getElementById('progressBar');
        const volumeBar = document.getElementById('volumeBar');

        if (progressBar) {
            progressBar.addEventListener('input', (e) => {
                this.seekTo(e.target.value);
            });
        }

        if (volumeBar) {
            volumeBar.addEventListener('input', (e) => {
                this.setVolume(e.target.value);
            });
        }

        // Ações
        const clearFavoritesBtn = document.getElementById('clearFavorites');
        const clearHistoryBtn = document.getElementById('clearHistory');

        if (clearFavoritesBtn) {
            clearFavoritesBtn.addEventListener('click', () => this.clearFavorites());
        }
        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        }

        // Sistema de Saída
        const exitBtn = document.getElementById('exitBtn');
        const cancelExitBtn = document.getElementById('cancelExit');
        const confirmExitBtn = document.getElementById('confirmExit');

        if (exitBtn) {
            exitBtn.addEventListener('click', () => this.showExitModal());
        }

        if (cancelExitBtn) {
            cancelExitBtn.addEventListener('click', () => this.hideExitModal());
        }

        if (confirmExitBtn) {
            confirmExitBtn.addEventListener('click', () => this.exitPlayer());
        }

        // Fechar modal ao clicar fora
        const exitModal = document.getElementById('exitModal');
        if (exitModal) {
            exitModal.addEventListener('click', (e) => {
                if (e.target === exitModal) {
                    this.hideExitModal();
                }
            });
        }

        // BUSCA - CORRIGIDA
        const globalSearch = document.getElementById('globalSearch');
        if (globalSearch) {
            let searchTimeout;
            globalSearch.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.searchTracks(e.target.value);
                }, 300);
            });

            globalSearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.searchTracks(e.target.value);
                }
            });
        }

        // Busca em playlists
        const playlistSearch = document.getElementById('playlistSearch');
        if (playlistSearch) {
            playlistSearch.addEventListener('input', (e) => {
                this.searchPlaylists(e.target.value);
            });
        }
    }

    loadPlaylist(playlistKey) {
        if (!this.playlists[playlistKey]) return;

        this.state.currentPlaylist = playlistKey;
        this.state.currentTrackIndex = 0;

        const playlist = this.playlists[playlistKey];
        this.updateCurrentPlaylistInfo(playlist);
        this.loadTrack(0);
        this.renderPlaylists();
    }

    loadTrack(trackIndex) {
        const playlist = this.playlists[this.state.currentPlaylist];
        if (!playlist || trackIndex < 0 || trackIndex >= playlist.tracks.length) return;

        this.state.currentTrackIndex = trackIndex;
        const track = playlist.tracks[trackIndex];

        this.updateTrackInfo(track);
        this.updateFavoriteButton();

        this.audio.src = track.path;
        if (this.state.isPlaying) {
            this.audio.play().catch(console.error);
        }

        this.addToHistory(track);
    }

    updateTrackInfo(track) {
        const trackName = document.getElementById('trackName');
        const trackArtist = document.getElementById('trackArtist');
        const albumArt = document.getElementById('albumArt');

        if (trackName) trackName.textContent = track.name;
        if (trackArtist) trackArtist.textContent = track.artist;

        if (albumArt) {
            albumArt.classList.add('loading');
            albumArt.style.backgroundImage = 'none';

            const img = new Image();
            img.src = track.image;
            img.onload = () => {
                albumArt.style.backgroundImage = `url('${track.image}')`;
                albumArt.classList.remove('loading');
            };
            img.onerror = () => {
                albumArt.style.backgroundImage = 'linear-gradient(135deg, var(--primary), var(--secondary))';
                albumArt.classList.remove('loading');
                const artOverlay = albumArt.querySelector('.art-overlay');
                if (!artOverlay) {
                    albumArt.innerHTML = '<div class="art-overlay"><i class="fas fa-music"></i></div>';
                }
            };
        }

        const currentPlaylistDisplay = document.getElementById('currentPlaylistDisplay');
        const trackPosition = document.getElementById('trackPosition');

        if (currentPlaylistDisplay) {
            currentPlaylistDisplay.textContent = this.playlists[this.state.currentPlaylist].name;
        }
        if (trackPosition) {
            trackPosition.textContent = `${this.state.currentTrackIndex + 1}/${this.getCurrentTracks().length}`;
        }
    }

    updateCurrentPlaylistInfo(playlist) {
        const currentPlaylistName = document.getElementById('currentPlaylistName');
        const currentPlaylistCount = document.getElementById('currentPlaylistCount');
        const currentPlaylistImg = document.getElementById('currentPlaylistImg');

        if (currentPlaylistName) currentPlaylistName.textContent = playlist.name;
        if (currentPlaylistCount) currentPlaylistCount.textContent = `${playlist.tracks.length} músicas`;

        if (currentPlaylistImg) {
            const newImg = new Image();
            newImg.src = playlist.image;
            newImg.onload = () => {
                currentPlaylistImg.src = playlist.image;
            };
            newImg.onerror = () => {
                currentPlaylistImg.style.display = 'none';
            };
        }
    }

    // SISTEMA DE BUSCA COMPLETO - CORRIGIDO
    searchTracks(query) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        this.state.searchResults = [];

        if (!query || query.trim() === '') {
            resultsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>Digite o nome da música ou artista...</p>
                    <small>Exemplo: "Twisted", "Avantasia", "Tongues"</small>
                </div>
            `;
            return;
        }

        const searchTerm = query.toLowerCase().trim();
        const allTracks = [];

        // Coletar todas as músicas de todas as playlists
        Object.keys(this.playlists).forEach(playlistKey => {
            const playlist = this.playlists[playlistKey];
            playlist.tracks.forEach((track, trackIndex) => {
                allTracks.push({
                    ...track,
                    playlistKey: playlistKey,
                    playlistName: playlist.name,
                    trackIndex: trackIndex
                });
            });
        });

        // Filtrar resultados
        const filteredResults = allTracks.filter(track => {
            const trackName = track.name.toLowerCase();
            const artistName = track.artist.toLowerCase();
            const playlistName = track.playlistName.toLowerCase();

            return trackName.includes(searchTerm) ||
                   artistName.includes(searchTerm) ||
                   playlistName.includes(searchTerm);
        });

        this.state.searchResults = filteredResults;
        this.renderSearchResults(filteredResults, searchTerm);
    }

    renderSearchResults(results, searchTerm) {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>Nenhuma música encontrada para "${searchTerm}"</p>
                    <small>Tente outros termos como nome da música, artista ou playlist</small>
                </div>
            `;
            return;
        }

        // Criar o HTML dos resultados
        let resultsHTML = `
            <div class="search-header">
                <h4>${results.length} resultado(s) encontrado(s) para "${searchTerm}"</h4>
            </div>
            <div class="tracks-list">
        `;

        results.forEach((track, index) => {
            // Garantir que o artista não seja vazio
            const artistDisplay = track.artist && track.artist.trim() !== '' ? track.artist : 'Artista Desconhecido';
            
            resultsHTML += `
                <div class="track-item search-result-item" 
                     onclick="musicPlayer.playSearchResult('${track.playlistKey}', ${track.trackIndex})">
                    <img src="${track.image}" alt="${track.name}" 
                         onerror="this.src='https://via.placeholder.com/50x50/1a1a2e/00ff7f?text=🎵'">
                    <div class="track-info-small">
                        <h4>${this.highlightText(track.name, searchTerm)}</h4>
                        <p>${this.highlightText(artistDisplay, searchTerm)}</p>
                        <small>${track.playlistName} • ${track.duration}</small>
                    </div>
                    <div class="track-actions">
                        <button class="track-action-btn play-btn" 
                                onclick="event.stopPropagation(); musicPlayer.playSearchResult('${track.playlistKey}', ${track.trackIndex})"
                                title="Reproduzir">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        resultsHTML += '</div>';
        resultsContainer.innerHTML = resultsHTML;
    }

    // Método melhorado para tocar resultados da busca
    playSearchResult(playlistKey, trackIndex) {
        console.log('Tocando resultado da busca:', playlistKey, trackIndex);
        
        // Verificar se a playlist existe
        if (!this.playlists[playlistKey]) {
            this.showNotification('Playlist não encontrada', 'error');
            return;
        }
        
        // Verificar se o índice da música é válido
        if (trackIndex < 0 || trackIndex >= this.playlists[playlistKey].tracks.length) {
            this.showNotification('Música não encontrada', 'error');
            return;
        }

        // Carregar a playlist
        this.loadPlaylist(playlistKey);
        
        // Pequeno delay para garantir que a playlist foi carregada
        setTimeout(() => {
            this.loadTrack(trackIndex);
            this.play();
            
            const trackName = this.playlists[playlistKey].tracks[trackIndex].name;
            this.showNotification(`🎵 Tocando: ${trackName}`, 'success');
            
            // Mudar para a seção do player
            this.showSection('player');
        }, 200);
    }

    // Método auxiliar para destacar texto - CORRIGIDO
    highlightText(text, searchTerm) {
        if (!searchTerm || !text) return text || '';

        try {
            const regex = new RegExp(`(${this.escapeRegExp(searchTerm)})`, 'gi');
            return text.replace(regex, '<mark class="search-highlight">$1</mark>');
        } catch (e) {
            console.error('Erro no highlight:', e);
            return text;
        }
    }

    // Método para escapar caracteres especiais em regex
    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // BUSCA EM PLAYLISTS - CORRIGIDA
    searchPlaylists(query) {
        const grid = document.getElementById('playlistsGrid');
        if (!grid) return;

        if (!query || query.trim() === '') {
            this.renderPlaylists();
            return;
        }

        const searchTerm = query.toLowerCase().trim();
        const filteredPlaylists = Object.keys(this.playlists)
            .filter(key => {
                const playlist = this.playlists[key];
                return playlist.name.toLowerCase().includes(searchTerm) ||
                       key.toLowerCase().includes(searchTerm);
            })
            .map(key => ({ ...this.playlists[key], key: key }));

        if (filteredPlaylists.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>Nenhuma playlist encontrada para "${query}"</p>
                    <small>Tente outros nomes de bandas ou álbuns</small>
                </div>
            `;
            return;
        }

        grid.innerHTML = filteredPlaylists.map(playlist => {
            return `
                <div class="playlist-card" onclick="musicPlayer.loadPlaylist('${playlist.key}')">
                    <img src="${playlist.image}" alt="${playlist.name}" 
                         onerror="this.src='https://via.placeholder.com/200x120/1a1a2e/00ff7f?text=🎵'">
                    <h3>${this.highlightText(playlist.name, searchTerm)}</h3>
                    <p>${playlist.tracks.length} músicas</p>
                </div>
            `;
        }).join('');
    }

    togglePlay() {
        if (this.state.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    async play() {
        try {
            await this.audio.play();
            this.state.isPlaying = true;
            this.updatePlayButton();
            this.showVisualizer(true);
        } catch (error) {
            console.error('Erro ao reproduzir:', error);
        }
    }

    pause() {
        this.audio.pause();
        this.state.isPlaying = false;
        this.updatePlayButton();
        this.showVisualizer(false);
    }

    nextTrack() {
        let nextIndex;
        if (this.state.isShuffled) {
            nextIndex = Math.floor(Math.random() * this.getCurrentTracks().length);
        } else {
            nextIndex = (this.state.currentTrackIndex + 1) % this.getCurrentTracks().length;
        }
        this.loadTrack(nextIndex);
    }

    previousTrack() {
        let prevIndex;
        if (this.state.isShuffled) {
            prevIndex = Math.floor(Math.random() * this.getCurrentTracks().length);
        } else {
            prevIndex = (this.state.currentTrackIndex - 1 + this.getCurrentTracks().length) % this.getCurrentTracks().length;
        }
        this.loadTrack(prevIndex);
    }

    toggleShuffle() {
        this.state.isShuffled = !this.state.isShuffled;
        const shuffleBtn = document.getElementById('shuffleBtn');
        if (shuffleBtn) {
            shuffleBtn.classList.toggle('active', this.state.isShuffled);
        }
        this.showNotification(this.state.isShuffled ? 'Embaralhado' : 'Sequencial');
    }

    toggleRepeat() {
        this.state.isRepeating = !this.state.isRepeating;
        const repeatBtn = document.getElementById('repeatBtn');
        if (repeatBtn) {
            repeatBtn.classList.toggle('active', this.state.isRepeating);
        }
        this.audio.loop = this.state.isRepeating;
        this.showNotification(this.state.isRepeating ? 'Repetir ativado' : 'Repetir desativado');
    }

    toggleFavorite() {
        const track = this.getCurrentTrack();
        const trackKey = `${this.state.currentPlaylist}-${this.state.currentTrackIndex}`;

        const existingIndex = this.state.favorites.findIndex(fav => fav.key === trackKey);

        if (existingIndex > -1) {
            this.state.favorites.splice(existingIndex, 1);
            this.showNotification('Removido dos favoritos');
        } else {
            this.state.favorites.push({
                key: trackKey,
                playlist: this.state.currentPlaylist,
                trackIndex: this.state.currentTrackIndex,
                track: track,
                dateAdded: new Date().toISOString()
            });
            this.showNotification('Adicionado aos favoritos');
        }

        this.saveFavorites();
        this.updateFavoriteButton();
        this.renderFavorites();
    }

    seekTo(time) {
        this.audio.currentTime = time;
    }

    setVolume(volume) {
        this.state.volume = volume;
        this.audio.volume = volume / 100;
    }

    addToHistory(track) {
        this.state.history.unshift({
            playlist: this.state.currentPlaylist,
            trackIndex: this.state.currentTrackIndex,
            track: track,
            playedAt: new Date().toISOString()
        });

        if (this.state.history.length > 50) {
            this.state.history = this.state.history.slice(0, 50);
        }

        this.saveHistory();
        this.renderHistory();
    }

    // UI Methods
    updateUI() {
        this.updatePlayButton();
        this.updateFavoriteButton();
        this.renderPlaylists();
        this.renderFavorites();
        this.renderHistory();
        this.updateFavoritesCount();
    }

    updatePlayButton() {
        const icon = this.state.isPlaying ? 'fa-pause' : 'fa-play';
        const playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.innerHTML = `<i class="fas ${icon}"></i>`;
        }
    }

    updateFavoriteButton() {
        const trackKey = `${this.state.currentPlaylist}-${this.state.currentTrackIndex}`;
        const isFavorited = this.state.favorites.some(fav => fav.key === trackKey);

        const btn = document.getElementById('favoriteBtn');
        if (btn) {
            btn.innerHTML = isFavorited ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
            btn.classList.toggle('active', isFavorited);
        }
    }

    updateProgressBar() {
        const progressBar = document.getElementById('progressBar');
        if (this.audio.duration && progressBar) {
            progressBar.value = this.audio.currentTime;
            progressBar.max = this.audio.duration;

            const progressFill = document.querySelector('.progress-fill');
            if (progressFill) {
                const percent = (this.audio.currentTime / this.audio.duration) * 100;
                progressFill.style.width = `${percent}%`;
            }
        }
    }

    updateCurrentTime() {
        const currentTime = document.getElementById('currentTime');
        if (currentTime) {
            currentTime.textContent = this.formatTime(this.audio.currentTime);
        }
    }

    updateDuration() {
        const duration = document.getElementById('duration');
        if (duration) {
            duration.textContent = this.formatTime(this.audio.duration);
        }
    }

    showVisualizer(show) {
        const visualizer = document.getElementById('visualizer');
        if (visualizer) {
            visualizer.classList.toggle('playing', show);
        }
    }

    showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        const section = document.getElementById(sectionId);
        const navItem = document.querySelector(`[data-section="${sectionId}"]`);

        if (section) section.classList.add('active');
        if (navItem) navItem.classList.add('active');

        if (sectionId === 'favorites') this.renderFavorites();
        if (sectionId === 'history') this.renderHistory();
        if (sectionId === 'playlists') this.renderPlaylists();
        if (sectionId === 'search') {
            const searchInput = document.getElementById('globalSearch');
            if (searchInput) {
                searchInput.value = '';
                this.searchTracks('');
            }
        }
    }

    // Render Methods
    renderPlaylists() {
        const grid = document.getElementById('playlistsGrid');
        if (!grid) return;

        grid.innerHTML = Object.keys(this.playlists).map(key => {
            const playlist = this.playlists[key];
            return `
                <div class="playlist-card" onclick="musicPlayer.loadPlaylist('${key}')">
                    <img src="${playlist.image}" alt="${playlist.name}" onerror="this.src='https://via.placeholder.com/200x120/1a1a2e/08d9d6?text=🎵'">
                    <h3>${playlist.name}</h3>
                    <p>${playlist.tracks.length} músicas</p>
                </div>
            `;
        }).join('');
    }

    renderFavorites() {
        const list = document.getElementById('favoritesList');
        if (!list) return;

        if (this.state.favorites.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <i class="far fa-heart"></i>
                    <p>Nenhuma música favoritada</p>
                </div>
            `;
            return;
        }

        list.innerHTML = this.state.favorites.map((fav, index) => `
            <div class="track-item" onclick="musicPlayer.playFavorite(${index})">
                <img src="${fav.track.image}" alt="${fav.track.name}">
                <div class="track-info-small">
                    <h4>${fav.track.name}</h4>
                    <p>${fav.track.artist}</p>
                </div>
                <div class="track-actions">
                    <button class="track-action-btn" onclick="event.stopPropagation(); musicPlayer.removeFavorite(${index})" title="Remover">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    renderHistory() {
        const list = document.getElementById('historyList');
        if (!list) return;

        if (this.state.history.length === 0) {
            list.innerHTML = `
                <div class="empty-state">
                    <i class="far fa-clock"></i>
                    <p>Nenhuma música no histórico</p>
                </div>
            `;
            return;
        }

        list.innerHTML = this.state.history.slice(0, 20).map((item, index) => `
            <div class="track-item" onclick="musicPlayer.playFromHistory(${index})">
                <img src="${item.track.image}" alt="${item.track.name}">
                <div class="track-info-small">
                    <h4>${item.track.name}</h4>
                    <p>${item.track.artist}</p>
                    <small>${new Date(item.playedAt).toLocaleDateString()}</small>
                </div>
            </div>
        `).join('');
    }

    // Action Methods
    playFavorite(index) {
        const favorite = this.state.favorites[index];
        this.loadPlaylist(favorite.playlist);
        setTimeout(() => {
            this.loadTrack(favorite.trackIndex);
            this.play();
        }, 100);
    }

    playFromHistory(index) {
        const historyItem = this.state.history[index];
        this.loadPlaylist(historyItem.playlist);
        setTimeout(() => {
            this.loadTrack(historyItem.trackIndex);
            this.play();
        }, 100);
    }

    removeFavorite(index) {
        this.state.favorites.splice(index, 1);
        this.saveFavorites();
        this.renderFavorites();
        this.updateFavoriteButton();
        this.updateFavoritesCount();
        this.showNotification('Removido dos favoritos');
    }

    clearFavorites() {
        this.state.favorites = [];
        this.saveFavorites();
        this.renderFavorites();
        this.updateFavoriteButton();
        this.updateFavoritesCount();
        this.showNotification('Favoritos limpos');
    }

    clearHistory() {
        this.state.history = [];
        this.saveHistory();
        this.renderHistory();
        this.showNotification('Histórico limpo');
    }

    // Utility Methods
    getCurrentTrack() {
        return this.getCurrentTracks()[this.state.currentTrackIndex];
    }

    getCurrentTracks() {
        return this.playlists[this.state.currentPlaylist]?.tracks || [];
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    updateFavoritesCount() {
        const badge = document.getElementById('favoritesCount');
        if (badge) {
            badge.textContent = this.state.favorites.length;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        if (!notification) return;

        notification.textContent = message;
        notification.className = `notification ${type} show`;

        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Persistência
    saveFavorites() {
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
    }

    saveHistory() {
        localStorage.setItem('history', JSON.stringify(this.state.history));
    }
}

// Inicializar o player quando a página carregar
let musicPlayer;
document.addEventListener('DOMContentLoaded', () => {
    musicPlayer = new MusicPlayer();
});