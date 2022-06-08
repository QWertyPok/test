 
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});

const myarr = [
    {
        "id": 1,
        "time": 1626224738,
        "title": "Title 01",
        "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed placeat similique eaque incidunt quia, odio debitis quae. Id, tenetur voluptas omnis architecto pariatur esse, repudiandae illum voluptates repellendus commodi culpa!\r\n        Aperiam perferendis nesciunt nemo consectetur sit laboriosam quasi hic possimus nam praesentium corrupti commodi inventore ut harum, at fugit mollitia sequi. Fugiat alias odit id distinctio odio sapiente quidem non.\r\n        Totam repudiandae ut omnis corporis eum eos, officiis accusamus cupiditate! Asperiores, aut est minus quaerat at maxime labore atque ex sapiente vel ipsum molestias enim quo laudantium iusto amet doloribus!\r\n        Distinctio beatae dolorum doloribus dolores voluptatum commodi quibusdam eum, provident maiores recusandae velit quisquam nobis esse? Ea ratione corporis natus accusamus perferendis, voluptate provident repudiandae pariatur repellat deleniti, libero veritatis?\r\n        Quod neque eum, vero sapiente dignissimos dolores enim quos praesentium repellendus natus odit porro voluptate inventore officia odio asperiores, magni mollitia harum accusantium a doloremque cumque, assumenda possimus? Ullam, sint."
    },
    {
        "id": 2,
        "time": 1626193738,
        "title": "Title 02",
        "text": "Cumque magni et eum aliquid. Reiciendis amet id veritatis adipisci totam? Et dolorem, omnis natus ut dicta necessitatibus recusandae cum dignissimos voluptates, vero officiis illum! Facilis magnam ducimus sapiente pariatur!\r\n        Officia, distinctio iusto. Dolor tempore obcaecati quisquam, vero, quidem culpa ipsum ratione accusamus perspiciatis nemo repellat doloremque! Excepturi cum qui necessitatibus, et corporis atque tempore maxime, distinctio temporibus voluptatum est.\r\n        Labore, dolores illum recusandae quis veniam debitis in pariatur obcaecati, sunt, magnam ab aliquam libero ipsam delectus fugiat cupiditate reiciendis nulla temporibus. Doloremque animi iure accusantium consequuntur reprehenderit consectetur neque.\r\n        Eligendi quibusdam veniam, magni libero inventore quos eveniet sunt in aliquid, nisi ratione delectus voluptates quae. Facere doloremque mollitia amet iste quasi voluptas error repellendus vitae unde a, rerum blanditiis?\r\n        Aut delectus quis repellat harum, sed deserunt cumque labore architecto vel sit est neque dicta similique. Ut aperiam, voluptatibus facilis pariatur accusamus quidem doloribus illum sint laboriosam nulla neque ipsa!\r\n        Sunt voluptatem culpa, dolore eligendi mollitia enim magnam vero! Asperiores expedita dolore modi quo amet. Porro molestias ea mollitia fuga pariatur molestiae cum, quaerat minima eligendi doloribus qui! Sint, sapiente!\r\n        Aliquid reiciendis ut earum accusamus dolores maiores, hic error fugit eveniet autem, dicta recusandae fuga voluptate assumenda iusto optio quas mollitia totam est. Nihil nulla dolore ipsam ducimus illo libero?\r\n        Dolore culpa accusamus autem fuga omnis, non at impedit cumque, illo nisi numquam reprehenderit consectetur similique sed amet. Quas sint quos debitis culpa dolor excepturi fuga eum quam eius earum."
    },
    {
        "id": 3,
        "time": 1625982738,
        "title": "Title 03",
        "text": "Cumque, molestias ex nesciunt corporis earum voluptas facere amet similique perspiciatis aut recusandae consectetur incidunt quos fuga a quam ipsa sequi quo? Porro corrupti facere cumque sapiente ipsa explicabo modi.\r\n        Ratione sapiente dolore praesentium cumque minus corrupti distinctio ad assumenda nam ab saepe a error corporis repudiandae laudantium, iure impedit optio officia eveniet, inventore dolorem numquam repellendus. Facere, aut blanditiis.\r\n        Cupiditate excepturi, doloribus explicabo suscipit exercitationem labore omnis. Maxime repellendus doloribus dolore dolores quos eum quam error qui explicabo saepe facilis sunt corrupti soluta distinctio, iste odit repellat quibusdam at.\r\n        Optio mollitia, repellendus facere eum debitis adipisci esse quos possimus quia nisi praesentium velit recusandae doloribus pariatur qui quae. Numquam nostrum saepe rem fugit beatae, dicta doloremque unde corrupti aut?\r\n        Voluptates minus, distinctio eum numquam ipsam earum perspiciatis autem fugiat, adipisci placeat impedit itaque quasi dolore nam! Quas assumenda expedita doloribus magni, hic quis dolores voluptate alias dolorum dicta obcaecati!\r\n        Dolorem sint natus aliquam. Eius eligendi eaque voluptatibus officiis labore quam ipsum doloribus rerum. Rem, praesentium saepe aliquam quam ratione labore quaerat consectetur hic voluptatum a ea beatae, facere ullam!\r\n        Voluptas ratione, ipsum ad fuga officia hic aliquam consequuntur similique quasi tempore tenetur qui dolor corporis ut, voluptatibus, minus magnam laborum id voluptate expedita in illo ab? Quisquam, quam? Sapiente?"
    },
    {
        "id": 4,
        "time": 1625201738,
        "title": "Title 04",
        "text": "Voluptates, consequuntur? Tempora sed veritatis distinctio, aliquam excepturi velit possimus sapiente, alias fugit repellendus blanditiis tempore similique quod unde magnam eveniet magni atque minima ad dolore nihil facilis deserunt odit.\r\n        Quidem inventore dolorum iusto, ad perspiciatis iure assumenda quaerat alias odit soluta sed deserunt. Maiores expedita eius minima minus repellat blanditiis corrupti. Perspiciatis error aliquid laborum eos? Eos, natus perferendis.\r\n        Recusandae omnis quo facere ipsa libero, nulla odit, natus reprehenderit, sit ducimus id. Excepturi fugiat neque nesciunt a impedit deleniti incidunt voluptates maiores! Atque autem quas earum accusamus sequi rerum!\r\n        Fuga aspernatur totam odit architecto dolores veritatis atque sint consequuntur illum, necessitatibus nesciunt modi perspiciatis distinctio quisquam ab soluta, eveniet excepturi molestias nulla. Quam quae exercitationem illo omnis eum deleniti!\r\n        Incidunt maiores necessitatibus alias perspiciatis ratione dignissimos eveniet recusandae consequatur voluptate pariatur sed explicabo iste, consectetur repudiandae culpa, animi sapiente nihil, error dolor? Ea quidem dignissimos, quas commodi vitae sapiente.\r\n        Fugiat corporis eveniet nihil odio quibusdam debitis officiis tempora, accusamus, sit veritatis, cumque quam obcaecati ullam incidunt tempore? Voluptas exercitationem aliquam odit provident libero eum quisquam laboriosam consequatur! Pariatur, eius.\r\n        Consectetur, cupiditate earum. Sit consequuntur nulla odit perspiciatis consequatur voluptatum iste fugiat ad? Odio soluta aut ratione, inventore commodi unde odit ipsa ab, voluptate nemo maxime ipsum necessitatibus veritatis iusto!."
    },
    {
        "id": 5,
        "time": 1623100738,
        "title": "Title 05",
        "text": "Nostrum cupiditate, reprehenderit, quos eaque temporibus accusamus magnam maiores sed, quia ex nulla quo soluta excepturi vitae quaerat molestiae distinctio eveniet. Architecto ab corporis ipsa odit exercitationem. Voluptas, consequuntur doloremque?\r\n        Autem atque in ab, quasi tempora soluta molestiae, aspernatur magni maxime eveniet molestias rem iure voluptas iusto? Harum dolores nisi at distinctio unde maxime quaerat accusantium minus quod. Explicabo, reprehenderit.\r\n        Distinctio ab eius architecto a cupiditate quibusdam dolor consequuntur aspernatur voluptatibus sapiente repudiandae tempore eaque nisi debitis ut id quasi possimus, in natus, eum totam. Asperiores natus tempora nemo inventore!\r\n        Suscipit, molestias. Voluptatum quod officiis eligendi tempore molestias ratione vitae est placeat amet quisquam. Minima maxime repudiandae recusandae facere ex consequatur voluptatem obcaecati, consequuntur error minus porro, esse maiores laudantium?\r\n        Reprehenderit necessitatibus quos totam quibusdam cumque! Iste necessitatibus vel quos totam cum cumque ad eveniet tenetur officiis odio, consequatur expedita cupiditate, esse ipsum et fugiat dolor nihil excepturi alias dolorem."
    },
    {
        "id": 6,
        "time": 1618449738,
        "title": "Title 06",
        "text": "Molestiae sint alias, necessitatibus quaerat quod obcaecati officia quam perferendis eaque. Eaque assumenda neque error omnis deserunt dolores, dignissimos quod enim ducimus quisquam quam ipsum doloribus accusantium eum adipisci officia?\r\n        Quos dolor exercitationem odio temporibus earum ipsa modi quasi corporis aliquam rem deleniti quod natus, hic expedita odit officia a eligendi enim inventore optio, beatae, assumenda sit commodi? Velit, provident!\r\n        Ea culpa dolorum hic? Fuga perspiciatis ducimus eaque aspernatur labore necessitatibus atque delectus sed distinctio ad magni modi mollitia omnis voluptatem, minima sequi earum id saepe enim totam odit voluptatibus.\r\n        Cum laborum mollitia, explicabo impedit voluptates eos beatae voluptate. Facere, incidunt possimus similique eum voluptas numquam qui sunt. Similique possimus doloribus repellendus ipsum praesentium numquam mollitia alias, totam neque necessitatibus?\r\n        Dicta inventore dolore, minus dolor, id porro enim a nesciunt et in ipsum facilis qui ea quam necessitatibus iusto pariatur, perspiciatis quia quisquam? Asperiores, commodi voluptatem quia quibusdam atque distinctio.\r\n        Debitis est ex quod similique nisi, ipsam laborum veritatis repellat, sapiente nostrum voluptate suscipit quisquam provident iste inventore fugiat corporis unde dignissimos illo perspiciatis cupiditate recusandae nihil totam. Error, dolor.\r\n        Aperiam et eum facere optio fuga molestias, quasi maxime ipsa, deleniti exercitationem eos voluptatem! Non maxime cupiditate officiis facilis sequi, deserunt vel vitae dolores laboriosam sapiente praesentium, hic asperiores autem?"
    },
    {
        "id": 7,
        "time": 1609418738,
        "title": "Title 07",
        "text": "Quae voluptatem aut magnam, tenetur dolorem sint repudiandae perspiciatis consequatur? Similique, doloribus blanditiis perspiciatis, tempora incidunt, impedit necessitatibus architecto quo iusto laborum alias vel. Odit tempore dicta repellat neque? Esse?\r\n        Voluptatibus iste reprehenderit voluptates temporibus porro vel provident eum similique alias libero, veniam sed animi doloribus iure adipisci quia commodi amet consectetur? Est voluptatibus ut laborum quam corrupti, velit saepe.\r\n        Veniam ad rerum rem, a iusto at tempore reprehenderit perspiciatis animi incidunt? Amet temporibus eaque molestiae ex, incidunt sint eveniet in, libero ut, nam odio vitae non quo et illo?\r\n        Ipsum placeat illum odit commodi! Maiores aliquid necessitatibus dolores nostrum explicabo similique neque dolore at quidem harum ipsa excepturi laborum sit omnis, minus illo optio dolorum ab sequi, rem temporibus.\r\n        Dolorem, reprehenderit animi quae fuga id quis modi, architecto tempore quisquam, voluptas rerum sunt deleniti veritatis? Temporibus repudiandae nemo perspiciatis sunt ab mollitia pariatur laudantium, omnis atque cumque velit porro.\r\n        Aut deleniti ipsa voluptates assumenda, commodi enim molestiae quod asperiores cumque culpa itaque sint excepturi ullam blanditiis quam error porro totam at necessitatibus soluta. Magni totam architecto sit eveniet commodi.\r\n        Impedit nesciunt vitae officia neque ipsam laborum praesentium nihil omnis iste unde nisi ad, minima odio, ex, corrupti rerum vero. Officia distinctio porro possimus reprehenderit illo dolore necessitatibus debitis alias.\r\n        Commodi deleniti praesentium eveniet dolores reiciendis quos eaque possimus quasi dolore molestiae quisquam asperiores perferendis impedit ab quam enim rem aliquid tempora, labore hic! Veniam nesciunt iste omnis nam iusto.\r\n        Ipsam labore fuga adipisci sapiente maxime ullam harum? Ex esse quos asperiores itaque rerum veniam, fuga porro et placeat, at hic iure id laboriosam quam cupiditate neque sit magnam culpa?"
    },
    {
        "id": 8,
        "time": 1593457738,
        "title": "Title 08",
        "text": "Incidunt magni voluptatem eaque perspiciatis accusantium assumenda, veniam cum officiis. Quae sequi quod labore vel molestias! Ullam, accusantium aspernatur quia maiores ipsa molestiae autem, distinctio aliquid similique repudiandae, quod atque.\r\n        Molestias ea aperiam, accusantium quidem quam sed nobis earum eligendi delectus natus officiis, ipsam tempora odit eum. Repellat, atque. Nesciunt quos corrupti eius, perspiciatis nulla explicabo ea saepe perferendis odit!\r\n        Laudantium dolorum aspernatur est error quod, non debitis ipsam beatae eaque. Iste provident vero iure labore ea vitae laudantium, similique distinctio ipsam modi fuga nulla doloremque et pariatur cum neque.\r\n        Culpa hic rem ut quam sequi maxime blanditiis quia velit. Quae eius consequatur ut, amet ea dolor delectus! Vitae sequi dolorum id ut ipsam placeat quod eius rerum aut? Voluptas?"
    },
    {
        "id": 9,
        "time": 1567176738,
        "title": "Title 09",
        "text": "At ad natus voluptatibus, optio animi laborum placeat ex laudantium quibusdam, soluta velit omnis rem fugit ullam magni id qui repudiandae ut neque assumenda culpa eligendi. Neque ipsum obcaecati mollitia?\r\n        Asperiores, nam maxime, omnis maiores ipsam accusantium nemo vero harum doloribus molestiae minus, voluptate quae laudantium sunt totam cum iure ipsum dicta commodi voluptatum corporis! Illum tempora blanditiis expedita iusto.\r\n        Possimus maxime asperiores quam, labore aperiam quos eius. Repellendus eligendi laudantium, officiis tenetur quo aspernatur facilis. Qui doloremque eius, ad blanditiis tempora veniam! A culpa fugiat ab voluptate dolore expedita.\r\n        Quo accusamus consequuntur quam neque unde nam, dolorem incidunt blanditiis aspernatur sunt atque impedit officia ad exercitationem id libero tempora perspiciatis illo eos error repellat? Culpa suscipit aperiam inventore facere!\r\n        Porro enim doloribus nobis odio quod consectetur quibusdam sequi ea magnam accusantium, fugiat optio, distinctio velit quaerat voluptates repellendus possimus soluta perspiciatis, pariatur adipisci! Animi consequatur quidem sapiente facilis sed.\r\n        Doloribus, quos eos. Assumenda ipsam quidem aliquam culpa quas odio dicta quasi maxime molestiae quos fugit illo perferendis excepturi, quibusdam tempora similique. Libero similique alias, exercitationem quis necessitatibus asperiores ipsa!\r\n        Ducimus aliquid eum, repudiandae, aperiam mollitia earum veritatis, officia adipisci delectus cumque labore corrupti porro molestiae sit! Eveniet quaerat molestiae delectus, doloremque quas adipisci quibusdam incidunt, praesentium neque labore porro?\r\n        Consectetur ipsa natus cupiditate maiores atque illo eum. Qui architecto velit blanditiis error commodi praesentium ab necessitatibus quae reprehenderit voluptas vitae, inventore sit eaque perferendis magni consequatur sunt harum unde!\r\n        Reprehenderit quae earum neque vero, autem accusantium quisquam natus qui nisi saepe eos iusto totam consequatur doloremque inventore dicta quod molestias! Dignissimos fugiat, accusantium in voluptates error laborum eius ducimus?"
    },
    {
        "id": 10,
        "time": '1526225738',
        "title": "Title 010",
        "text": "Illo ut odio, officia nemo quam est. Iste aspernatur, quos architecto, quis ad delectus voluptatibus consequuntur facilis doloribus ipsa dolores quam culpa obcaecati. Error aut iusto dicta asperiores, culpa modi.\r\n        Corporis ullam blanditiis, quasi veniam accusamus perspiciatis omnis facere ab, incidunt ipsum nulla deserunt asperiores error atque ipsa quae aut veritatis cumque id nemo vitae sequi. Neque a excepturi natus.\r\n        Eaque tempora magnam hic quia totam doloribus? Pariatur error labore ratione perspiciatis odio optio, quibusdam ex a, voluptates quis explicabo quo et temporibus, possimus nesciunt est repellat sint sequi autem.\r\n        Cumque dicta necessitatibus, architecto natus pariatur eos, saepe odio ratione sapiente nobis temporibus ea. Corporis placeat tempore sunt architecto, iste nemo, officiis saepe quod sit ut quis veritatis quibusdam omnis!\r\n        Possimus accusamus repellat earum alias sequi enim dignissimos labore facilis culpa! Est reprehenderit, distinctio ipsam veritatis eum ducimus id. Tenetur at, tempore itaque quae quo dolores nihil repudiandae nesciunt quibusdam.\r\n        Et quibusdam quae facere illum dolorem possimus aperiam quidem, sint tempora ut assumenda nesciunt nostrum iste cum rerum consequuntur consectetur quaerat cumque aliquid iure, vel doloribus saepe accusantium! Fugiat, culpa."
    },
    {
        "id": 11,
        "time": 1465174738,
        "title": "Title 011",
        "text": "Quae quo voluptas optio consectetur corporis? Qui quae dolore tempora sit? Quis quia repudiandae, inventore deserunt fuga sint corporis id, accusamus temporibus aspernatur architecto dolorum dignissimos qui voluptatum quae quidem.\r\n        Dicta earum nisi inventore. Fuga, recusandae. Ipsum, adipisci laboriosam! Eligendi dolores eaque corporis aperiam doloribus commodi eveniet quam perferendis consequatur tenetur, tempora pariatur facilis quo labore reprehenderit officia. Soluta, tempore?\r\n        Distinctio, corrupti tempora libero dolor reprehenderit nihil beatae non minima possimus eius corporis aspernatur pariatur odio veniam, modi velit incidunt. Illum non eaque maxime error in. Dolore repellendus sit assumenda.\r\n        Repellat non id nisi veritatis facilis deserunt quas odit perferendis temporibus, ducimus, dolorem ullam consequuntur quaerat nulla, sunt neque corrupti! Iste quos ut tempore quidem quo asperiores cumque amet modi!\r\n        Blanditiis quisquam odio modi libero quod perspiciatis, iure sunt quam rem ut repellendus unde aperiam sapiente et ullam necessitatibus consequuntur voluptas sit voluptatibus beatae qui natus minima non! Vero, obcaecati.\r\n        Fugiat doloribus maxime quos, sunt obcaecati reiciendis soluta expedita omnis quidem eligendi, culpa, quo cum quod. Inventore omnis laborum soluta, molestias, natus saepe eum porro, aperiam tempora et repellat ipsa.\r\n        Consectetur corrupti consequatur, dicta, ex, temporibus reprehenderit est eaque necessitatibus ab quia aut incidunt natus nobis velit similique in? Pariatur doloremque quibusdam vero suscipit velit accusamus dolorum labore impedit doloribus?\r\n        Nam ut vitae, amet praesentium molestiae illo, harum asperiores pariatur consequuntur unde eum distinctio repellat. Numquam officia sapiente mollitia, earum quam dicta? Quos mollitia, sed natus laborum iure eos placeat!"
    }
];

