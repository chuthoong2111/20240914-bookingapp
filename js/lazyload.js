if(!!window.IntersectionObserver){
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
      entry.target.classList.remove("lazy-bgr");
			observer.unobserve(entry.target);
		}
		});
	}, {
    threshold: 0.3
  });
	document.querySelectorAll('div').forEach(div => { observer.observe(div) });
}
// 
if(!!window.IntersectionObserver){
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.src = entry.target.dataset.src;
			observer.unobserve(entry.target);
		}
		});
	}, {
    threshold: 0.7
  });
	document.querySelectorAll('img.lazy').forEach(img => { observer.observe(img) });
}
else document.querySelector('#warning').style.display = 'block';