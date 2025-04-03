const 文字欄 = document.querySelector(".文字欄");
// querySelector語法()取得括號中內容
const 清單 = document.querySelector(".清單");
const 按鈕 = document.querySelector(".按鈕");

function 新任務() {
    if (文字欄.value === ""){
        return;
    }
    // 如果輸入為空，直接中斷函式
    const 任務 = document.createElement("li");
    // createElement可插入新html標籤(如li)
    任務.innerHTML = `
        <input type = "checkbox" class = "打勾方塊"> 
        <label>${文字欄.value}</label>
        <button class="垃圾桶">🗑️</button>`;
        // textContent只能建立中文內容，改用innerHTML
        // input行:建立打勾方塊
        // label:任務名稱

        const 垃圾桶 = 任務.querySelector(".垃圾桶");
        const 打勾方塊 = 任務.querySelector(".打勾方塊")
        
        垃圾桶.addEventListener("click", function(){
            任務.remove();
        })
        // 偵測按鈕動作並移除

        打勾方塊.addEventListener("click", function(){
            if(打勾方塊.checked)//確定打勾方塊是否被勾選
            {
            任務.style.textDecoration = "line-through";
            // 字體增加linethrough
            任務.style.color = "#999";
            // 顏色改為淺灰
            清單.append(任務);
            // 將任務移至清單底部
            } else //把勾勾移除的條件下 
            {
            任務.style.textDecoration = "none";
            // 字體還原
            任務.style.color = "";
            // 顏色還原
            清單.prepend(任務);
            // 將任務移至清單上方
            }
        }
        )
        // 

    清單.append(任務);
    // 把新任務加到清單底部
    文字欄.value = "";
    // 清空文字欄
}

按鈕.addEventListener("click", 新任務)

文字欄.addEventListener("keyup", function(e) {
    if(e.key ==="Enter") {
        新任務()
    }
    // key回傳按下的鍵名，如果按下enter將執行新任務函式
});
// addEventListener偵測用戶瀏覽網頁動作，keyup為按下按鍵後放開