const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };

const pagination_visible_pages = 4;

function hide_from_beginning(element) {
    if (element.style.display === "" || element.style.display === "block") {
        element.style.display = "none";
    } else {
        hide_from_beginning(element.nextSibling);
    }
}

function hide_from_end(element) {
    if (element.style.display === "" || element.style.display === "block") {
        element.style.display = "none";
    } else {
        hide_from_beginning(element.previousSibling);
    }
}


function active_page(element, rows, req_per_page) {
    var current_page = document.getElementsByClassName('active');
    var next_link = document.getElementById('next_link');
    var prev_link = document.getElementById('prev_link');
    var next_tab = current_page[0].nextSibling;
    var prev_tab = current_page[0].previousSibling;
    current_page[0].className = current_page[0].className.replace("active", "");
    if (element === "next") {
        if (parseInt(next_tab.text).toString() === 'NaN') {
            next_tab.previousSibling.className += " active";
            next_tab.setAttribute("onclick", "return false");
        } else {
            next_tab.className += " active"
            render_table_rows(rows, parseInt(req_per_page), parseInt(next_tab.text));
            if (prev_link.getAttribute("onclick") === "return false") {
                prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
            }
            if (next_tab.style.display === "none") {
                next_tab.style.display = "block";
                hide_from_beginning(prev_link.nextSibling)
            }
        }
    } else if (element === "prev") {
        if (parseInt(prev_tab.text).toString() === 'NaN') {
            prev_tab.nextSibling.className += " active";
            prev_tab.setAttribute("onclick", "return false");
        } else {
            prev_tab.className += " active";
            render_table_rows(rows, parseInt(req_per_page), parseInt(prev_tab.text));
            if (next_link.getAttribute("onclick") === "return false") {
                next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
            }
            if (prev_tab.style.display === "none") {
                prev_tab.style.display = "block";
                hide_from_end(next_link.previousSibling)
            }
        }
    } else {
        element.className += "active";
        render_table_rows(rows, parseInt(req_per_page), parseInt(element.text));
        if (prev_link.getAttribute("onclick") === "return false") {
            prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
        }
        if (next_link.getAttribute("onclick") === "return false") {
            next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
        }
    }
}


