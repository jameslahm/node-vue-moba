<template>
	<div>
		<div class='topbar py-2 px-3 d-flex ai-center bg-black'>
			<img src="../assets/logo.png" height="30" >
			<div class='flex-1 px-2 text-left'>
				<div class='text-white fs-sm'>王者荣耀</div>
				<div class='text-grey-1 fs-xxs'>团队成就更多</div>
			</div>
			<button type='button' class='btn bg-primary'>立即下载</button>
		</div>
		<div class='bg-primary pt-3 pb-2'>
			<div class='nav nav-inverse d-flex jc-around pb-1 text-white'>
				<div class='nav-item active'>
					<router-link class='nav-link' tag='div' to='/'>首页</router-link>
				</div>
				<div class='nav-item'>
					<router-link class='nav-link' tag='div' to='/'>攻略中心</router-link>
				</div>
				<div class='nav-item'>
					<router-link class='nav-link' tag='div' to='/'>赛事中心</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

