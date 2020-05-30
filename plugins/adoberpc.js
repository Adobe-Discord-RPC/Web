function ReturnCurrentLang() {
    if ($('#LangChange').text() == "Korean") { // 사이트 Language는 영어임 바보야!
        return 'en-US';
    } else {
        return 'ko-KR';
    }
}

function Input_Lang_Change(userlang) {
    let lang = {};
    if (userlang == "ko-KR") {
        lang = {
            "HeaderNav": {
                "PastHome": "기존 홈페이지",
                "SupportPrograms": "지원 프로그램 목록",
                "Github": "깃허브",
                "Facebook": "페이스북",
                "Twitter": "트위터",
                "Lang_Change": "<a href=\"javascript:void(0);\" Onclick=\"ConfirmLangChange(Input_Lang_Change('en-US'))\" id=\"LangChange\">English</a>"
            },
            "DownloadButton": {
                "Unsupported": "지원하지 않는 OS",
                "Windows": "Windows 다운로드"
            },
            "Cover": {
                "Title": "Discord RPC in Adobe Programs.",
                "Description": "별도의 설정을 하지 않아도 어도비 계열 프로그램을 실행시키면 자동으로 Discord RPC를 적용 해 줍니다.",
                "SupportingOS": "지원하는 OS :"
            },
            "Features": {
                "Title": "수많은 기능을 제공하고 있습니다.",
                "Description": "Adobe Discord RPC에서 제공하고 있는 기능들을 살펴보세요.",
                "Lists": [
                    {
                        "Title": "간단한 실행",
                        "Description": "그 어느 설정도 필요하지 않습니다.<br />그저 어도비 계열 프로그램과 디스코드만 켜놓으면 됩니다."
                    },
                    {
                        "Title": "폭넓은 지원",
                        "Description": "어도비 계열 프로그램이 아니더라도 개발자에게 프로그램 추가 건의만 하면 내부 검토 후 지원하는 프로그램으로 추가됩니다."
                    },
                    {
                        "Title": "오픈소스 프로젝트",
                        "Description": "Adobe Discord RPC는 오픈소스 프로젝트입니다.<br />누구나 언제든지 소스코드를 확인하고, 수정 제안을 할 수 있습니다."
                    }
                ]
            },
            "Comments": {
                "Title": "150명 이상이 사용하고 있습니다.",
                "Description": "이곳에서 프로젝트 참여자와 유저들의 의견을 들어보세요.<br />이곳에 본인의 이야기를 담고 싶으신가요? SNS를 통해 문의 해 주세요.",
                "Lists": [
                    {
                        "Descriptions": "2020년 3월 17일, '무언가를 만들고 싶다'라는 단순한 욕구에서 시작된 프로젝트에 이렇게 많은 분들께서 관심을 가져주실 줄은 몰랐습니다.<br />다가올 4.0버전은 틸토님과 함께 작업하여 Node.js로 언어를 변경 할 계획입니다.",
                        "AuthorName": "화향",
                        "AuthorIndicator": "프로젝트 리더"
                    },
                    {
                        "Descriptions": "처음에 화향님이 '나 이거 만들었다'라고 했을 땐 그저 '오 신기해'하고선 말았던 건데, 정신을 차려보니 끌려와 제가 직접 만들고 있더군요 (...)<br />모쪼록 오랜만에 재밌게 열정가득 만든 Adobe Discord RPC 많이많이 애용해주시고, 화향님하고 저 틸토도 기억해주세요 (_ _)",
                        "AuthorName": "틸토",
                        "AuthorIndicator": "프로젝트 개발 및 디자인"
                    }
                ]
            },
            "FooterNav": {
                "PastHome": "기존 홈페이지",
                "SupportPrograms": "지원 프로그램 목록",
                "Message": "©2020 Adobe Discord RPC. All right reserved.<br />해당 프로젝트는 오픈소스 프로젝트이며, Discord. Inc, Adobe를 포함한 모든 기업과는 별개의 서드파티 플러그인임을 알립니다."
            },
            "SweetAlert2": {
                "SupportPrograms": {
                    "Title": "<h2 style=\"word-break: keep-all;\">Adobe Discord RPC 지원 프로그램 목록</h2>",
                    "HTML": `
                        <p style="word-break: keep-all;"><b>어도비 계열 프로그램은 CC 2014 버전부터 지원합니다.</b></p>
                        <p style="word-break: keep-all;"><b>이외 프로그램 (C4D, Blender 등)은 이론상 모든 버전을 지원하나, 가급적 최신 버전 사용을 권장드립니다.</b></p>
                        <img src="./image/Support_Program_Chart.png" alt="지원 프로그램 목록 이미지" />`
                },
                "DownloadWindows": {
                    "NextButton": "다음 단계 &rarr;",
                    "Pages": [
                        {
                            "Title": "설치 프로그램 다운로드",
                            "HTML": `
                                <p style="word-break: keep-all;"><a style="color: #20A6E7;" href="http://github.com/hwahyang1/Adobe-Discord-RPC/releases" target="_blank">Github Releases</a>에서 최신 버전의 설치 파일을 다운받습니다.</p>
                                <p style="word-break: keep-all;">Github 다운 속도가 느릴 경우, <a style="color: #20A6E7;" href="http://drive.google.com/open?id=1iRO8PjsP2POtiOx8smemaWGaG59LvDa2" target="_blank">Google Drive</a>를 사용 할 수 있습니다.</p>
                                <p style="word-break: keep-all;"><b>파일을 다운 받은 뒤에 아래의 버튼을 누릅니다.</b></p>`
                        },
                        {
                            "Title": "설치 과정 진행",
                            "HTML": `
                                <p style="word-break: keep-all;">다운 받은 설치파일을 실행하여 설치 과정을 진행합니다.</p>
                                <p style="word-break: keep-all;"><b>설치가 끝나면 아래의 버튼을 누릅니다.</b></p>`
                        },
                        {
                            "Title": "프로그램 실행",
                            "HTML": `
                                <p style="word-break: keep-all;">바탕화면에 생성된 'Adobe Discord RPC 실행' 바로가기를 더블 클릭하여 프로그램을 실행시킵니다.</p>
                                <p style="word-break: keep-all;"><b>바로가기를 실행하면 아래의 버튼을 누릅니다.</b></p>`
                        },
                        {
                            "Title": "시작 프로그램 관련 안내",
                            "HTML": `
                                <p style="word-break: keep-all;">해당 프로그램은 "시작 프로그램"에 등록되어, Windows 시작과 함께 가동됩니다.</p>
                                <p style="word-break: keep-all;">이를 원치 않으시면, Win + R키를 눌러 shell:startup을 입력하신 다음, Run Adobe Discord RPC 바로가기를 삭제하시면 됩니다.</p>
                                <p style="word-break: keep-all;"><b>해당 내용을 숙지 한 후, 아래의 버튼을 누릅니다.</b></p>`
                        }
                    ],
                    "FinalPage": {
                        "Title": "모든 과정이 끝났습니다!",
                        "HTML": "<p style=\"word-break: keep-all;\">이제 Adobe Discord RPC가 지원하는 프로그램을 실행시키면 RPC가 적용됩니다.</p>",
                        "CloseButton": "닫기"
                    }
                }
            }
        };
    } else {
        lang = {
            "HeaderNav": {
                "PastHome": "Previous Homepage",
                "SupportPrograms": "Supporting Programs",
                "Github": "Github",
                "Facebook": "Facebook",
                "Twitter": "Twitter",
                "Lang_Change": "<a href=\"javascript:void(0);\" Onclick=\"ConfirmLangChange(Input_Lang_Change('ko-KR'))\" id=\"LangChange\">Korean</a>"
            },
            "DownloadButton": {
                "Unsupported": "Unsupported OS",
                "Windows": "Download Windows"
            },
            "Cover": {
                "Title": "Discord RPC in Adobe Programs.",
                "Description": "If you run Adobe series programs without any setup, Discord RPC will be applied automatically.",
                "SupportingOS": "Compatible OS :"
            },
            "Features": {
                "Title": "It offers a lot of capabilities.",
                "Description": "Look at the features that Adobe Discord RPC is providing.",
                "Lists": [
                    {
                        "Title": "Aimple Execution",
                        "Description": "No setup is required.<br />All you have to do is turn on Adobe programs and discords and discords."
                    },
                    {
                        "Title": "폭넓은 지원",
                        "Description": "어도비 계열 프로그램이 아니더라도 개발자에게 프로그램 추가 건의만 하면 내부 검토 후 지원하는 프로그램으로 추가됩니다."
                    },
                    {
                        "Title": "Open Source Project",
                        "Description": "Adobe Discord RPC is an Open Source Project.<br />Anyone can view and contribute to the source code at any time."
                    }
                ]
            },
            "Comments": {
                "Title": "More than 150 people are using it.",
                "Description": "Listen to the opinions of project participants and users here.<br />Would you like to include your story here? Please make an inquiry through SNS.",
                "Lists": [
                    {
                        "Descriptions": "2020년 3월 17일, '무언가를 만들고 싶다'라는 단순한 욕구에서 시작된 프로젝트에 이렇게 많은 분들께서 관심을 가져주실 줄은 몰랐습니다.<br />다가올 4.0버전은 틸토님과 함께 작업하여 Node.js로 언어를 변경 할 계획입니다.",
                        "AuthorName": "HwaHyang",
                        "AuthorIndicator": "Project Leader"
                    },
                    {
                        "Descriptions": "처음에 화향님이 '나 이거 만들었다'라고 했을 땐 그저 '오 신기해'하고선 말았던 건데, 정신을 차려보니 끌려와 제가 직접 만들고 있더군요 (...)<br />모쪼록 오랜만에 재밌게 열정가득 만든 Adobe Discord RPC 많이많이 애용해주시고, 화향님하고 저 틸토도 기억해주세요 (_ _)",
                        "AuthorName": "Tilto",
                        "AuthorIndicator": "Project Developer & Designer"
                    }
                ]
            },
            "FooterNav": {
                "PastHome": "Previous Homepage",
                "SupportPrograms": "Supporting Programs",
                "Message": "©2020 Adobe Discord RPC. All right reserved.<br />Notice that the project is an open source project and is a separate third-party plug-in from all companies, including Discord. Inc, Adobe."
            },
            "SweetAlert2": {
                "SupportPrograms": {
                    "Title": "<h2 style=\"word-break: keep-all;\">Adobe Discord RPC Supporting Programs List</h2>",
                    "HTML": `
                        <p style="word-break: keep-all;"><b>This list will be written in English after the English translation update.</b></p>
                        <p style="word-break: keep-all;"><b>Adobe programs are supported only from CC 2014 to CC 2020.</b></p>
                        <p style="word-break: keep-all;"><b>Other programs (C4D, Blender, etc.) support all versions in theory, but we recommend using the latest version if possible.</b></p>
                        <img src="./image/Support_Program_Chart.png" alt="Supporting Programs List (KR)" />`
                },
                "DownloadWindows": {
                    "NextButton": "Next &rarr;",
                    "Pages": [
                        {
                            "Title": "Download Installer",
                            "HTML": `
                                <p style="word break: keep-all;"><b>Currently, Adobe Discord RPC does not support English translation.</b></p>
                                <p style="word break: keep-all;"><b>The English version of the program will be released sometime in June 2020.</b></p>
                                <br>
                                <p style="word-break: keep-all;">Download the latest version of the installation file from <a style="color: #20A6E7;" href="http://github.com/hwahyang1/Adobe-Discord-RPC/releases" target="_blank">Github Releases</a>.</p>
                                <p style="word-break: keep-all;">If Github is slow down, you can download it through <a style="color: #20A6E7;" href="http://drive.google.com/open?id=1iRO8PjsP2POtiOx8smemaWGaG59LvDa2" target="_blank">Google Drive</a>.</p>
                                <p style="word-break: keep-all;"><b>After downloading the file, press the button below.</b></p>`
                        },
                        {
                            "Title": "Proceeding through the installation process",
                            "HTML": `
                                <p style="word-break: keep-all;">Run the downloaded installation file to proceed with the installation process.</p>
                                <p style="word-break: keep-all;"><b>Press the button below when the installation is complete.</b></p>`
                        },
                        {
                            "Title": "Program Execution",
                            "HTML": `
                                <p style="word-break: keep-all;">Double-click the 'Run Adobe Discord RPC' shortcut created on your desktop to run the program.</p>
                                <p style="word-break: keep-all;"><b>When you launch the shortcut, press the button below.</b></p>`
                        },
                        {
                            "Title": "'Startup Program' Guide",
                            "HTML": `
                                <p style="word-break: keep-all;">The program is registered in the "Startup Program" and will work with Windows startup.</p>
                                <p style="word-break: keep-all;">If you don't want this, press Win + R to enter 'shell:startup', then delete the Run Adobe Discord RPC' shortcut.</p>
                                <p style="word-break: keep-all;"><b>After reading it, press the button below.</b></p>`
                        }
                    ],
                    "FinalPage": {
                        "Title": "The whole process is over!",
                        "HTML": "<p style=\"word-break: keep-all;\">If you now run programs supported by Adobe Discord RPC, the RPC will take effect.</p>",
                        "CloseButton": "Close"
                    }
                }
            }
        };
    }
    return lang;
}