function render_table_rows(rows, req_per_page, page_no) {
    const response = JSON.parse(window.atob(rows));
    const resp = response.slice(req_per_page * (page_no - 1), req_per_page * page_no)


    $('#request-table').empty();

    resp.forEach(function (element) {


        /* const dateVal = new Date(.time).toLocaleDateString('en-US');});
        
        для num работает но никак не могу изменить для обекта, если знаете способ сообщите пожалуйста  :)*/

        $(document).ready(function () {
            $(".text").each(function () {
                if ($(this).prop("innerHTML").length > 10) {
                    let val = $(this).prop("innerHTML");
                    $(this).prop("innerHTML", val.substr(0, 250) + "...")
                }
            });
        });

        if (Object.keys(element).length > 0) {

            const { time, title, text } = element;
            const td = `<tr><td class="time">${time}</td><td class="title">${title}</td><td class="text">${text}</td></tr>`;
            $('#request-table').append(td);

        }

    });
};

function pagination(data, myarr) {

    const all_data = window.btoa(JSON.stringify(myarr));
    $(".pagination").empty();
    if (data.req_per_page !== 'Все') {
        let pager = `<a href="#" id="prev_link" onclick=active_page('prev',\"${all_data}\",${data.req_per_page})>&laquo;</a>` +
            `<a href="#" class="active" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>1</a>`;
        const total_page = Math.ceil(parseInt(myarr.length) / parseInt(data.req_per_page));
        if (total_page < pagination_visible_pages) {
            render_table_rows(all_data, data.req_per_page, data.page_no);
            for (let num = 2; num <= total_page; num++) {
                pager += `<a href="#" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
        } else {
            render_table_rows(all_data, data.req_per_page, data.page_no);
            for (let num = 2; num <= pagination_visible_pages; num++) {
                pager += `<a href="#" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
            for (let num = pagination_visible_pages + 1; num <= total_page; num++) {
                pager += `<a href="#" style="display:none;" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
        }
        pager += `<a href="#" id="next_link" onclick=active_page('next',\"${all_data}\",${data.req_per_page})>&raquo;</a>`;
        $(".pagination").append(pager);
    } else {
        render_table_rows(all_data, myarr.length, 1);
    }
}

pagination(data, myarr);


function filter_requests() {
    const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };
    pagination(data, myarr);
}
