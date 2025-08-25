<?php

// Serve the Vite index.html as the root page
$viteIndex = __DIR__ . '/index.html';
if (file_exists($viteIndex)) {
	readfile($viteIndex);
} else {
	http_response_code(404);
	echo 'Vite index.html not found.';
}