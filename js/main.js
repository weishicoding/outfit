// 智能穿搭助手 - 原型交互脚本

// 等待DOM加载完成
document.addEventListener("DOMContentLoaded", function () {
  // 处理底部导航栏点击事件
  setupTabBarNavigation();

  // 处理各个页面的特定交互
  setupPageSpecificInteractions();
});

// 设置底部导航栏交互
function setupTabBarNavigation() {
  // 获取所有底部导航项
  const tabItems = document.querySelectorAll(".tab-item");

  // 为每个导航项添加点击事件
  tabItems.forEach((item) => {
    item.addEventListener("click", function () {
      // 移除所有导航项的active类
      tabItems.forEach((tab) => tab.classList.remove("active"));

      // 为当前点击的导航项添加active类
      this.classList.add("active");

      // 获取当前点击的导航项对应的页面
      const tabName = this.querySelector("span").textContent.trim();

      // 模拟页面跳转（在实际应用中，这里会跳转到对应页面）
      console.log(`导航到: ${tabName}`);

      // 在原型中，我们可以通过父窗口来切换iframe
      if (window.parent && window.parent !== window) {
        switch (tabName) {
          case "首页":
            window.parent.location.href = "#home";
            break;
          case "衣橱":
            window.parent.location.href = "#wardrobe";
            break;
          case "试穿":
            window.parent.location.href = "#virtual_tryon";
            break;
          case "购物":
            window.parent.location.href = "#shopping";
            break;
          case "我的":
            window.parent.location.href = "#profile";
            break;
        }
      }
    });
  });
}

// 设置页面特定的交互
function setupPageSpecificInteractions() {
  // 获取当前页面的路径
  const currentPath = window.location.pathname;

  // 根据不同页面设置不同的交互
  if (currentPath.includes("home.html")) {
    setupHomePageInteractions();
  } else if (currentPath.includes("wardrobe.html")) {
    setupWardrobePageInteractions();
  } else if (currentPath.includes("add_clothing.html")) {
    setupAddClothingPageInteractions();
  } else if (currentPath.includes("outfit_detail.html")) {
    setupOutfitDetailPageInteractions();
  } else if (currentPath.includes("virtual_tryon.html")) {
    setupVirtualTryonPageInteractions();
  } else if (currentPath.includes("shopping.html")) {
    setupShoppingPageInteractions();
  } else if (currentPath.includes("profile.html")) {
    setupProfilePageInteractions();
  } else if (currentPath.includes("onboarding")) {
    setupOnboardingInteractions();
  } else if (currentPath.includes("splash.html")) {
    // 启动页3秒后自动跳转到引导页
    setTimeout(() => {
      if (window.parent && window.parent !== window) {
        window.parent.location.href = "#onboarding1";
      }
    }, 3000);
  }
}

// 首页交互
function setupHomePageInteractions() {
  // 场合选择交互
  const categoryPills = document.querySelectorAll(".category-pill");
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      categoryPills.forEach((p) => {
        p.classList.remove("active");
        p.classList.add("inactive");
      });
      this.classList.remove("inactive");
      this.classList.add("active");
    });
  });

  // 查看更多按钮交互
  const viewMoreButtons = document.querySelectorAll("button.text-blue-500");
  viewMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("查看更多被点击");
      alert("查看更多功能将在正式版本中实现");
    });
  });

  // 换一套按钮交互
  const changeOutfitButton = document.querySelector(".secondary-button");
  if (changeOutfitButton) {
    changeOutfitButton.addEventListener("click", function () {
      console.log("换一套被点击");
      alert("正在生成新的穿搭方案...");
    });
  }

  // 试穿按钮交互
  const tryOnButton = document.querySelector(".primary-button");
  if (tryOnButton) {
    tryOnButton.addEventListener("click", function () {
      console.log("试穿被点击");
      if (window.parent && window.parent !== window) {
        window.parent.location.href = "#virtual_tryon";
      }
    });
  }
}

// 衣橱页面交互
function setupWardrobePageInteractions() {
  // 类别选择交互
  const categoryPills = document.querySelectorAll(".category-pill");
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      categoryPills.forEach((p) => {
        p.classList.remove("active");
        p.classList.add("inactive");
      });
      this.classList.remove("inactive");
      this.classList.add("active");
    });
  });

  // 添加衣物按钮交互
  const addButton = document.querySelector(
    ".bg-blue-500 i.fa-plus"
  ).parentElement;
  if (addButton) {
    addButton.addEventListener("click", function () {
      console.log("添加衣物被点击");
      if (window.parent && window.parent !== window) {
        window.parent.location.href = "#add_clothing";
      }
    });
  }

  // 衣物项点击交互
  const clothingItems = document.querySelectorAll(".clothing-item");
  clothingItems.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("衣物项被点击");
      alert("查看衣物详情功能将在正式版本中实现");
    });
  });
}

// 添加衣物页面交互
function setupAddClothingPageInteractions() {
  // 取消按钮交互
  const cancelButton = document.querySelector("button.text-blue-500");
  if (cancelButton && cancelButton.textContent.includes("取消")) {
    cancelButton.addEventListener("click", function () {
      console.log("取消添加衣物");
      if (window.parent && window.parent !== window) {
        window.parent.location.href = "#wardrobe";
      }
    });
  }

  // 保存按钮交互
  const saveButton = document.querySelector("button.text-blue-500:last-child");
  if (saveButton && saveButton.textContent.includes("保存")) {
    saveButton.addEventListener("click", function () {
      console.log("保存衣物");
      alert("衣物已保存！");
      if (window.parent && window.parent !== window) {
        window.parent.location.href = "#wardrobe";
      }
    });
  }
}