function ConfirmLangChange(lang) {
    /* Header Nav */
    document.getElementById("HD_Previous_HP").innerHTML = `<a href="./v1">${lang['HeaderNav']['PastHome']}</a>`;
    document.getElementById("HD_Supporting_PG").innerHTML = `<a href="javascript:void(0);" OnClick="OpenSupportPrograms();">${lang['HeaderNav']['SupportPrograms']}</a>`;
    document.getElementById("HD_Github").innerHTML = `<a href="http://github.com/Adobe-Discord-RPC/">${lang['HeaderNav']['Github']}</a>`;
    document.getElementById("HD_Facebook").innerHTML = `<a href="http://www.facebook.com/adobediscordrpc/">${lang['HeaderNav']['Facebook']}</a>`;
    document.getElementById("HD_Twitter").innerHTML = `<a href="http://twitter.com/adobediscordrpc">${lang['HeaderNav']['Twitter']}</a>`;
    $("#download-nav").html(`<div class="btn-2">${lang['HeaderNav']['Lang_Change']}</div>`);
        /* Download Button */
        if ( navigator.platform ) {
            if ( navigator.platform.indexOf('Win') > -1 ) { // 윈도
                $("#download-cover").html(`<a class="btn btn--primary btn-height-60" href="javascript:void(0);" OnClick="OpenWindowsGuide();">${lang['DownloadButton']['Windows']}</a>`);
            } else {
                $("#download-cover").html(`<a href="javascript:void(0);" class="btn btn--disabled btn-height-60">${lang['DownloadButton']['Unsupported']}</a>`);
            }
        }

    /* Cover */
    $("#CV_Title").html(`<h1 class="main-title" style="word-break: keep-all;" id="CV_Title">${lang['Cover']['Title']}</h1>`);
    $("#CV_Des").html(`<p style="word-break: keep-all;">${lang['Cover']['Description']}</p>`);
    document.getElementById("CV_Supporting_OS").innerHTML = lang['Cover']['SupportingOS'];

    /* Feature */
    document.getElementById("FT_Title").innerHTML = lang['Features']['Title'];
    document.getElementById("FT_Des").innerHTML = lang['Features']['Description'];
        /* Feature Lists */
        document.getElementById("FT_01_Title").innerHTML = lang['Features']['Lists'][0]['Title'];
        document.getElementById("FT_01_Des").innerHTML = lang['Features']['Lists'][0]['Description'];
        //
        document.getElementById("FT_02_Title").innerHTML = lang['Features']['Lists'][1]['Title'];
        document.getElementById("FT_02_Des").innerHTML = lang['Features']['Lists'][1]['Description'];
        //
        document.getElementById("FT_03_Title").innerHTML = lang['Features']['Lists'][2]['Title'];
        document.getElementById("FT_03_Des").innerHTML = lang['Features']['Lists'][2]['Description'];

    /* Comments */
    document.getElementById("CM_Title").innerHTML = lang['Comments']['Title'];
    document.getElementById("CM_Des").innerHTML = lang['Comments']['Description'];
        /* Comments Lists */
        document.getElementById("CM_01_CM").innerHTML = `"${lang['Comments']['Lists'][0]['Descriptions']}"`;
        document.getElementById("CM_01_Title").innerHTML = lang['Comments']['Lists'][0]['AuthorName'];
        document.getElementById("CM_01_ID").innerHTML = lang['Comments']['Lists'][0]['AuthorIndicator'];
        //
        document.getElementById("CM_02_CM").innerHTML = `"${lang['Comments']['Lists'][1]['Descriptions']}"`;
        document.getElementById("CM_02_Title").innerHTML = lang['Comments']['Lists'][1]['AuthorName'];
        document.getElementById("CM_02_ID").innerHTML = lang['Comments']['Lists'][1]['AuthorIndicator'];

    /* Footer Nav */
    document.getElementById("FT_Previous_HP").innerHTML = lang['FooterNav']['PastHome'];
    document.getElementById("FT_Supporting_PG").innerHTML = lang['FooterNav']['SupportPrograms'];
    document.getElementById("FT_Copy").innerHTML = lang['FooterNav']['Message'];
}

