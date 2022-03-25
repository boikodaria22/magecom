<template lang="pug">
	b-container(fluid).modal-container
		b-container
			img.close-modal(src="@/assets/close-white.svg" alt="" @click="closeModal")

			b-row.modal-container-row
				b-col(sm="" md="" lg="5").left-form 
					.third-title.contact.fade-in Contact us
					.first-title.discuss.fade-in Let’s discuss your project
					.form
						input.third-title(type="text" placeholder="Name")
						.line
						input.third-title(type="text" placeholder="Email")
						.line
						input.third-title(type="text" placeholder="Your message")
						.line
						.upload
							label(for="file")
								img(src="@/assets/attach-white.svg", alt="") 
								.third-title ATTACH 
							.file-type (.pdf .docx .png or .txt)
							input(type="file" id="file" name="file" @change="onFileChange" accept=".pdf, .docx, .txt, image/png") 
						.file-name {{ file }}

						.send
							.button
								.button-text Send
								.button-bar
									img.button_image(src="@/assets/arrow-button-white.svg", alt="")
									.button-text Send
									
				b-col(sm="" md="" lg="4").middle-info.fade-in
					.other-ways.fade-in Besides, there're a bunch of other ways to contact us
					.email.third-title sales@magecom.net
					.address.third-title 20-22 Wenlock <br> Road London N1 <br> 7GU United Kingdom
				b-col(sm="" md="" lg="3").right-info.fade-in
					.phone.third-title +17 0475 09 991
					ul.social-networks.third-title
						li Telegram
						li Skype
						li Whatsapp <br> Fb messenger  

			//- b-row.social-networks-row
			//-   b-col(sm="" md="" lg="6")
			//-     img.footer-logo(src="@/assets/magecom-logo.svg", alt="MageCom")
			//-   b-col(sm="" md="" lg="6").social-networks-links
			//-     ul.third-title.social-networks-links_list
			//-       li Linked In
			//-       li Twitter
			//-       li YouTube
			//-       li Facebook
			//-       li Instagram
			
			//- .line.line-anim
			
			//- b-row.footer-info-row
			//-   b-col
			//-     ul.third-title.footer-info-list
			//-       li Terms of use
			//-       li Careers
			//-       li Privacy
			//-       li Contact us
</template>

<script>
export default {
		data() {
				return {
					file: '',
				}
			},
			methods: {
				onFileChange(e) {
					var files = e.target.files || e.dataTransfer.files;
					console.log(files)
		
					this.file = files[0].name
				},
				closeModal() {
					let isModalShowing = document.querySelector('.modal-container').style.display = 'none'

					isModalShowing === 'none' ? 
					document.querySelector('.navbar').style.display = 'initial' : 
					document.querySelector('.navbar').style.display = 'none'
				}
			},
		}
</script>

<style>

</style>