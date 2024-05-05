-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(256) NOT NULL,
    `subtitle` VARCHAR(256) NOT NULL,
    `summary` VARCHAR(512) NOT NULL,
    `full_description` VARCHAR(1024) NOT NULL,
    `price` FLOAT NOT NULL,
    `image_thumb` VARCHAR(1024) NOT NULL,
    `image_full` VARCHAR(1024) NOT NULL,
    `specification_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

