$(function() {
    $("#example1").DataTable({
        "language": {
            "paginate": {
                "next": "بعدی",
                "previous": "قبلی"
            },
            "search": "جستجو ",
            "Show": "نمایش",
            "emptyTable": "هیچ داده‌ای در جدول وجود ندارد",
            "info": "نمایش _START_ تا _END_ از _TOTAL_ ردیف",
            "infoEmpty": "نمایش 0 تا 0 از 0 ردیف",
            "infoFiltered": "(فیلتر شده از _MAX_ ردیف)",
            "infoThousands": ",",
            "lengthMenu": "نمایش _MENU_ ردیف",
            "loadingRecords": "در حال بارگزاری...",
            "processing": "در حال پردازش...",
            "search": "جستجو:",
            "zeroRecords": "رکوردی با این مشخصات پیدا نشد",
            "emptyTable": "هیچ داده‌ای در جدول وجود ندارد",
            "info": "نمایش _START_ تا _END_ از _TOTAL_ ردیف",
            "infoEmpty": "نمایش 0 تا 0 از 0 ردیف",
            "infoFiltered": "(فیلتر شده از _MAX_ ردیف)",
            "infoThousands": ",",
            "lengthMenu": "نمایش _MENU_ ردیف",
            "loadingRecords": "در حال بارگزاری...",
            "processing": "در حال پردازش...",
            "search": "جستجو:",
            "zeroRecords": "رکوردی با این مشخصات پیدا نشد",
            "paginate": {
                "first": "برگه‌ی نخست",
                "last": "برگه‌ی آخر",
                "next": "بعدی",
                "previous": "قبلی"
            },
            "aria": {
                "sortAscending": ": فعال سازی نمایش به صورت صعودی",
                "sortDescending": ": فعال سازی نمایش به صورت نزولی"
            },
            "autoFill": {
                "cancel": "انصراف",
                "fill": "پر کردن همه سلول ها با ساختار سیستم",
                "fillHorizontal": "پر کردن سلول های افقی",
                "fillVertical": "پرکردن سلول های عمودی",
                "info": "نمونه اطلاعات پرکردن خودکار"
            },
            "buttons": {
                "collection": "مجموعه",
                "colvis": "قابلیت نمایش ستون",
                "colvisRestore": "بازنشانی قابلیت نمایش",
                "copy": "کپی",
                "copySuccess": {
                    "1": "یک ردیف داخل حافظه کپی شد",
                    "_": "%ds ردیف داخل حافظه کپی شد"
                },
                "copyTitle": "کپی در حافظه",
                "excel": "اکسل",
                "pageLength": {
                    "-1": "نمایش همه ردیف‌ها",
                    "1": "نمایش 1 ردیف",
                    "_": "نمایش %d ردیف"
                },
                "print": "چاپ",
                "copyKeys": "برای کپی داده جدول در حافظه سیستم کلید های ctrl یا ⌘ + C را فشار دهید",
                "csv": "فایل CSV",
                "pdf": "فایل PDF"
            },
            "searchBuilder": {
                "add": "افزودن شرط",
                "button": {
                    "0": "جستجو ساز",
                    "_": "جستجوساز (%d)"
                },
                "clearAll": "خالی کردن همه",
                "condition": "شرط",
                "conditions": {
                    "date": {
                        "after": "بعد از",
                        "before": "بعد از",
                        "between": "میان",
                        "empty": "خالی",
                        "equals": "برابر",
                        "not": "نباشد",
                        "notBetween": "میان نباشد",
                        "notEmpty": "خالی نباشد"
                    },
                    "number": {
                        "between": "میان",
                        "empty": "خالی",
                        "equals": "برابر",
                        "gt": "بزرگتر از",
                        "gte": "برابر یا بزرگتر از",
                        "lt": "کمتر از",
                        "lte": "برابر یا کمتر از",
                        "not": "نباشد",
                        "notBetween": "میان نباشد",
                        "notEmpty": "خالی نباشد"
                    },
                    "string": {
                        "contains": "حاوی",
                        "empty": "خالی",
                        "endsWith": "به پایان می رسد با",
                        "equals": "برابر",
                        "not": "نباشد",
                        "notEmpty": "خالی نباشد",
                        "startsWith": "شروع  شود با"
                    },
                    "array": {
                        "equals": "برابر",
                        "empty": "خالی",
                        "contains": "حاوی",
                        "not": "نباشد",
                        "notEmpty": "خالی نباشد",
                        "without": "بدون"
                    }
                },
                "data": "اطلاعات",
                "deleteTitle": "حذف عنوان",
                "logicAnd": "و",
                "logicOr": "یا",
                "title": {
                    "0": "جستجو ساز",
                    "_": "جستجوساز (%d)"
                },
                "value": "مقدار"
            },
            "select": {
                "1": "%d ردیف انتخاب شد",
                "_": "%d ردیف انتخاب شد",
                "cells": {
                    "1": "1 سلول انتخاب شد",
                    "_": "%d سلول انتخاب شد"
                },
                "columns": {
                    "1": "یک ستون انتخاب شد",
                    "_": "%d ستون انتخاب شد"
                },
                "rows": {
                    "0": "%d ردیف انتخاب شد",
                    "1": "1ردیف انتخاب شد",
                    "_": "%d  انتخاب شد"
                }
            },
            "thousands": ",",
            "decimal": "اعشاری",
            "searchPanes": {
                "clearMessage": "همه را پاک کن",
                "collapse": {
                    "0": "صفحه جستجو",
                    "_": "صفحه جستجو (٪ d)"
                },
                "count": "{total}",
                "countFiltered": "{shown} ({total})",
                "emptyPanes": "صفحه جستجو وجود ندارد",
                "loadMessage": "در حال بارگیری صفحات جستجو ...",
                "title": "فیلترهای فعال - %d"
            }
        },
        "info": false,
        //"lengthChange": false,
        //"dom": '<"#example1_filter.dataTables_filter">frtip'
    });
    $("#example1_wrapper #example1_length").html('<button type="button" click.delegate="openDialog()" class="btn btn-info waves-effect waves-light  au-target" au-target-id="17">افزودن مشترک</button>');
});