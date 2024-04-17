<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInite8bd3d94f63777afcd9ff3004728d6a2
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInite8bd3d94f63777afcd9ff3004728d6a2', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInite8bd3d94f63777afcd9ff3004728d6a2', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInite8bd3d94f63777afcd9ff3004728d6a2::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