function OpenWindowsGuide() {
    let OWG_lang = Input_Lang_Change(ReturnCurrentLang());

    Swal.mixin({
        confirmButtonText: OWG_lang['SweetAlert2']['DownloadWindows']['NextButton'],
        showCancelButton: false,
        focusConfirm: false,
        progressSteps: ['1', '2', '3', '4']
    }).queue([
        {
            title: OWG_lang['SweetAlert2']['DownloadWindows']['Pages'][0]['Title'],
            html: OWG_lang['SweetAlert2']['DownloadWindows']['Pages'][0]['HTML']
        },
        {
            title: OWG_lang['SweetAlert2']['DownloadWindows']['Pages'][1]['Title'],
            html: OWG_lang['SweetAlert2']['DownloadWindows']['Pages'][1]['HTML']
        },
        {
            title: OWG_lang['SweetAlert2']['DownloadWindows']['Pages'][2]['Title'],
            html: OWG_lang['SweetAlert2']['DownloadWindows']['Pages'][2]['HTML']
        },
        {
            title: OWG_lang['SweetAlert2']['DownloadWindows']['Pages'][3]['Title'],
            html: OWG_lang['SweetAlert2']['DownloadWindows']['Pages'][3]['HTML']
        }
    ]).then((result) => {
        if (result.value) {
            const answers = JSON.stringify(result.value);
            Swal.fire({
                icon: 'success',
                title: OWG_lang['SweetAlert2']['DownloadWindows']['FinalPage']['Title'],
                html: OWG_lang['SweetAlert2']['DownloadWindows']['FinalPage']['HTML'],
                confirmButtonText: OWG_lang['SweetAlert2']['DownloadWindows']['FinalPage']['CloseButton']
            });
        }
    });

}

function OpenSupportPrograms() {
    let OSP_lang = Input_Lang_Change(ReturnCurrentLang());

    Swal.fire({
        icon: 'info',
        title: OSP_lang['SweetAlert2']['SupportPrograms']['Title'],
        html: OSP_lang['SweetAlert2']['SupportPrograms']['HTML'],
        showCloseButton: true,
        focusConfirm: false
    });
}

$('#example-fadeshow').cycle({
    speed: 500,
    timeout: 2500,
    random: false
});

ConfirmLangChange(Input_Lang_Change(navigator.language || navigator.userLanguage));