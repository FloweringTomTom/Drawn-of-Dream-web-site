<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage FMWTK_Wordpress
 * @since 0.0.1
 * @version 0.0.1
 */

get_header(); ?>
<?php
while ( have_posts() ) : the_post();
	get_template_part( 'template-parts/page/content', 'page' );
endwhile; // End of the loop.
?>
<?php get_footer();
