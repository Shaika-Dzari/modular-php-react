<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

// Config
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);
$container = $app->getContainer();

// Logging
$container['logger'] = function($c) {
    $logger = new \Monolog\Logger('my_logger');
    $file_handler = new \Monolog\Handler\StreamHandler("../logs/app.log");
    $logger->pushHandler($file_handler);
    return $logger;
};

// PHP-views
$container['view'] = new \Slim\Views\PhpRenderer("../templates/");

$app->get('/', function (Request $request, Response $response) {
    $this->logger->addInfo("[" . $request->getMethod() . "] => " . $request->getUri());
    // $name = $request->getAttribute('name');

    $response = $this->view->render($response, "home/index.phtml", ["name" => "Bob", "version" => "1"]);
    return $response;
});

// Run it!
$app->run();