// 穿搭详情页面交互
function setupOutfitDetailPageInteractions() {
  // 返回按钮交互
  const backButton = document.querySelector("i.fa-arrow-left").parentElement;
  if (backButton) {
    backButton.addEventListener("click", function () {
      console.log("返回");
      if (window.parent && window.parent !== window) {
        window.parent.location.href = "#home";
      }
    });
  }

  // 收藏按钮交互
  const favoriteButton = document.querySelector("i.fa-heart").parentElement;
  if (favoriteButton) {
    favoriteButton.addEventListener("click", function () {
      console.log("收藏穿搭");
      this.querySelector("i").classList.toggle("far");
      this.querySelector("i").classList.toggle("fas");
      alert("已添加到收藏！");
    });
  }

  // 虚拟试穿按钮交互
  const tryOnButton = document.querySelector(".primary-button");
  if (tryOnButton) {
    tryOnButton.addEventListener("click", function () {
      console.log("虚拟试穿");
      if (window.parent && window.parent !== window) {
        window.parent.location.href = "#virtual_tryon";
      }
    });
  }
}

// 虚拟试穿页面交互
function setupVirtualTryonPageInteractions() {
  // 模特选择交互
  const models = document.querySelectorAll(".rounded-full img");
  models.forEach((model) => {
    model.parentElement.addEventListener("click", function () {
      models.forEach((m) => {
        m.parentElement.classList.remove("border-blue-500");
        m.parentElement.classList.remove("border-2");
      });
      this.classList.add("border-2");
      this.classList.add("border-blue-500");
    });
  });

  // 风格选择交互
  const stylePills = document.querySelectorAll(".category-pill");
  stylePills.forEach((pill) => {
    pill.addEventListener("click", function () {
      stylePills.forEach((p) => {
        p.classList.remove("active");
        p.classList.add("inactive");
      });
      this.classList.remove("inactive");
      this.classList.add("active");
    });
  });

  // 更换组件交互
  const changeButtons = document.querySelectorAll("button.text-blue-500");
  changeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("更换组件");
      alert("更换组件功能将在正式版本中实现");
    });
  });
}

// 购物页面交互
function setupShoppingPageInteractions() {
  // 预算滑块交互
  const budgetSlider = document.querySelector('input[type="range"]');
  const budgetValue = document.querySelector(".text-blue-500.font-medium");

  if (budgetSlider && budgetValue) {
    budgetSlider.addEventListener("input", function () {
      budgetValue.textContent = `¥${this.value}`;
    });
  }

  // 收藏按钮交互
  const favoriteButtons = document.querySelectorAll("i.fa-heart");
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("far");
      this.classList.toggle("fas");
      if (this.classList.contains("fas")) {
        alert("已添加到收藏！");
      }
    });
  });

  // 加入购物车按钮交互
  const addToCartButtons = document.querySelectorAll(
    "button.bg-blue-500.rounded-full"
  );
  addToCartButtons.forEach((button) => {
    if (button.textContent.includes("加入购物车")) {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
        console.log("加入购物车");
        alert("已加入购物车！");
      });
    }
  });

  // 结算按钮交互
  const checkoutButton = document.querySelector(
    "button.w-full.py-3.bg-blue-500"
  );
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function () {
      console.log("结算");
      alert("结算功能将在正式版本中实现");
    });
  }
}

// 个人资料页面交互
function setupProfilePageInteractions() {
  // 设置按钮交互
  const settingButton = document.querySelector("i.fa-cog").parentElement;
  if (settingButton) {
    settingButton.addEventListener("click", function () {
      console.log("设置");
      alert("设置功能将在正式版本中实现");
    });
  }

  // 编辑风格偏好按钮交互
  const editStyleButton = document.querySelector("button.text-blue-500");
  if (editStyleButton && editStyleButton.textContent.includes("编辑风格偏好")) {
    editStyleButton.addEventListener("click", function () {
      console.log("编辑风格偏好");
      alert("编辑风格偏好功能将在正式版本中实现");
    });
  }

  // 设置菜单项交互
  const settingItems = document.querySelectorAll(
    ".bg-white.rounded-xl.divide-y > div"
  );
  settingItems.forEach((item) => {
    item.addEventListener("click", function () {
      const settingName = this.querySelector("p").textContent;
      console.log(`点击设置: ${settingName}`);
      alert(`${settingName}功能将在正式版本中实现`);
    });
  });
}

// 引导页交互
function setupOnboardingInteractions() {
  // 跳过按钮交互
  const skipButton = document.querySelector("button.text-blue-500");
  if (skipButton && skipButton.textContent.includes("跳过")) {
    skipButton.addEventListener("click", function () {
      console.log("跳过引导");
      if (window.parent && window.parent !== window) {
        window.parent.location.href = "#home";
      }
    });
  }

  // 下一步按钮交互
  const nextButton = document.querySelector(".primary-button");
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      console.log("下一步");

      // 获取当前页面路径
      const currentPath = window.location.pathname;

      if (window.parent && window.parent !== window) {
        if (currentPath.includes("onboarding1")) {
          window.parent.location.href = "#onboarding2";
        } else if (currentPath.includes("onboarding2")) {
          window.parent.location.href = "#onboarding3";
        } else if (currentPath.includes("onboarding3")) {
          window.parent.location.href = "#home";
        }
      }
    });
  }
}
